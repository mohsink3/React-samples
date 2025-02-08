import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

interface Post {
    id: number;
    title: string;
}

const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchPosts = async () => {
        const response = await fetch("https://dummyjson.com/posts");
        console.log(response);

        if (response.ok == false) {
            setError("Error while fetching the list of posts");
        } else {
            const data = await response.json();
            console.log(data);
            setPosts(data.posts);
            console.log(posts);
        };
    }
    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div className="container mt-4">
            <h2>📝 Post List</h2>
            {error && <p className="text-danger">{error}</p>}
            <ul className="list-group">
                {
                    posts.map((post) => (
                        <li key={post.id} className="list-group-item">
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
export default PostList;