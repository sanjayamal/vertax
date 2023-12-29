import { Col, Row, Card } from "antd";
import Lottie from "lottie-react";
import taxesAnimation from "../../../assets/taxes.json";
import excelAnimation from "../../../assets/excel.json";

const Features = () => {
  return (
    <>
      <Row>
        <Col span={4} offset={2} className="padding-1rem">
          <Lottie animationData={taxesAnimation} />
        </Col>
        <Col span={14} offset={2} className="padding-1rem">
          <Card title="Tax Management" bordered={false}>
            <p>
              Lorem ipsum dolor sit amet. Qui dolor repellat ut quia culpa est
              dolore ipsam. Qui distinctio odit et quasi commodi sed rerum
              temporibus sed consequatur assumenda! Eum rerum necessitatibus est
              laboriosam sequi vel error pariatur aut maiores vero qui illum
              delectus et dolorem iste!
            </p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={14} offset={2} className="padding-1rem">
          <Card title="Easy Calculation" bordered={false}>
            <p>
              Lorem ipsum dolor sit amet. Qui dolor repellat ut quia culpa est
              dolore ipsam. Qui distinctio odit et quasi commodi sed rerum
              temporibus sed consequatur assumenda! Eum rerum necessitatibus est
              laboriosam sequi vel error pariatur aut maiores vero qui illum
              delectus et dolorem iste!
            </p>
          </Card>
        </Col>
        <Col span={4} offset={2} className="padding-1rem">
          <Lottie animationData={excelAnimation} />
        </Col>
      </Row>
    </>
  );
};

export default Features;
