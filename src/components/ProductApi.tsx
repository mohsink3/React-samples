import { useState, useEffect } from "react";

interface Product {
  title: string;
  image: string;
  Price: number;
  Category: string;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/productss");

    if (response.ok == false) {
      setError("Error while fetching list of products")
    } else {
      const data = await response.json();
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  });
  if (error != null) {
    return <h2 className="text-danger" data-bs-toggle="tooltip" data-bs-placement="top">{error}</h2>
  }
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          products.map((product, index) => (
            <div className="col">
              <div className="card h-100" key={index}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.Price}</p>
                  <p className="card-text">{product.Category}<small className="text-muted">D</small></p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default ProductList;