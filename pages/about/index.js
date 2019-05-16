import React, { Component } from "react";
export default class index extends Component {
  render() {
    return (
      <div>
        <h2>¡Curso de Next.js!</h2>
        <img src="../../static/next.jslogo.png" alt="next.js" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </p>

        <span>Powered by VS Code</span>
        <style jsx>
          {`
            div {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
            img {
              order: 2;
              width: auto;
              height: auto;
              min-width: 20px;
              max-width: 300px;
            }
            h2 {
              order: 1;
              text-align: center;
              font-family: DidactGothic-Regular, Helvetica, Arial;
            }
            p {
              order: 3;
              text-align: center;
              font-family: Helvetica, Arial;
              text-decoration: no-decoration;
            }
            span {
                position: relative;
                bottom: 1vh;
                clear: both;
                order: 4;
            }
          `}
        </style>
      </div>
    );
  }
}
