interface ArticleProps {
    title: string;
    children: string;
}

const Article = (props: ArticleProps) => {
    return (
        <div className="card shadow-sm my-3">
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.children}</p>
            </div>
        </div>
    );
};

export default Article;