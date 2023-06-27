import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as api from "../api/apiFunction";

const EditArticle = () => {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    api.getArticleById(articleId).then((res) => {
      setTitle(res.data.title);
      setBody(res.data.body);
    });
  }, [articleId]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = () => {
    api
      .updateArticle(articleId, title, body)
      .then((_) => {
        navigate(-1);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <input
        type="text"
        placeholder="제목"
        onChange={handleTitleChange}
        value={title}
      />
      <br />
      <textarea
        type="text"
        placeholder="내용"
        onChange={handleBodyChange}
        value={body}
      />
      <br />

      <button onClick={handleSubmit}>방명록 남기기!</button>
    </>
  );
};

export default EditArticle;