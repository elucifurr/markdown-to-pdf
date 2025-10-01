import { FiDownload } from 'react-icons/fi';

export default function Header({ onGeneratePDF }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-semibold text-gray-900">Markdown to PDF</h1>
      <button
        onClick={onGeneratePDF}
        className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100 transition"
      >
        <FiDownload size={16} />
        Download
      </button>
    </div>
  );
}