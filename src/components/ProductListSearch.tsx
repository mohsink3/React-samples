import { useState, useEffect } from "react";

interface Product {
  id:number;
  title: string;
  price:number;
  images:string;
  
}

function ProductListSearch() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const[SearchTerm,setSearchTerm] = useState<string>("");

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");

    if (response.ok == false) {
      setError("Error while fetching list of products")
    } else {
      const data = await response.json();
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  });
  if (error != null) {
    return <h2 className="text-danger" data-bs-toggle="tooltip" data-bs-placement="top">{error}</h2>
  }
  const filteredProducts = products.filter((product)=>
    product.title.toLowerCase().includes(SearchTerm.toLowerCase())) ;
  return (
    <div className="container mt-4">
      <h2>🔎 Search Product</h2>
      <input
        type="text"
        name="searchTextBox"
        id="searchTextBox"
        value={SearchTerm}
        className="form-control mb-4"
        placeholder="🔍Enter Search Term"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
    <div className="container mt-5">
    <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          filteredProducts.map((product) => (
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
    </div>
  );
};
export default ProductListSearch;