import React, { Component } from 'react'
import PlayingBar from '../components/PlayingBar'
import Navigation from '../components/Navigation'

export default class PodcastList extends Component {
  render() {
      let { clip } = this.props;
    return (
      <div>
          <section>
              <img src={clip.user.urls.image} alt=""/>
          </section>
        <footer>
        <PlayingBar media={clip}/>
        </footer>
       <style jsx>
          {`
                section{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2rem;
                    box-shadow: 0px 0px 4px rgba(177,154,210,.85);
                    background: #3E364A;
                }
                section img {
                    max-width: 65vw;
                    min-width: 65vw;
                    height: auto;
                }
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
          `}
        </style> 
      </div>
    )
  }
}
