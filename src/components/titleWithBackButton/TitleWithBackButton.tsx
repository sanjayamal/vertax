import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./TitleWithBackButton.scss";

const { Title } = Typography;
interface ITitleWithBackButton {
  title: string;
}
const TitleWithBackButton: React.FC<ITitleWithBackButton> = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        marginLeft: "-2.75rem",
      }}
    >
      <Button
        type="text"
        icon={<ArrowLeftOutlined />}
        size="large"
        className="back-btn"
        onClick={() => {
          navigate(-1);
        }}
        style={{ marginTop: "1rem" }}
      />
      <Title style={{ marginLeft: "1px" }} level={3}>
        {title}
      </Title>
    </div>
  );
};

export default TitleWithBackButton;
