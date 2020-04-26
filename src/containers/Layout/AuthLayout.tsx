import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import styled from "styled-components";

import "../../App.css";

const { Header, Content, Footer } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const AuthLayout = () => {
  return (
    <StyledLayout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Login</Menu.Item>
          <Menu.Item key="2">Register</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <h1>Welcome to Crisis Report Portal</h1>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2020 Created by Ant
      </Footer>
    </StyledLayout>
  );
};

export default AuthLayout;
