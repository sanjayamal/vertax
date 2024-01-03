import { Button, Col, Flex, Row, Space, Tooltip, Typography } from "antd";
import "./TaxProcessor.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AccountModal } from "../../components";
import { UserSwitchOutlined } from "@ant-design/icons";
import verTaxImage from "../../assets/vertax.png";

const { Title } = Typography;

const TaxProcessor = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);

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
            {!isConnected ? (
              <Button className="order-btn" onClick={() => setOpenModal(true)}>
                Connect to Account
              </Button>
            ) : (
              <Tooltip title="Change Account">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<UserSwitchOutlined />}
                  onClick={() => setOpenModal(true)}
                />
              </Tooltip>
            )}
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
              {isConnected && (
                <>
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
                    Sales Order
                  </Button>
                </>
              )}
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
          <img width={400} alt="verTaxImage" src={verTaxImage} />
        </Col>
      </Row>
      <AccountModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        handleConnect={() => {
          setOpenModal(false);
          setIsConnected(true);
        }}
        handleUpdate={() => {}}
      />
    </div>
  );
};

export default TaxProcessor;
