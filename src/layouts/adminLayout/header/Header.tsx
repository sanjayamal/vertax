import { Layout, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const { Header } = Layout;

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <Header className="admin-header">
      <img
        width={200}
        src="https://usercontent.one/wp/www.heyvat.de/wp-content/uploads/2023/03/HEYVAT-Logo-quer-weiss-2.svg?media=1681150648"
        onClick={() => handleOnClick()}
      />
    </Header>
  );
};

export default AdminHeader;
