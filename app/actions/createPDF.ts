import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { getWorkers } from './getWorkers';

export async function createPDF() {
  const workers = await getWorkers();

  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const pageWidth = 700;
  const pageHeight = 800;
  const margin = 30;
  let y = pageHeight - 40;

  let page = pdfDoc.addPage([pageWidth, pageHeight]);

  // Título
  page.drawText('Relatório de Trabalhadores', {
    x: margin,
    y,
    size: 18,
    font: fontBold,
    color: rgb(0.2, 0.2, 0.7),
  });

  y -= 25;

  // Linha divisória
  page.drawLine({
    start: { x: margin, y },
    end: { x: pageWidth - margin, y },
    thickness: 1,
    color: rgb(0.6, 0.6, 0.6),
  });

  y -= 30;

  // Cabeçalhos
  const headers = ['Nome', 'Idade', 'Sexo', 'CPF', 'E-mail', 'Cargo'];
  const positions = {
    nome: margin,          // 30
    idade: margin + 160,   // 190
    sexo: margin + 200,    // 230
    cpf: margin + 250,     // 280
    email: margin + 320,   // 350
    cargo: margin + 480,   // 510
  };

  page.drawText('Nome', { x: positions.nome, y, size: 11, font: fontBold });
  page.drawText('Idade', { x: positions.idade, y, size: 11, font: fontBold });
  page.drawText('Sexo', { x: positions.sexo, y, size: 11, font: fontBold });
  page.drawText('CPF', { x: positions.cpf, y, size: 11, font: fontBold });
  page.drawText('E-mail', { x: positions.email, y, size: 11, font: fontBold });
  page.drawText('Cargo', { x: positions.cargo, y, size: 11, font: fontBold });

  y -= 18;

  for (const worker of workers) {
    if (y < 60) {
      // Nova página
      page = pdfDoc.addPage([pageWidth, pageHeight]);
      y = pageHeight - 60;

      // Cabeçalhos na nova página
      page.drawText('Nome', { x: positions.nome, y, size: 11, font: fontBold });
      page.drawText('Idade', { x: positions.idade, y, size: 11, font: fontBold });
      page.drawText('Sexo', { x: positions.sexo, y, size: 11, font: fontBold });
      page.drawText('CPF', { x: positions.cpf, y, size: 11, font: fontBold });
      page.drawText('E-mail', { x: positions.email, y, size: 11, font: fontBold });
      page.drawText('Cargo', { x: positions.cargo, y, size: 11, font: fontBold });

      y -= 18;
    }

    page.drawText(worker.nome || '', { x: positions.nome, y, size: 10, font });
    page.drawText(worker.idade?.toString() || '', { x: positions.idade, y, size: 10, font });
    page.drawText(worker.sexo || '', { x: positions.sexo, y, size: 10, font });
    page.drawText(worker.cpf || '', { x: positions.cpf, y, size: 10, font });

    
    const email = (worker.email || '').length > 22
      ? worker.email.slice(0, 22) + '...'
      : worker.email || '';
    page.drawText(email, { x: positions.email, y, size: 10, font });

    page.drawText(worker.funcao || '', { x: positions.cargo, y, size: 10, font });

    y -= 16;
  }

  // Rodapé com data
  const date = new Date().toLocaleDateString();
  page.drawText(`Gerado em: ${date}`, {
    x: margin,
    y: 30,
    size: 9,
    font,
    color: rgb(0.5, 0.5, 0.5),
  });

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}
