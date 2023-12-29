import { Button, Col, Row, Space, Typography } from "antd";
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
              Process/system consulting and tax advice from a single source –
              revolutionize your VAT processes: quickly and effectively.
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
          <img
            width={400}
            src="https://usercontent.one/wp/www.heyvat.de/wp-content/uploads/2023/02/HelloVat-Logo-Home-nurStern-993x1024.png?media=1681150648"
          />
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
