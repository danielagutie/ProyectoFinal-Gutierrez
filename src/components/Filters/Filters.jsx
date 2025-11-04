export default function Filters() {
    return (
        <aside className="sidebar_widget">
            <div className="widget_inner">
                {/* Categories */}
                <div className="widget_list widget_categories">
                    <h2>Categories</h2>
                    <ul>
                        <li className="widget_sub_categories">
                            <a href="#">Men</a>
                            <ul className="widget_dropdown_categories show" id="men">
                                <li><a href="#">New products <span>104</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Filter */}
                <div className="widget_list widget_filter">
                    <h2>Filtros</h2>
                    <div className="filter__list widget_brands">
                        <h3>Sector</h3>
                        <ul className="widget_dropdown_categories show" id="brands">
                            <li>
                                <a href="#">Cerraduras <span>104</span></a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Recent Product */}
                <div className="widget_list">
                    <h2>Recent Product</h2>
                    <div className="recent_product">
                        <div className="recent_product_list d-flex mb-25">
                            <div className="recent_thumb">
                                <a href="#">
                                    <img
                                        src="/images/products/product1.jpg"
                                        alt="Barbour T-shirt"
                                    />
                                </a>
                            </div>
                            <div className="recent_content">
                                <h4>
                                    <a href="#">
                                        Barbour T-shirt <br /> International
                                    </a>
                                </h4>
                                <span>$32.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
