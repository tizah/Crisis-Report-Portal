import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Card } from "antd";
import styled from "styled-components";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import ContentLayout from "../ContentLayout";
import Report from "../../components/Report/Report";
import Profile from "../../components/Profile/Profile";

import "../../App.css";

const { Header, Sider, Content } = Layout;

const { Meta } = Card;

const StyleLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledMenu = styled(Menu)`
  position: absolute;
  top: 60px;
`;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <StyleLayout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <StyledMenu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <UserOutlined />
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <Link to="/report">Reports</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          </StyledMenu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Switch>
            <Route exact path="/">
              <ContentLayout />
            </Route>
            <Route path="/report">
              <Report />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Layout>
      </StyleLayout>
    );
  }
}

export default SiderDemo;
