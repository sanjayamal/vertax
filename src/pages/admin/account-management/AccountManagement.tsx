import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import "./AccountManagement.scss";
import TableWithFilter from "./components/TableWithFilter";
import { AccountDetailDrawer } from "../../../components";

const AccountManagement = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Row>
        <Col span={8} offset={16}>
          <div className="new-account-btn">
            <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
              New account
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="margin-top-1rem">
        <Col span={24}>
          <TableWithFilter />
        </Col>
      </Row>
      <AccountDetailDrawer
        title="Create New Account"
        open={open}
        onClose={onClose}
      />
    </>
  );
};

export default AccountManagement;
