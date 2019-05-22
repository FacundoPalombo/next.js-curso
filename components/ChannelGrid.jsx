import React, { Component } from 'react'
import { Link } from '../routes'
import slug from '../helpers/slug'
export default class ChannelGrid extends Component {
  render() {
      const { channels } = this.props;
    return (
      <>
        {channels.map(channel => (
          <Link
            route="channel"
            params={{
              slug: slug(channel.title),
              id: channel.id
            }}
            key={channel.id}
            prefetch
          >
            <div className="channels">
              <a className="channel">
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
        .channels {
          display: grid;
          grid-gap: 15px;
          padding: 15px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          grid-auto-flow: row;
        }
        a.channel {
          display: block;
          margin-bottom: 0.5em;
          color: #333;
          text-decoration: none;
          justify-self: center;
        }
        .channel img {
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
          width: 100%;
        }
        h2 {
          padding: 5px;
          font-size: 0.9em;
          font-weight: 600;
          margin: 0;
          text-align: center;
        }
          `}
        </style>
      </>
    );
  }
}
