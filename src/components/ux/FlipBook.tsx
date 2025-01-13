import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

interface FlipbookProps {
    pdfFile: string;
}

const Flipbook: React.FC<FlipbookProps> = ({ pdfFile }) => {
    const [numPages, setNumPages] = React.useState<number>(0);

    const bookWidth = 400;  // Ancho del libro
    const bookHeight = 550; // Altura del libro
    return (
        <div>
            {/* Carga el documento PDF */}
            <Document
                file={pdfFile}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)} // Establece la cantidad de páginas
            >
                {/* Solo renderiza HTMLFlipBook si hay páginas disponibles */}
                {numPages ? (
                    <HTMLFlipBook
                        width={400}
                        height={550}
                        minWidth={300}
                        maxWidth={800}
                        minHeight={400}
                        maxHeight={1000}
                        style={{ margin: "auto" }}
                    >
                        {/* Renderiza las páginas del PDF */}
                        {Array.from(new Array(numPages), (_, index) => (
                            <div className="page" key={index}>
                                <Page pageNumber={index + 1} width={400} />
                            </div>
                        ))}
                    </HTMLFlipBook>
                ) : (
                    <p>Cargando PDF...</p>
                )}
            </Document>
        </div>
    );
};

export default Flipbook;
