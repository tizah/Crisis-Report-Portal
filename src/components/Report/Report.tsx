import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const Report = () => {
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
        Reports page
      </Content>
    </div>
  );
};

export default Report;
