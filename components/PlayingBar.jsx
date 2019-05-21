import React, { Component } from "react";

export default class PlayingBar extends Component {
  render() {
    let { media } = this.props;
    return (
      <div className="playing">
        <div className="tape">
          <img src={ media.user.urls.image || media.channel.urls.logo_image.original} alt={`${media.title} tape`} />
        </div>
        <div className="progressBar">
            <h5>{media.title}</h5>
          <audio controls>
            <source src={media.urls.high_mp3} type="audio/mp3" />
          </audio>
        <div className="buttons">
            asdads
        </div>
        </div>
        <style jsx>
          {`
            .playing{
                display: grid;
                width: 100%;
                clear: both;
                position: relative;
                bottom: 0px;
                background: #3E364A;
                grid-template-columns: 30vw 1fr;
                grid-template-areas: "tape progress"
            }
            .tape{
                grid-area: tape;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: .80em;
            }
            .tape img {
                width: 100%;
                height: auto;
                align-self: center;
                justify-self: center;
            }
            .progressBar{
                grid-area: progress;
                grid-template-rows: 20% 35% 1fr;
                grid-template-areas: "title" "audio" "buttons";
            }
            h5{
                grid-area: title;
            }
            audio{
                grid-area: audio;
            }
            .buttons{
                grid-area: buttons;
            }
          `}
        </style>
      </div>
    );
  }
}