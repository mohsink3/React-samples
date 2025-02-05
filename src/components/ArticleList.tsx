import Article from "./Article";
import fetchArticles from "../Services/ArticleServices";


const ArticleList = () => {
  const articles = fetchArticles();
  return (
    <div className="container mt-4">
      <h2 className="mb-3"> Articles</h2>
      {articles.map((article) => (
        <Article key={article.title} title={article.title}>
          {article.body}
        </Article>

      )
      )}
    </div>


  );
};
export default ArticleList;