import {
  Avatar,
  Button,
  Image,
  Layout,
  Space,
  Tooltip,
  Typography,
} from "antd";
import vertax_small from "../../../assets/vertax_small-removebg.png";
import { UserSwitchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const { Title } = Typography;

const HomeHeader = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <Header
      style={{
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <Space style={{ marginTop: "1rem" }}>
        <Image src={vertax_small} preview={false} width={80} />
        <Title level={2} style={{ color: "#fff" }}>
          VerTax
        </Title>
      </Space>
      <Tooltip title="Switch to another account">
        <Button
          shape="circle"
          icon={<UserSwitchOutlined />}
          onClick={handleOnClick}
        />
      </Tooltip>
    </Header>
  );
};

export default HomeHeader;
