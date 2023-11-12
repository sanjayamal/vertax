import { TitleWithBackButton } from "../titleWithBackButton";
import { Col, Row, Tabs } from "antd";
import type { TabsProps } from "antd";
import { FileProcessor } from "../fileProcessor";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <span>
        3 Parties 2<sup>nd</sup> Position
      </span>
    ),
    children: <FileProcessor type="purchase" parties={3} positions={2} />,
  },
  {
    key: "2",
    label: (
      <span>
        2 Parties 2<sup>nd</sup> Position
      </span>
    ),
    children: <FileProcessor type="purchase" parties={2} positions={2} />,
  },
];

const PurchaseOrder = () => {
  return (
    <Row>
      <Col offset={4} span={16}>
        <TitleWithBackButton title="Purchase Order"></TitleWithBackButton>
        <div>
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </Col>
    </Row>
  );
};

export default PurchaseOrder;
