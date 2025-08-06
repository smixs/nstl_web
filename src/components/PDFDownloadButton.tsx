import { useState } from 'react';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const PDFDownloadButton = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      // Prepare the URL with print parameter
      const presentationUrl = `${window.location.origin}?print=true`;
      
      const response = await fetch('http://localhost:3001/api/generate-pdf', {
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
      link.download = `nestle-presentation-${new Date().toISOString().split('T')[0]}.pdf`;
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
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 print:hidden">
      <button
        onClick={handleDownload}
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
          {isGenerating ? 'Generating PDF...' : 'Download PDF'}
        </span>
      </button>
      
      {error && (
        <div className="absolute bottom-full mb-2 right-0 bg-red-100 text-red-700 px-4 py-2 rounded-lg shadow-md max-w-sm">
          <p className="text-sm">{error}</p>
        </div>
      )}
      
      {isGenerating && (
        <div className="absolute bottom-full mb-2 right-0 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg shadow-md">
          <p className="text-sm">This may take a few moments...</p>
        </div>
      )}
    </div>
  );
};

export default PDFDownloadButton;