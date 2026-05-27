import { useEffect, useState } from "react";

function ProductsSection() {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    async function fetchProducts(searchText = "") {   // search empty show all products 
        let apiUrl = "https://dummyjson.com/products";

        if (searchText !== "") {
            apiUrl = `https://dummyjson.com/products/search?q=${searchText}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json(); 

        setProducts(data.products);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchProducts(searchValue);
        }, 1000);

        return () => clearTimeout(timer);
    }, [searchValue]);

    

    return (
        <div className="products-section">
            <h1>Products Directory</h1>

            <input
                type="text"
                placeholder="Search product by name"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />

            <div className="products-container">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.thumbnail} alt="product" />

                        <div>
                            <h2>{product.title}</h2>
                            <p>Price: ${product.price}</p>
                            <p>Rating: {product.rating}</p>
                            <p>Category: {product.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsSection;