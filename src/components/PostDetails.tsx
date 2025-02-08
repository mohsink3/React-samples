import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: { likes: number; dislikes: number };
    views: number;
    userId: number;
}
const PostDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchPost = async () => {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        console.log(response);

        if (response.ok == false) {
            setError("Error while fetching the list of posts");
        } else {
            const data = await response.json();
            setPost(data);
        };
    };

    useEffect(() => {
        fetchPost();
    }, [id]);

    if (error) return <p className="text-danger">{error}</p>;
    if (!post) return <p>Loading...</p>;
    return (
        <div className="container mt-4">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>
                <strong>👀 Views:</strong> {post.views}
            </p>


            <p>
                <b>👤 User ID:</b> {post.userId}
            </p>
            <Link to="/" className="btn btn-primary">
                ← Back to Posts
            </Link>
        </div>
    );
}
export default PostDetails;