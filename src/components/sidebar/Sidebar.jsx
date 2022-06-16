import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
export const Sidebar = () => {
  const [input, setInput] = useState({ email: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  console.log(input);
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <h1 style={{ fontSize: "50px" }}>ionize</h1>
            <li className="sidebarListItem">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <span className="sidebarListItemText">Home</span>
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <span className="sidebarListItemText">Travel</span>
              </Link>
            </li>

            <li className="sidebarListItem">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <span className="sidebarListItemText">LifeStyle</span>
              </Link>
            </li>
            <li className="sidebarListItem">
              <span className="sidebarListItemText">About</span>
            </li>

            <li className="sidebarListItem">
              <span className="sidebarListItemText">Contact</span>
            </li>

            <h3 className="newsletter-text">Subscribe for newsletter</h3>
            <input
              type="email"
              name="email"
              className="inputbox"
              placeholder="Enter Email Address"
              onChange={handleChange}
            />
          </ul>
        </div>
      </div>
    </>
  );
};
