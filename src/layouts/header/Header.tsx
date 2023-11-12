import { Avatar, Layout, Typography } from "antd";
import vertax_small from "../../assets/vertax_small.jpg";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const { Title } = Typography;

const MainHeader = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/home");
  };
  return (
    <Header
      style={{
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "1rem",
      }}
    >
      <Avatar
        style={{ marginRight: "15px" }}
        size={64}
        src={vertax_small}
        onClick={() => handleOnClick()}
      />
      <Title
        level={2}
        onClick={() => handleOnClick()}
        style={{ cursor: "pointer" }}
      >
        VerTax
      </Title>
    </Header>
  );
};

export default MainHeader;
