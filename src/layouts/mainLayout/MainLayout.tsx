import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { Layout } from "antd";
import "./MainLayout.scss";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className="container">
      <Header />
      <Content className="main">
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
