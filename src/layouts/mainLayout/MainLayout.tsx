import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";
import { Layout } from "antd";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content>
        <div style={{ backgroundColor: "#fff", height: "auto" }}>
          <Outlet />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
