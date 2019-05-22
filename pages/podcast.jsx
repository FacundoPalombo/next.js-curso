import React, { Component } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import PodcastList from "../components/PodcastList";
import Layout from "../components/Layout";
import Error from "./_error";
export default class podcast extends Component {
  static async getInitialProps({ query, res }) {
    try {
      let idClip = query.id;
      let [reqClip] = await Promise.all([
        fetch(`http://api.audioboom.com/audio_clips/${idClip}.mp3`)
      ]);

      if (reqClip.status >= 400) {
        res.statusCode = reqClip.status;
        return { audio_clip: null, statusCode: reqClip.status };
      }

      let {
        body: { audio_clip }
      } = await reqClip.json(); //
      return { audio_clip, statusCode: 200 };
    } catch (error) {
      return { audio_clip: null, statusCode: 503 };
    }
  }
  render() {
    let { audio_clip, statusCode } = this.props;
    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />;
    }
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
