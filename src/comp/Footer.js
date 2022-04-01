import * as React from "react";
import { Button } from "react-bootstrap";
const Footer = () => {
  return (
    <div>
      <footer
        style={{
          color: "white",
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
          alignContent: `center`,
          height: "5vh",
        }}
      >
        <span
          style={{
            marginLeft: "50%",
            fontWeight: "bolder",
            fontSize: "26px",
          }}
        >
          © 2021 - {new Date().getFullYear()}
        </span>
        {/* <Button
          
          style={{
            display: "flex",
            marginLeft: `95%`,
           
            
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          Back to top{" "}
        </Button> */}
      </footer>
    </div>
  );
};

export default Footer;
