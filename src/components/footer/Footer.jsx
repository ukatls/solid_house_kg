import React from "react";
import css from "./Footer.module.css";
import logo from "../assets/images/logow.svg";

export default function Footer() {
  return (
    <div>
      <footer className={css.footer} role="contentinfo">
        <div className="container">
          <div className={css.info}>
            <a href="#" itemProp="url">
              <img height={"100px"} src={logo} alt="Incase" />
            </a>
            <nav role="navigation">
              <small>About</small>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>

                <li>
                  <a href="#">Timeline</a>
                </li>

                <li>
                  <a href="#">Careers</a>
                </li>

                <li>
                  <a href="#">Dealer Registration</a>
                </li>

                <li>
                  <a href="#">Corporate Sales</a>
                </li>
              </ul>
            </nav>

            <nav role="navigation">
              <small>Support</small>
              <ul>
                <li>
                  <a href="#">Contact Us</a>
                </li>

                <li>
                  <a href="#">Returns</a>
                </li>

                <li>
                  <a href="#">Warranty</a>
                </li>

                <li>
                  <a href="#">Help / Shipping</a>
                </li>

                <li>
                  <a href="#">Support</a>
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
