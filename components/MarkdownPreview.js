import { marked } from 'marked';

export default function MarkdownPreview({ markdown }) {
  return (
    <div
      className="markdown-body w-full md:w-[61%] h-full border border-gray-300 rounded p-4 bg-white text-gray-900 overflow-y-auto"
      dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
    />
  );
}