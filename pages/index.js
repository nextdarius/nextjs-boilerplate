import { Component } from "react";
import Head from "next/head";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Head>
            <title>My Next.js page</title>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.13.6/antd.css"
            />
            <link rel="stylesheet" type="text/css" href="/static/style.css" />
          </Head>
          <h1>Hello World!</h1>
          <h2 className="red">Red Title</h2>
        </div>
      </div>
    );
  }
}

export default Home;
