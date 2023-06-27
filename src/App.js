import { BrowserRouter, Routes, Route } from "react-router-dom";
import Owner from "./pages/Owner";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import EditArticle from "./pages/EditArticle";
import CreateArticle from "./pages/CreateArticle";

// 아래는 React Router 예시입니다.
// 예시 Route 3가지는 지우고 시작해주세요!

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:ownerId" element={<Owner />} />
        <Route path="/:ownerId/create" element={<CreateArticle />} />
        <Route path="/articles/:articleId" element={<Article />} />
        <Route path="/articles/:articleId/edit" element={<EditArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;