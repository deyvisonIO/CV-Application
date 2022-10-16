import React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p>Copyright &#169; 2022 deyvisonIO</p>
        <a href="https://github.com/deyvisonIO">
          <img src="src/assets/github-logo.png" alt="Github Logo" />
        </a>
      </footer> 
    );
  }
}