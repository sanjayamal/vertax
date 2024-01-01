import { Col, Row } from "antd";
import React from "react";
import UserTable from "./components/UserTable";

const UserManagement = () => {
  return (
    <Row className="margin-top-1rem">
      <Col span={24}>
        <UserTable />
      </Col>
    </Row>
  );
};

export default UserManagement;
