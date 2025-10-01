'use client';

import { useEffect, useState } from 'react';
import MarkdownEditor from '../components/MarkdownEditor';
import MarkdownPreview from '../components/MarkdownPreview';
import Header from '../components/Header';
import { generatePDF } from '../utils/pdf';
import '../styles/github.css';

export default function Page() {
  const [markdown, setMarkdown] = useState(`# Project Overview

Welcome to **Markdown to PDF**! This editor lets you write Markdown and instantly generate a PDF with GitHub-style formatting.

## Features

- Real-time preview
- GitHub-style rendering
- Fast PDF generation on the client
- Works entirely in your browser

## Example Usage

Here is some sample Markdown:

### Installation

\`\`\`bash
npm install mdsnap
\`\`\`

### Sample Table

| Feature             | Status       |
|--------------------|-------------|
| Real-time Preview   | ✅ Completed |
| PDF Generation      | ✅ Completed |
| GitHub Styling      | ✅ Completed |
| Client-side Only    | ✅ Completed |

### Task List

- [x] Completed task
- [ ] Incompleted task

### Code Snippet

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet("World");
\`\`\`

### Notes

> Remember to save your work frequently!
> Markdown is powerful and flexible.
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
      <Header onGeneratePDF={() => generatePDF(markdown)} />

      <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-5rem)] pb-2">
        <MarkdownEditor
          markdown={markdown}
          setMarkdown={setMarkdown}
          className="w-full md:w-2/5 h-full overflow-auto border rounded p-4"
        />

        <MarkdownPreview
          markdown={markdown}
          className="w-full md:w-3/5 h-full overflow-auto border rounded p-4"
        />
      </div>
    </main>
  );
}