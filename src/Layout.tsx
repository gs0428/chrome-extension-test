import { Link, Outlet } from "react-router-dom";

const Layout = () => {
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
