import { Avatar, Layout, Typography, Menu, Button } from "antd";
import vertax_small from "../../assets/vertax_small.jpg";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { UserInfo } from "../../components";

const { Header } = Layout;
const { Title } = Typography;

const MainHeader = () => {
  const navigate = useNavigate();

  const items = [
    { key: 1, label: "Home", isAdminOnly: false },
    { key: 2, label: "Manage User", isAdminOnly: true },
    { key: 3, label: <UserInfo />, isAdminOnly: false },
  ];
  const handleOnClick = () => {
    navigate("/");
  };

  const getItem = (isAdmin: boolean) => {
    return isAdmin ? items : items.filter(({ isAdminOnly }) => !isAdminOnly);
  };
  return (
    <Header className="header">
      <img
        style={{ marginRight: "15px" }}
        src={vertax_small}
        onClick={() => handleOnClick()}
      />
      <Menu
        className="menu"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={getItem(true)}
      />
    </Header>
  );
};

export default MainHeader;
