import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./header";
import { Layout, Menu } from "antd";
import { AdminFooter } from "./footer";
import { UserOutlined, ApiOutlined } from "@ant-design/icons";
import { ADMIN_MENU_ITEM_KEY } from "../../utils/constants";
import { getAdminNavigationPath } from "../../utils/functions";
import "./AdminLayout.scss";

const { Content, Sider } = Layout;

const menuItems = [
  {
    key: ADMIN_MENU_ITEM_KEY.Account,
    icon: <ApiOutlined />,
    label: "Accounts",
  },
  {
    key: ADMIN_MENU_ITEM_KEY.user,
    icon: <UserOutlined />,
    label: "Users",
  },
];

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleMenuNavigation = (key: number) => {
    const path = getAdminNavigationPath(key);
    navigate(path);
  };

  return (
    <Layout className="admin-container">
      <Header />
      <Content className="admin-main">
        <Layout>
          <Sider breakpoint="xs" collapsedWidth="0" className="admin-slider">
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["0"]}
              items={menuItems}
              onClick={({ key }) => {
                handleMenuNavigation(+key);
              }}
            />
          </Sider>
          <Layout>
            <Content style={{ margin: "24px 16px 0" }}>
              <div className="admin-content">
                <Outlet />
              </div>
            </Content>
            <AdminFooter />
          </Layout>
        </Layout>
      </Content>
    </Layout>
  );
};

export default AdminLayout;
