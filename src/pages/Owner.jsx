import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as api from "../api/apiFunction";

const Home = () => {
  const { ownerid } = useParams();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`https://guestbook.jmoomin.com/${ownerid}/articles`)
      .then((res) => {
        setArticles(res.data);
        console.log(articles)
      })
      .catch((e) => {
        console.log(e);
      });
    }, [ownerid]);

  return (
    <>
      <h1>{ownerid}님의 방명록</h1>
      <ul>
        {articles.map((article) => {
          return (
            <li>
              <Link to={`/articles/${article.id}`}>{article.title}</Link>
            </li>
          )
        })}
        <li>{articles.title}</li>
      </ul>
      <button onClick={() => navigate(`/${ownerid}/create`)}>방명록 남기기</button>
    </>
  );
};

export default Home;