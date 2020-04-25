import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const Profile = () => {
  return (
    <div>
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        Profile Page
      </Content>
    </div>
  );
};

export default Profile;
