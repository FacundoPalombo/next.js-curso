import React, { Component } from 'react'
import 'isomorphic-fetch'
import Link from 'next/link'

export default class index extends Component {
  static async getInitialProps() {
    const req = await fetch('http://api.audioboom.com/channels/')
    const { body: channels } = await req.json()
    return { channels }
  }
  render() {
    let {channels} = this.props.channels;
    return (
      <>
        <header>
          <h2>Podcasts</h2>
        </header>
        {channels.map(channel => (
          <Link href={`/channel?id=${channel.id}`} key={channel.id} prefetch>
            <div className="element" >
              <a>
                <img
                  src={channel.urls.logo_image.original}
                  alt={`${channel.title} logo`}
                />
                <h2>{channel.title}</h2>
              </a>
            </div>
          </Link>
        ))}
        <style jsx>
          {`
            div {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: baseline;
              -webkit-box-shadow: 0px 0px 15px -8px rgba(71, 71, 71, 0.71);
              -moz-box-shadow: 0px 0px 15px -8px rgba(71, 71, 71, 0.71);
              box-shadow: 0px 0px 15px -8px rgba(71, 71, 71, 0.71);
            }
            header {
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              background-color: #000f08;
              clear: both;
              width: 100%;
              color: #e7e9e8;
              height: auto;
              min-height: 10vh;
              margin-bottom: 0.35em;
            }
            header h2 {
              font-size: 1em;
            }
            .element {
              margin-bottom: 0.35em;
            }
            a {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: flex-start;
              height: auto;
              width: 100%;
              min-height: 10vh;
            }

            img {
              height: 10vh;
              min-width: 20px;
              order: 1;
            }
            h2 {
              order: 2;
              margin-left: 0.8em;
              text-align: start;
              font-size: 0.72em;
              font-family: DidactGothic, Helvetica, system-ui;
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
      </>
    );
  }
}
