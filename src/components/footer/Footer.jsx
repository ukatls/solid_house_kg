import React from "react";
import css from "./Footer.module.css";
import logo from "../assets/images/logow.svg";

export default function Footer() {
  return (
    <div>
      <footer className={css.footer} >
        <div className="container">
          <div className={css.info}>
            <a href="https://brave-euclid-650084.netlify.app">
              <img height={"100px"} src={logo} alt="Incase" />
            </a>
            <nav>
              <small>About</small>
              <ul>
                <li>
                  <a href="https://brave-euclid-650084.netlify.app">About us</a>
                </li>

                <li>
                  <a href="https://brave-euclid-650084.netlify.app">Timeline</a>
                </li>

                <li>
                  <a href="https://brave-euclid-650084.netlify.app">Careers</a>
                </li>

                <li>
                  <a href="https://brave-euclid-650084.netlify.app">Dealer Registration</a>
                </li>

                <li>
                  <a href="https://brave-euclid-650084.netlify.app">Corporate Sales</a>
                </li>
              </ul>
            </nav>

            <nav>
              <small>Support</small>
              <ul>
                <li>
                  <a href="https://brave-euclid-650084.netlify.app">Contact Us</a>
                </li>

                <li>
                  <a href="https://brave-euclid-650084.netlify.app">Returns</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <span>© 2022 Bishkek/Kyrgyzstan</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
