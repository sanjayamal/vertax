import { Col, Row, Tabs } from "antd";
import { TitleWithBackButton } from "../titleWithBackButton";
import type { TabsProps } from "antd";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <span>
        3 Parties 2<sup>nd</sup> Position
      </span>
    ),
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: (
      <span>
        2 Parties 2<sup>nd</sup> Position
      </span>
    ),
    children: "Content of Tab Pane 2",
  },
];

const SalesOrder = () => {
  return (
    <Row wrap={false}>
      <Col flex="none">
        <div style={{ padding: "0 5rem" }} />
      </Col>
      <Col flex="auto">
        <TitleWithBackButton title="Sales Order"></TitleWithBackButton>
        <div>
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </Col>
    </Row>
  );
};

export default SalesOrder;
