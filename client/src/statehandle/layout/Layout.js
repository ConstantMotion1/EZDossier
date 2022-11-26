import React from "react";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

export const Layout1 = () => (
  <Layout>
    <Header id="layout">Header</Header>
    <Content id="layout">Content</Content>
    <Footer id="layout">Footer</Footer>
  </Layout>
);

export const Layout2 = () => (
  <Layout>
    <Header id="layout">Header</Header>
    <Layout>
      <Sider id="layout">Sider</Sider>
      <Content id="layout">Content</Content>
    </Layout>
    <Footer id="layout">Footer</Footer>
  </Layout>
);

export const Layout3 = () => (
  <Layout>
    <Header id="layout">Header</Header>
    <Layout>
      <Content id="layout">Content</Content>
      <Sider id="layout">Sider</Sider>
    </Layout>
    <Footer id="layout">Footer</Footer>
  </Layout>
);

export const Layout4 = () => (
  <Layout>
    <Sider id="layout">Sider</Sider>
    <Layout>
      <Header id="layout">Header</Header>
      <Content id="layout">Content</Content>
      <Footer id="layout">Footer</Footer>
    </Layout>
  </Layout>
);

export default Layout;