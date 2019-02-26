import { Component } from "react";
import Head from "next/head";
import { Table } from "antd";
import ApiUtility from "../lib/api/apiUtility";
import UserUtiliy from "../lib/models/userUtility";

class Home extends Component {
  static async getInitialProps() {
    const users = await ApiUtility.getCollectionOf("users");
    const table = UserUtiliy.createSourceForTable(users);
    const columns = UserUtiliy.createColumns(["Name", "Email"]);
    return {
      users: table,
      columns: columns
    };
  }

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
          <h1 className="red">Hello World!</h1>
          <Table
            dataSource={this.props.users}
            columns={this.props.columns}
            pagination={false}
          />
        </div>
      </div>
    );
  }
}

export default Home;
