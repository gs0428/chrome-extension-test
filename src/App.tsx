import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
