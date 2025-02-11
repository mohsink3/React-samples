import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
interface Product {
    id: number;
    title: string;
    images: string;
    description: string;
}
const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        console.log(response);
        if (response.ok == false) {
            setError("Error while fetching the list of Products");
        } else {
            const data = await response.json();
            setProduct(data);
        };
    };
    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (error) return <p className="text-danger">{error}</p>;
    if (!product) return <p>Loading...</p>
    return (
        <div className="container mt-4">
            <h2>{product.title}</h2>
            <p>{product.description}</p>




            <Link to="/" className="btn btn-primary">
                ← Back to Posts
            </Link>
        </div>
    )
}
export default ProductDetails;
