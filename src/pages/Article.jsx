import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as api from "../api/apiFunction";

const Article = () => {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    api.getArticleById(articleId).then((res) => {
      setArticle(res.data);
      console.log(res.data);
    });
  }, [articleId]);

  const handleDeleteClicked = () => {
    api.deleteArticle(articleId).then((_) => {
      navigate(-1);
    });
  };

  return article === null ? (
    <p>로딩중</p>
  ) : (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <p>작성일: {article.createdAt}</p>

      <button onClick={() => navigate(`/articles/${articleId}/edit`)}>
        수정하기
      </button>
      <button onClick={handleDeleteClicked}>제거하기</button>
    </>
  );
};

export default Article;