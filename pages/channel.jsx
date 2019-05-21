import React, { Component } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
export default class channel extends Component {
  static async getInitialProps({ query }) {
    let idChannel = query.id;
    let [reqChannel, reqClips] = await Promise.all([
      fetch(`http://api.audioboom.com/channels/${idChannel}`),
      fetch(`http://api.audioboom.com/channels/${idChannel}/audio_clips/`)
    ]);

    const {
      body: { channel }
    } = await reqChannel.json();
    const {
      body: { audio_clips }
    } = await reqClips.json();

    return { channel, audio_clips };
  }
  render() {
    let defaultBanner = "../static/defaultbanner.png";
    let { channel, audio_clips } = this.props;
    return (
      <div>
        <header className="banner">
          <Navigation path="/channels" />
          <h2>{channel.title}</h2>
        </header>
        <section>
          {audio_clips.map(clip => (
            <Link href={`/podcast?id=${clip.id}`} prefetch key={clip.id}>
              <a className="podcast">
                <h3>{clip.title}</h3>
                <div className="meta">
                  {Math.ceil(clip.duration / 60)} minutes
                </div>
              </a>
            </Link>
          ))}
        </section>
        <style jsx>
          {`
            header {
              color: #fff;
              background: #8756ca;
              padding: 15px;
              text-align: center;
            }

            .banner {
              width: 100%;
              padding-bottom: 25%;
              background-position: 50% 50%;
              background-size: cover;
              background-color: #aaa;
              background-image: url(${channel.urls.banner_image.original ||
                defaultBanner});
            }

            .channels {
              display: grid;
              grid-gap: 15px;
              padding: 15px;
              grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
            a.channel {
              display: block;
              margin-bottom: 0.5em;
              color: #333;
              text-decoration: none;
            }
            .channel img {
              border-radius: 3px;
              box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
              width: 100%;
            }
            h1 {
              font-weight: 600;
              padding: 15px;
            }
            h2 {
              padding: 5px;
              font-size: 0.9em;
              font-weight: 600;
              margin: 0;
              text-align: center;
            }

            .podcast {
              display: block;
              text-decoration: none;
              color: #333;
              padding: 15px;
              border-bottom: 1px solid rgba(0, 0, 0, 0.2);
              cursor: pointer;
              font-family: Helvetica, system-ui;
            }
            .podcast:hover {
              color: #000;
            }
            .podcast h3 {
              margin: 0;
            }
            .podcast .meta {
              color: #666;
              margin-top: 0.5em;
              font-size: 0.8em;
            }
          `}
        </style>
      </div>
    );
  }
}
