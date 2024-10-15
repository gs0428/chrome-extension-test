import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import Search from "./Search";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
