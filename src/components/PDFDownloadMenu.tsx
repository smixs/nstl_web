import { useState } from 'react';
import { HiOutlineDocumentDownload, HiOutlineChevronDown, HiOutlineDocumentText, HiOutlineDesktopComputer } from 'react-icons/hi';

const PDFDownloadMenu = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<'a4' | '16x9' | null>(null);

  const handleDownload = async (format: 'a4' | '16x9') => {
    setIsGenerating(true);
    setError(null);
    setSelectedFormat(format);
    setShowMenu(false);

    try {
      // Prepare the URL with print parameter
      const presentationUrl = `${window.location.origin}?print=true`;
      
      // Choose endpoint based on format
      const endpoint = format === '16x9' 
        ? 'http://localhost:3002/api/generate-pdf-16x9'
        : 'http://localhost:3001/api/generate-pdf';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: presentationUrl
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to generate PDF: ${response.statusText}`);
      }

      // Get the PDF blob
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const formatSuffix = format === '16x9' ? '16x9' : 'A4';
      link.download = `nestle-presentation-${formatSuffix}-${new Date().toISOString().split('T')[0]}.pdf`;
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
    } catch (err) {
      console.error('Error generating PDF:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate PDF');
    } finally {
      setIsGenerating(false);
      setSelectedFormat(null);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 print:hidden">
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          disabled={isGenerating}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-full font-medium
            transition-all duration-200 shadow-lg hover:shadow-xl
            ${isGenerating 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
            }
          `}
          aria-label="Download PDF"
        >
          <HiOutlineDocumentDownload className="w-5 h-5" />
          <span>
            {isGenerating 
              ? `Generating ${selectedFormat === '16x9' ? '16:9' : 'A4'} PDF...` 
              : 'Download PDF'
            }
          </span>
          {!isGenerating && <HiOutlineChevronDown className="w-4 h-4" />}
        </button>
        
        {/* Format selection menu */}
        {showMenu && !isGenerating && (
          <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden min-w-[200px]">
            <button
              onClick={() => handleDownload('a4')}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors"
            >
              <HiOutlineDocumentText className="w-5 h-5 text-gray-600" />
              <div>
                <div className="font-medium text-gray-900">A4 Format</div>
                <div className="text-xs text-gray-500">Standard print size</div>
              </div>
            </button>
            <button
              onClick={() => handleDownload('16x9')}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors border-t border-gray-100"
            >
              <HiOutlineDesktopComputer className="w-5 h-5 text-gray-600" />
              <div>
                <div className="font-medium text-gray-900">16:9 Format</div>
                <div className="text-xs text-gray-500">Original slide size</div>
              </div>
            </button>
          </div>
        )}
        
        {error && (
          <div className="absolute bottom-full mb-2 right-0 bg-red-100 text-red-700 px-4 py-2 rounded-lg shadow-md max-w-sm">
            <p className="text-sm">{error}</p>
          </div>
        )}
        
        {isGenerating && (
          <div className="absolute bottom-full mb-2 right-0 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg shadow-md">
            <p className="text-sm">Generating high-quality PDF...</p>
            <p className="text-xs mt-1">This may take 10-30 seconds</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFDownloadMenu;