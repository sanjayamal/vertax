import { Avatar, Layout, Typography } from "antd";
import vertax_small from "../../assets/vertax_small.jpg";

const { Header } = Layout;
const { Title } = Typography;

const MainHeader = () => {
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
      <Avatar style={{ marginRight: "15px" }} size={64} src={vertax_small} />
      <Title level={2}>VerTax</Title>
    </Header>
  );
};

export default MainHeader;
