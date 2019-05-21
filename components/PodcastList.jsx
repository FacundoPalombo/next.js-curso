import React, { Component } from 'react'
import PlayingBar from '../components/PlayingBar'
import Navigation from '../components/Navigation'

export default class PodcastList extends Component {
  render() {
      let { clip } = this.props;
    return (
      <div>

        <footer>
        <PlayingBar media={clip}/>
        </footer>
       <style jsx>
          {`
                footer{
                    position: relative;
                    bottom: 0px;
                    width: 100%;
                    clear: both;
                    height: auto;
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
      </div>
    )
  }
}
