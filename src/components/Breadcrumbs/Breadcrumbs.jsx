export default function Breadcrumbs({ items = [] }) {
    return (
        <div className="breadcrumb_content">
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
        </div>
    );
}
