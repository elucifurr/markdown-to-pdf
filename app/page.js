'use client';

import { useEffect, useState } from 'react';
import MarkdownEditor from '../components/MarkdownEditor';
import MarkdownPreview from '../components/MarkdownPreview';
import Header from '../components/Header';
import { generatePDF } from '../utils/pdf';
import '../styles/github.css';

export default function Page() {
  const [markdown, setMarkdown] = useState(`# Título de ejemplo

Escribe tu Markdown aquí. Puedes usar **negritas**, _cursivas_, tablas y código.

- Lista
- Con
- Varias
- Líneas
`);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '/html2pdf.bundle.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <main className="flex flex-col h-screen p-6 box-border">
      {/* Header */}
      <Header onGeneratePDF={() => generatePDF(markdown)} />

      {/* Contenedor principal con altura fija */}
      <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-5rem)] pb-2">
        {/* Editor */}
        <MarkdownEditor
          markdown={markdown}
          setMarkdown={setMarkdown}
          className="w-full md:w-2/5 h-full overflow-auto border rounded p-4"
        />

        {/* Preview */}
        <MarkdownPreview
          markdown={markdown}
          className="w-full md:w-3/5 h-full overflow-auto border rounded p-4"
        />
      </div>
    </main>
  );
}