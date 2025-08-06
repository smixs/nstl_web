import express from 'express';
import puppeteer from 'puppeteer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// PDF generation endpoint with 16:9 aspect ratio
app.post('/api/generate-pdf-16x9', async (req, res) => {
  let browser;
  
  try {
    console.log('Starting PDF generation (16:9 format)...');
    
    // Launch Puppeteer
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();
    
    // Set viewport to exact slide dimensions
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2 // Higher quality
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
    
    // Inject CSS for perfect 16:9 rendering
    await page.addStyleTag({
      content: `
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        
        .presentation {
          height: auto !important;
          overflow: visible !important;
          background: white !important;
        }
        
        /* Each slide exactly 1920x1080 */
        .slide {
          display: block !important;
          position: relative !important;
          opacity: 1 !important;
          width: 1920px !important;
          height: 1080px !important;
          margin: 0 !important;
          padding: 0 !important;
          page-break-after: always !important;
          page-break-inside: avoid !important;
          overflow: hidden !important;
          box-sizing: border-box !important;
          background: white !important;
        }
        
        .slide:last-child {
          page-break-after: auto !important;
        }
        
        /* Hide navigation */
        .progress-bar,
        .navigation-hint,
        .fixed,
        button {
          display: none !important;
        }
        
        /* Ensure content stays within bounds */
        .slide > div {
          width: 100% !important;
          height: 100% !important;
          max-width: 1920px !important;
          max-height: 1080px !important;
        }
      `
    });

    // Wait for styles to apply
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate PDF with exact 16:9 dimensions
    console.log('Generating 16:9 PDF...');
    const pdfBuffer = await page.pdf({
      // Exact 16:9 dimensions in pixels
      width: 1920,
      height: 1080,
      
      printBackground: true,
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      displayHeaderFooter: false,
      preferCSSPageSize: false,
      scale: 1, // No scaling - exact size
      waitForFonts: true
    });

    await browser.close();
    
    console.log('PDF generated successfully (16:9)');

    // Send PDF as response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="nestle-presentation-16x9.pdf"');
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
  res.json({ status: 'OK', service: 'PDF Generator 16:9' });
});

app.listen(PORT, () => {
  console.log(`PDF generation server (16:9) running on port ${PORT}`);
});