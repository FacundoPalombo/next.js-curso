import React, { Component } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import PodcastList from "../components/PodcastList";
import Layout from "../components/Layout";
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
    console.dir(audio_clip);
    return (
      <>
          <Navigation path={`/channel?id=${audio_clip.channel.id}`} />
        <Layout title={audio_clip.title}>
          <PodcastList clip={audio_clip} />
        </Layout>
      </>
    );
  }
}
