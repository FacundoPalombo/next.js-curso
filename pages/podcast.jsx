import React, { Component } from "react";
import Link from "next/link";
export default class podcast extends Component {
  static async getInitialProps({ query }) {
    let idClip = query.id;
    let [reqClip] = await Promise.all([
      fetch(`http://api.audioboom.com/audio_clips/${idClip}.mp3`)
    ]);
    let {
      body: { audio_clip }
    } = await reqClip.json(); //
    return { audio_clip };
  }
  render() {
    let { audio_clip } = this.props;
    console.log(audio_clip);
    return (
      <>
        <Navigation path={`/channel?id=${audio_clip}`} />
        <style>
          {`
                  nav {
                    background: none;
                  }
                  nav a {
                    display: inline-block;
                    padding: 15px;
                    color: white;
                    cursor: pointer;
                    text-decoration: none;
                  }
                  .clip {
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    background: #8756ca;
                    color: white;
                  }
                  picture {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex: 1 1;
                    flex-direction: column;
                    width: auto;
                    padding: 10%;
                  }
                  picture div {
                    width: 100%;
                    height: 100%;
                    background-position: 50% 50%;
                    background-size: contain;
                    background-repeat: no-repeat;
                  }
                  .player {
                    padding: 30px;
                    background: rgba(0,0,0,0.3);
                    text-align: center;
                  }
                  h3 {
                    margin: 0;
                  }
                  h6 {
                    margin: 0;
                    margin-top: 1em;
                  }
                  audio {
                    margin-top: 2em;
                    width: 100%;
                  }
          
                  .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 99999;
          
          `}
        </style>
      </>
    );
  }
}
