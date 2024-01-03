import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { UserInfo } from "../../../components";
import { MENU_ITEM_KEY } from "../../../utils/constants";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";

const toolMenuItems: MenuProps["items"] = [
  {
    key: "1",
    label: "Tax Engine Testing Tool",
  },
  {
    key: "2",
    label: "VAT-ID Check",
  },
];

const { Header } = Layout;

const menu_items = [
  { key: MENU_ITEM_KEY.Home, label: "Home" },
  // { key: MENU_ITEM_KEY.Contact, label: "Contact" },
  { key: MENU_ITEM_KEY.AdminDashboard, label: "Admin Dashboard" },
  { key: MENU_ITEM_KEY.UserInfo, label: <UserInfo /> },
];

const MainHeader = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };

  const handleMenuNavigation = (key: number) => {
    if ([MENU_ITEM_KEY.Home, MENU_ITEM_KEY.AdminDashboard].includes(key)) {
      const path =
        MENU_ITEM_KEY.Home === key ? "/" : "/admin/account-management";
      navigate(path);
    }
  };

  // const getItem = (isAdmin: boolean) => {
  //   return isAdmin ? items : items.filter(({ isAdminOnly }) => !isAdminOnly);
  // };

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "1") {
      navigate("/order");
    }
  };
  return (
    <Header className="header">
      <img
        width={200}
        alt="logo"
        src="https://usercontent.one/wp/www.heyvat.de/wp-content/uploads/2023/03/HEYVAT-Logo-quer-weiss-2.svg?media=1681150648"
        onClick={() => handleOnClick()}
      />
      <Dropdown menu={{ items: toolMenuItems, onClick: handleMenuClick }}>
        <Space className="tools">
          <AppstoreOutlined />
          Tools
        </Space>
      </Dropdown>
      <Menu
        className="menu"
        mode="horizontal"
        defaultSelectedKeys={["0"]}
        items={menu_items}
        onClick={({ key }) => {
          handleMenuNavigation(+key);
        }}
      />
    </Header>
  );
};

export default MainHeader;
