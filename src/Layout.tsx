import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/post">Post</Link>
      <Link to="/setting">Setting</Link>
      <Outlet />
    </div>
  );
};

export default Layout;
