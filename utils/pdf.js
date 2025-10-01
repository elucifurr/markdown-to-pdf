import { marked } from 'marked';

export function generatePDF(markdown) {
  if (!window.html2pdf) {
    alert('html2pdf todavía no está cargado');
    return;
  }

  const element = document.createElement('div');
  element.className = 'markdown-body pdf-preview';
  element.innerHTML = marked.parse(markdown);
  document.body.appendChild(element);

  const style = document.createElement('style');
  style.innerHTML = `
    .pdf-preview {
      padding: 2em !important;
      font-size: 12px !important;
      line-height: 1.4 !important;
    }
    .pdf-preview p, 
    .pdf-preview li, 
    .pdf-preview pre, 
    .pdf-preview blockquote {
      page-break-inside: avoid;
    }
    .pdf-preview table {
      page-break-inside: auto;
    }
    .pdf-preview tr {
      page-break-inside: avoid;
      page-break-after: auto;
    }
    .pdf-preview h2, .pdf-preview h3 {
      page-break-after: avoid;
    }
  `;
  document.head.appendChild(style);

  window.html2pdf()
    .from(element)
    .set({
      margin: 10,
      filename: 'documento.pdf',
      html2canvas: { scale: 2, scrollY: 0 },
      jsPDF: { orientation: 'portrait', unit: 'pt', format: 'a4' },
      pagebreak: { mode: ['css', 'legacy'] }
    })
    .save()
    .finally(() => {
      document.body.removeChild(element);
      document.head.removeChild(style);
    });
}