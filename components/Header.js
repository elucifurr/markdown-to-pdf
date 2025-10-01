import { FiDownload } from 'react-icons/fi';

export default function Header({ onGeneratePDF }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Markdown to PDF
      </h1>
      <button
        onClick={onGeneratePDF}
        className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-gray-700 transition border border-gray-300 rounded-md dark:text-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <FiDownload size={16} />
        Download
      </button>
    </div>
  );
}