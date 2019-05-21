import React, { Component } from 'react'

export default class PlayingBar extends Component {
  render() {
      let { media } = this.props;
    return (
      <div>
          <div className="tape">
            <img src={media.urls.image} alt={`${media.title} tape`}/>
          </div>
          <div className="progressBar">
              <audio src={media.urls.high_mp3}></audio>
          </div>
          <style jsx>
              {`
              div{
                  display: grid;
                  grid-template-columns: 4rem 1fr;
                  grid-template-rows: 25% 35% 1fr;
                  width: 100%;
                  min-height: 10vh;
              }
              .tape {
                  grid-area: 1/1/3/2;
                  background: yellow;
              }
              .tape img {
                  
              }
              .progressBar{
                  grid-area: 1/2/3/3;
                  background:lightblue;
              }
              `}
          </style>
      </div>
    )
  }
}
