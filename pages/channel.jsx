import React, { Component } from 'react'

export default class channel extends Component {
    static async getInitialProps({ query }) {
        let idChannel = query.id;
        const req = await fetch(`http://api.audioboom.com/channels/${idChannel}`);
        const { body: channel } = await req.json();
        return { channel };
    }
    render() {
    let defaultBanner = '../static/defaultbanner.png';
    let {channel} = this.props.channel;
    return (
      <div>
        <header className="banner">
        <h2>{channel.title}</h2>
        </header>
        <style jsx>
            {`
            .banner {
            background-image: url("${channel.urls.logo_image.original || defaultBanner}");
            background-repeat: no-repeat;
            background-position: 50% 25%;
            background-size: auto;
            min-height: 15vh;
            display: flex;
            align-items: space-between;
            justify-content: center;
            }
            h2{
                text-align: center;
                font-family: system-ui;
                color: #;
                text-shadow: 2px 1px 1px rgba(0,0,0,0.26)
            }
            `}
        </style>
      </div>
    )
  }
}
