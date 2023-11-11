import { Layout } from "antd";

const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer
      style={{
        backgroundColor: "#fff",
        textAlign: "center",
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
    >
      Copyright ©2023 VerTax
    </Footer>
  );
};

export default MainFooter;
