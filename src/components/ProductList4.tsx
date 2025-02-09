import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  images: string;
  price: number;
}
const ProductList = () => {
  const [Products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    console.log(response);

    if (response.ok == false) {
      setError("error while fetching products");
    } else {
      const data = await response.json();
      setProducts(data.products);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  if (error != null) {
    return <h2 className="text-danger" data-bs-toggle="tooltip" data-bs-placement="top">{error}</h2>
  }
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          Products.map((product) => (
            <div className="col">
              <div className="card h-100" key={product.id}>
                <img src={product.images} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.price}</p>

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