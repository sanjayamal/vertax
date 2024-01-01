import { Button, Col, Flex, Row, Space, Typography } from "antd";
import "./TaxProcessor.scss";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const TaxProcessor = () => {
  const navigation = useNavigate();
  const handleClick = (path: string) => {
    navigation(`/order/${path}`);
  };
  return (
    <div className="tax-home">
      <Row>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className="padding-1rem center-item"
        >
          <Space
            direction="vertical"
            size="middle"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
            }}
          >
            <Title level={5} className="description margin-top-minus-0-5rem">
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
            <Flex gap="middle">
              <Button
                className="order-btn"
                onClick={() => handleClick("purchase")}
              >
                Purchase Order
              </Button>
              <Button
                className="order-btn"
                onClick={() => handleClick("sales")}
              >
                {" "}
                Sales Order
              </Button>
            </Flex>
          </Space>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className="padding-1rem center-item"
        >
          <img
            width={400}
            src="https://usercontent.one/wp/www.heyvat.de/wp-content/uploads/2023/02/HelloVat-Logo-Home-nurStern-993x1024.png?media=1681150648"
          />
        </Col>
      </Row>
    </div>
  );
};

export default TaxProcessor;
