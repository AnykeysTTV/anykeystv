import * as React from "react";

const Header = ({ pageTitle }) => {
  return (
    <header
      style={{
        color: "white",
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1
          style={{
            fontFamily: "Twitch",
            fontWeight: "bolder",
          }}
        >
          {pageTitle}
        </h1>
      </div>
    </header>
  );
};

export default Header;
