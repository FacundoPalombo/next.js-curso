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
      </nav>
    );
  }
}
