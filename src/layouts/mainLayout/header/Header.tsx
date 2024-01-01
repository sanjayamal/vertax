import { Avatar, Layout, Typography, Menu, Button } from "antd";
import vertax_small from "../../../assets/vertax_small.jpg";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { AccountModal, UserInfo } from "../../../components";
import { MENU_ITEM_KEY } from "../../../utils/constants";
import { useState } from "react";

const { Header } = Layout;
const { Title } = Typography;

const MainHeader = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const items = [
    { key: MENU_ITEM_KEY.Home, label: "Home" },
    // { key: MENU_ITEM_KEY.Contact, label: "Contact" },
    { key: MENU_ITEM_KEY.Account, label: "Connect to Account" },
    { key: MENU_ITEM_KEY.AdminDashboard, label: "Admin Dashboard" },
    { key: MENU_ITEM_KEY.UserInfo, label: <UserInfo /> },
  ];
  const handleOnClick = () => {
    navigate("/");
  };

  const handleMenuNavigation = (key: number) => {
    if (key === MENU_ITEM_KEY.Account) {
      setOpenModal(true);
      return;
    }
    if ([MENU_ITEM_KEY.Home, MENU_ITEM_KEY.AdminDashboard].includes(key)) {
      const path =
        MENU_ITEM_KEY.Home === key ? "/" : "/admin/account-management";
      navigate(path);
    }
  };

  // const getItem = (isAdmin: boolean) => {
  //   return isAdmin ? items : items.filter(({ isAdminOnly }) => !isAdminOnly);
  // };
  return (
    <Header className="header">
      <img
        width={200}
        src="https://usercontent.one/wp/www.heyvat.de/wp-content/uploads/2023/03/HEYVAT-Logo-quer-weiss-2.svg?media=1681150648"
        onClick={() => handleOnClick()}
      />
      <Menu
        className="menu"
        mode="horizontal"
        defaultSelectedKeys={["0"]}
        items={items}
        onClick={({ key }) => {
          handleMenuNavigation(+key);
        }}
      />
      <AccountModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        handleConnect={() => {
          setOpenModal(false);
          navigate("/order");
        }}
        handleUpdate={() => {}}
      />
    </Header>
  );
};

export default MainHeader;
