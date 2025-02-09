import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

interface Post {
    id: number;
    title: string;
}

const PostListSearch = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);
    const[searchTerm, setSearhTerm] = useState<string>("");

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
    if (error != null) {
        return <h2 className="text-danger" data-bs-toggle="tooltip" data-bs-placement="top">{error}</h2>
    }
    const filteredPosts= posts.filter((post)=>post.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    return (
        <div className="container mt-4">
            <h2>🔎 Search Post</h2>
            <input
                type="text"
                name="searchTextBox"
                id="searchTextBox"
                value={searchTerm}
                className="form-control mb-3"
                placeholder="🔍Enter Search Term"
                onChange={(e) => setSearhTerm(e.target.value)}
            />
            <ul className="list-group">
                {
                    filteredPosts.map((post) => (
                        <li key={post.id} className="list-group-item">
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
export default PostListSearch;