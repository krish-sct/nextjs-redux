import React from "react";
import Image from "next/image";
import Warranty from "../../../../public/assets/3yr-warranty_ribbon.png";

const Footer = () => {
  const footerData = [
    {
      products: "camera selector",
      resources: "  FAQ     ",
      company: "About us",
      help: "contact us",
    },
    {
      products: "USB3.0 Camera",
      resources: "Articles",
      company: "News",
      help: "careers",
    },
  ];

  return (
    <div>
      <div className="footer-container">
        <div className="custom-listing">
          <div>
            <div className="footer-row footer-row-header">
              <div>Camera Products</div>
              <div>Resources</div>
              <div>Company</div>
              <div>Help</div>
            </div>
            {footerData.map((val, i) => (
              <div key={i} className="footer-content-row">
                <div className="footer-cell">
                  <a href="/">{val.products}</a>
                </div>
                <div className="footer-cell">
                  <a href="/">{val.resources}</a>
                </div>
                <div className="footer-cell">
                  <a href="/">{val.company}</a>
                </div>
                <div className="footer-cell">
                  <a href="/">{val.help}</a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginLeft: "10rem" }}>
            <Image
              src={Warranty}
              alt="3yr-warranty"
              priority={false}
              className="warranty-img"
            />
          </div>
        </div>
        <div className="viewmore">
          <p>
            &copy; Copyright @{new Date().getFullYear()} &nbsp;
            <a href="/" className="footer-link">
              e-con Systems
            </a>
            <sup>TM</sup> &nbsp;|&nbsp;
            <a href="/" className="footer-link">
              SiteMap
            </a>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footer;

/* <table>
            <tr>
              <th>Camera Products</th>
              <th>Resources</th>
              <th>Company</th>
              <th>Help</th>
            </tr> 
           {footerData.map((val, i) => (
              <tr key={i}>
                <td>
                  <a href="/">{val.products}</a>
                </td>
                <td>
                  <a href="/">{val.resources}</a>
                </td>
                <td>
                  <a href="/">{val.company}</a>
                </td>
                <td>
                  <a href="/">{val.help}</a>
                </td>
              </tr>
            ))} 
           </table> */
