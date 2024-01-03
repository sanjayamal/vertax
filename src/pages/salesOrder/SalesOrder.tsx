import { Col, Row, Tabs } from "antd";
import { TitleWithBackButton } from "../../components/titleWithBackButton";
import type { TabsProps } from "antd";
import { FileProcessor } from "../../components/fileProcessor";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <span>
        3 Parties 2<sup>nd</sup> Position
      </span>
    ),
    children: <FileProcessor type="sales" parties={3} positions={2} />,
  },
  {
    key: "2",
    label: (
      <span>
        2 Parties 1<sup>st</sup> Position
      </span>
    ),
    children: <FileProcessor type="sales" parties={2} positions={1} />,
  },
];

const SalesOrder = () => {
  return (
    <Row>
      <Col offset={4} span={16}>
        <TitleWithBackButton title="Sales Order"></TitleWithBackButton>
        <div>
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </Col>
    </Row>
  );
};

export default SalesOrder;
