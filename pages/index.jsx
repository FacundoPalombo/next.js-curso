import React, { Component } from "react";
import "isomorphic-fetch";
import Layout from "../components/Layout";
import ChannelGrid from "../components/ChannelGrid";
import Error from "./_error";
export default class index extends Component {
  static async getInitialProps({ res }) {
    try {
      let [reqChannels] = await Promise.all([
        fetch("http://api.audioboom.com/channels/")
      ]);

      if (reqChannels.status >= 400) {
        res.statusCode = reqChannels.status;
        return { channels: null, statusCode: reqChannels.status };
      }

      let { body: channels } = await reqChannels.json();
      return { channels, statusCode: 200 };
    } catch (error) {
      return { channels: null, statusCode: 503 };
    }
  }
  render() {
    let { channels } = this.props.channels;
    let { statusCode } = this.props;
    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />;
    }
    return (
      <Layout title="Podcasts" titleHead="Podcasts">
        <ChannelGrid channels={channels} />
      </Layout>
    );
  }
}
