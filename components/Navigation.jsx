import React, { Component } from "react";
import Link from "next/link";

export default class Navigation extends Component {
  render() {
    const { path } = this.props;
    return (
      <nav>
        <Link href={path}>
          <a className="close">&lt; Volver</a>
        </Link>
        <style jsx>
          {`
            nav {
              background: none;
            }
            nav a {
              display: inline-block;
              padding: 15px;
              color: white;
              text-shadow: 0px 0px 4px rgba(100,100,100,0.7);
              cursor: pointer;
              text-decoration: none;
              float: left;
            }
          `}
        </style>
      </nav>
    );
  }
}
