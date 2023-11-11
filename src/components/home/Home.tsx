import { Button, Col, Row, Space, Typography } from "antd";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Home = () => {
  const navigate = useNavigate();

  const handleOnClick = (path: string) => {
    navigate(`/order/${path}`);
  };
  return (
    <div className="home">
      <Row>
        <Col span={8} offset={3} style={{ marginTop: "6rem" }}>
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
            <Space>
              <Button size="large" className="btn-text" onClick={()=>handleOnClick('purchase')}>
                Purchase Order
              </Button>
              <Button size="large" className="btn-text" onClick={()=>handleOnClick('sales')}>
                Sales Order
              </Button>
            </Space>
          </Space>
        </Col>
        <Col span={8} offset={4}></Col>
      </Row>
    </div>
  );
};

export default Home;
