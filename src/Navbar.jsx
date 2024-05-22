import { NavLink } from "react-router-dom";
// import { Paragraph1 } from '../other/Typography';
import { Link } from "react-router-dom";

function Navbar() {
  const nav_links = [
    { id: 0, link: "/", value: "Home" },
    { id: 2, link: "/get-all-blogs", value: "Blogs" },
    { id: 1, link: "/", value: "View Pets" },
    // { id: 3, link: "/add-blog", value: "Add Blog" },
    { id: 4, link: "/login", value: "Login" },
  ];
  return (
    <>
      <nav className="navbar bg-white shadow-xl">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Adopt<span className="text-[--secondary-color]"></span>{" "}
          </Link>
        </div>
        <div className="flex-none">
          {nav_links.map((nav, index) => (
            <NavLink key={index} to={nav.link}>
              <p className="tracking-wider mx-3">{nav.value}</p>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
