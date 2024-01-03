import { Button, Col, Row, Space, Typography } from "antd";
import verTaxImage from "../../../assets/vertax.png";

const { Title, Text } = Typography;

const HeroSection = () => {
  return (
    <div className="home">
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
            <div>
              <Text className="title-white">WE ARE</Text>
              <Text className="title-blue">TAX</Text>
              <div className="margin-top-minus-1rem">
                <Text className="title-blue">TECHNOLOGY</Text>
              </div>
            </div>
            <Title level={5} className="description margin-top-minus-0-5rem">
              Welcome to our Tax Technology Tools to support efficiency and
              effectiveness of VAT operations.
            </Title>
            <Button className="more-btn">More Detail</Button>
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
    </div>
  );
};

export default HeroSection;
