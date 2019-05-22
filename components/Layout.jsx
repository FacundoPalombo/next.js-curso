import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";

export default class Layout extends Component {
  render() {
      const { children, title, titleHead } = this.props;
    return (
      <div>
      <Head>
          <title>{ titleHead.lenght < 15 ? titleHead : `${titleHead.substring(0,15)}...` }</title>
      </Head>
        <header>
          <Link href="/">
            <a>{ title.lenght > 35 ? `${title.substring(0,35)}...` : title }</a>
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
              font-family: DidactGothic-Regular, Helvetica, system-ui;
              background: white;
            }
            #__next{
              width: 100vw;
              height: 100vh;
              display: block;
            }
          `}
        </style>
      </div>
    );
  }
}
