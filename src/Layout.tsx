import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  useEffect(() => {
    window.Kakao.init(import.meta.env.VITE_KAKAO_JS_KEY);
  }, []);
  return (
    <div className="max-w-96 mx-auto">
      <header className="flex justify-around mb-5">
        <Link to="/">Home</Link>
        <Link to="/post">Post</Link>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
