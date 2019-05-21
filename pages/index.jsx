import React, { Component } from "react";
import "isomorphic-fetch";
import Layout from "../components/Layout";
import ChannelGrid from "../components/ChannelGrid";

export default class index extends Component {
  static async getInitialProps() {
    const req = await fetch("http://api.audioboom.com/channels/");
    const { body: channels } = await req.json();
    return { channels };
  }
  render() {
    let { channels } = this.props.channels;
    return (
      <Layout title="Podcasts">
        <ChannelGrid channels={channels} />
      </Layout>
    );
  }
}
