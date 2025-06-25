import { createPDF } from "@/app/actions/createPDF";

export async function GET() {
    const pdfBytes = await createPDF();

    return new Response(pdfBytes, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="relatorio.pdf"',
        },
    });
}