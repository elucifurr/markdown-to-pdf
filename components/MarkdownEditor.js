export default function MarkdownEditor({ markdown, setMarkdown }) {
  return (
    <textarea
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
      className="w-full md:w-[39%] h-full font-mono text-sm p-4 border border-gray-300 rounded resize-none"
      placeholder="Escribe tu Markdown aquí..."
    />
  );
}