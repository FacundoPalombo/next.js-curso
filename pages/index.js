import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <h1>¡Hello world!</h1>
        <img src="../static/platzi-logo.png" alt="platzi"></img>
        <style jsx>
        {`
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        img {
            max-width: 200px;
            min-width: 50px;
            order: 1;
        }
        h1 {
            color: red;
            background-color: blue;
            order: 2;
        }
        body {
            background-color: yellow;
        }
        `}
        </style>
        <style jsx global>{`
        body {
            background-color: green;
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
        `}
        </style>
      </div>
    )
  }
}
