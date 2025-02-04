import Article from "./Article";

const articles = [
    { title: "React Basics", body: "React is a JavaScript library for building UIs." },
    { title: "Understanding Props", body: "Props allow components to receive data from their parent." },
    { title: "What is Bootstrap?", body: "Bootstrap is a CSS framework that helps in designing responsive websites." },
  ];

  const ArticleList = ()=>{
    return(
        <div className="container mt-4">
        <h2 className="mb-3"> Articles</h2>
        {articles.map((article,title)=>(
        <Article key={title} title={article.title}>
        {article.body}
        </Article>
        
        )
      )}
      </div>
            
            
    );
  };
  export default ArticleList;