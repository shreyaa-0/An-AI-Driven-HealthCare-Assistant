import BiotechIcon from "@mui/icons-material/Biotech";
import ForumIcon from "@mui/icons-material/Forum";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import MedicationIcon from "@mui/icons-material/Medication";
import React from "react";
import { Link } from "react-router-dom";
import intro from "../Assets/Preview.png";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={intro} alt="Logo" />
        </Link>
      </div>
      <div className="nav-center">
        <ul className="nav-menu">
          <li>
            <a href="#solutions">
              Solutions<span className="arrow">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="https://you.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ForumIcon /> AI Doctor
                </a>
              </li>
              <li>
                <Link to="/supplements">
                  <MedicationIcon />
                  Supplements
                </Link>
              </li>
              <li>
                <Link to="/lab-test-interpretation">
                  <BiotechIcon />
                  Lab Test Interpretation
                </Link>
              </li>
              <li>
                <Link to="/second-opinion">
                  {" "}
                  {/* Update the Link */}
                  <GroupAddOutlinedIcon />
                  Second Opinion
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/price">Pricing</Link>
          </li>
          <li>
            <a href="#resources">
              Resources<span className="arrow">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/symptoms-guide">Symptoms Guide</Link>
              </li>
              <li>
                <Link to="/knowledge-base">Knowledge Base</Link>
              </li>
              <li>
                <Link to="/glossary">Glossary</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="login">
        <Link to="/sign-in">
          <button>Sign in</button>
        </Link>
        <Link to="/sign-up">
          <button>Get started for free</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
