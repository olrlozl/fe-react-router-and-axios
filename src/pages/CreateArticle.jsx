import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as api from "../api/apiFunction";

const CreateArticle = () => {
  const navigate = useNavigate();
  const { ownerId } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = () => {
    api
      .createArticle(ownerId, title, body)
      .then((_) => {
        navigate(-1);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <h1>{ownerId}님의 방명록</h1>

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

export default CreateArticle;