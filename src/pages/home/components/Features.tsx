import { Col, Row, Card, Button } from "antd";
import Lottie from "lottie-react";
import taxesAnimation from "../../../assets/taxes.json";
import excelAnimation from "../../../assets/excel.json";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const handleOnClick = (path: string): void => {
    navigate(`/${path}`);
  };
  return (
    <>
      <Row>
        <Col span={4} offset={2} className="padding-1rem">
          <Lottie animationData={taxesAnimation} />
        </Col>
        <Col span={14} offset={2} className="padding-1rem">
          <Card title="Tax Engine Testing Tool" bordered={false}>
            <p>
              The Tax Engine Testing Tool helps efficiency to set-up and unit
              test tax configurations. Use cases are Transaction Testing after
              applying new configuration or monthly data updates, test of
              taxability category mappings per region, tests of common scenarios
              to prepare for tax engine rollout, etc.
            </p>
            <Button className="more-btn" onClick={() => handleOnClick("order")}>
              Go To
            </Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={14} offset={2} className="padding-1rem">
          <Card title="VAT-ID Check" bordered={false}>
            <p>
              You can check if a business is registered to trade cross-border
              within the EU with the EU's VIES on the web tool.
            </p>
            <Button className="more-btn">Go To</Button>
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
