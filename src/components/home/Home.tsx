import { Button, Col, Flex, Row, Space, Typography } from "antd";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import HomeHeader from "./homeHeader/HomeHeader";

const { Title } = Typography;

const Home = () => {
  const navigate = useNavigate();

  const handleOnClick = (path: string) => {
    navigate(`/order/${path}`);
  };
  return (
    <div className="home">
      <HomeHeader />
      <Row>
        <Col span={8} offset={3} style={{ marginTop: "2rem" }}>
          <Space direction="vertical" style={{ display: "flex" }}>
            <Title style={{ color: "#fff" }} level={5}>
              Als HeyVAT GmbH liegt unser Tax Technology-Fokus auf der
              Implementierung von Steuerfindungsprodukten wie ERP Add-ons /
              Add-Ins, Tax Engines oder die native SAP-Steuerfindung. Dies
              erfolgt selbstverständlich unter Berücksichtigung von globalen
              Umsatzsteueranforderungen, den existierenden Unternehmensprozessen
              und internen Kontrollsystemen. Wir möchten Unternehmen dabei
              helfen, ihre Steuern effizient und effektiv zu verwalten. Ganz
              gleich, ob Sie neu anfangen oder Ihr Geschäft im
              Umsatzsteuerbereich weiterentwickeln wollen – wir haben die
              Erfahrung und das Fachwissen, um Sie zu unterstützen.
            </Title>
            <Row gutter={4}>
              <Col span={8}>
                <Button
                  className="btn-text"
                  style={{ width: "100%" }}
                  onClick={() => handleOnClick("purchase")}
                >
                  Purchase Order
                </Button>
              </Col>
              <Col span={8}>
                <Button
                  className="btn-text"
                  onClick={() => handleOnClick("sales")}
                  style={{ width: "100%" }}
                >
                  Sales Order
                </Button>
              </Col>
            </Row>
          </Space>
        </Col>
        <Col span={8} offset={4}></Col>
      </Row>
    </div>
  );
};

export default Home;
