import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    // if (totalPages === 1) return null; // no mostrar si sólo hay 1 página

    // Calcular páginas visibles (máx 5)
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination_style pagination justify-content-center">
            <ul className="d-flex">

                {/* Primera página */}
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange(1);
                        }}
                    >
                        &lt;&lt;
                    </a>
                </li>

                {/* Números */}
                {pageNumbers.map(num => (
                    <li key={num}>
                        <a
                            href="#"
                            className={num === currentPage ? "current" : ""}
                            onClick={(e) => {
                                e.preventDefault();
                                onPageChange(num);
                            }}
                        >
                            {num}
                        </a>
                    </li>
                ))}

                {/* Última página */}
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange(totalPages);
                        }}
                    >
                        &gt;&gt;
                    </a>
                </li>

            </ul>
        </div>
    );
}
