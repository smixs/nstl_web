import express from 'express';
import puppeteer from 'puppeteer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the dist directory in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

// PDF generation endpoint
app.post('/api/generate-pdf', async (req, res) => {
  let browser;
  
  try {
    console.log('Starting PDF generation...');
    
    // Launch Puppeteer
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--no-first-run',
        '--no-zygote',
        '--single-process',
        '--disable-extensions'
      ]
    });

    const page = await browser.newPage();
    
    // Set viewport to 16:9 aspect ratio for slides
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1
    });

    // Navigate to the presentation
    const presentationUrl = req.body.url || `http://localhost:${process.env.VITE_PORT || 5173}?print=true`;
    console.log('Navigating to:', presentationUrl);
    
    await page.goto(presentationUrl, {
      waitUntil: ['networkidle0', 'domcontentloaded'],
      timeout: 30000
    });

    // Wait for all slides to be rendered
    await page.waitForSelector('.slide', { timeout: 10000 });
    
    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');
    
    // Inject CSS to ensure proper scaling and visibility
    await page.addStyleTag({
      content: `
        /* Reset print mode styles */
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        
        .presentation {
          height: auto !important;
          overflow: visible !important;
          background: white !important;
        }
        
        /* Scale slides to fit A4 landscape with proper aspect ratio */
        .slide {
          display: block !important;
          position: relative !important;
          opacity: 1 !important;
          
          /* Original slide dimensions */
          width: 100vw !important;
          height: 100vh !important;
          max-width: 1920px !important;
          max-height: 1080px !important;
          
          /* Center and scale to fit page */
          margin: 0 auto !important;
          transform-origin: top center !important;
          
          /* Page breaks */
          page-break-after: always !important;
          page-break-inside: avoid !important;
          break-after: page !important;
          break-inside: avoid !important;
          
          /* Ensure content doesn't overflow */
          overflow: hidden !important;
          box-sizing: border-box !important;
        }
        
        /* Ensure last slide doesn't have page break */
        .slide:last-child {
          page-break-after: auto !important;
          break-after: auto !important;
        }
        
        /* Hide all navigation elements */
        .progress-bar,
        .navigation-hint,
        .fixed,
        button {
          display: none !important;
        }
        
        /* Ensure slide content scales properly */
        .slide > * {
          max-width: 100% !important;
          height: auto !important;
        }
        
        /* Fix for flex containers */
        .slide .flex {
          max-height: 100% !important;
        }
        
        /* Ensure images scale properly */
        .slide img {
          max-width: 100% !important;
          height: auto !important;
          object-fit: contain !important;
        }
        
        /* Fix text overflow */
        .slide h1, .slide h2, .slide h3, .slide p {
          overflow-wrap: break-word !important;
          word-wrap: break-word !important;
        }
      `
    });

    // Wait for styles to apply and images to load
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Generate PDF with custom dimensions
    console.log('Generating PDF...');
    const pdfBuffer = await page.pdf({
      // Use custom width/height for 16:9 aspect ratio
      width: '297mm',  // A4 landscape width
      height: '210mm', // A4 landscape height
      
      // Alternative: use exact slide dimensions
      // width: '1920px',
      // height: '1080px',
      
      printBackground: true,
      margin: {
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
        left: '10mm'
      },
      displayHeaderFooter: false,
      preferCSSPageSize: false,
      
      // Scale down to fit if needed (0.7 = 70% scale)
      scale: 0.85,
      
      // Ensure we wait for everything to load
      waitForFonts: true
    });

    await browser.close();
    
    console.log('PDF generated successfully');

    // Send PDF as response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="nestle-presentation.pdf"');
    res.send(pdfBuffer);

  } catch (error) {
    console.error('Error generating PDF:', error);
    
    if (browser) {
      await browser.close();
    }
    
    res.status(500).json({ 
      error: 'Failed to generate PDF',
      message: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', service: 'PDF Generator' });
});

// Catch all handler for production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`PDF generation server running on port ${PORT}`);
});