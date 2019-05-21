import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";

export default class Layout extends Component {
  render() {
      const { children, title } = this.props;
    return (
      <div>
      <Head>
          <title>{ title }</title>
      </Head>
        <header>
          <Link href="/">
            <a>{ title }</a>
          </Link>
        </header>
        { children }
        <style jsx>
          {`
            header {
              color: #fff;
              background: #8756ca;
              padding: 15px;
              text-align: center;
            }
            header a {
              color: #fff;
              text-decoration: none;
            }
            header a:hover {
              color: #d6d6d6;
            }
            header a:focus {
              color: #fff;
            }
            div{
              height: auto;
            }
          `}
        </style>
        <style jsx global>
          {`
            @font-face {
              font-family: DidactGothic-Regular;
              src: url("../static/fonts/DidactGothic-Regular.ttf");
              font-weight: normal;
            }
            body {
              margin: 0;
              font-family: system-ui;
              background: white;
            }
          `}
        </style>
      </div>
    );
  }
}
