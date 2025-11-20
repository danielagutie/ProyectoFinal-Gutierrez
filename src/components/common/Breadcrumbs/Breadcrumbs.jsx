export default function Breadcrumbs({ items = [], page_title }) {
    return (
        <div className={`breadcrumb_content ${page_title ? "text-center" : ""}`}>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.link ? (
                            <a href={item.link}>{item.label}</a>
                        ) : (
                            <span>{item.label}</span>
                        )}
                    </li>
                ))}
            </ul>
            {page_title && <h3>{page_title}</h3>}
        </div>
    );
}
