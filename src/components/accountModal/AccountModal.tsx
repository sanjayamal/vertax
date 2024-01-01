import React from "react";
import { Button, Col, Form, Input, Modal, Row } from "antd";

interface IAccountModal {
  open: boolean;
  handleConnect: () => void;
  onClose: () => void;
  handleUpdate: () => void;
}

const AccountModal: React.FC<IAccountModal> = ({
  open,
  handleConnect,
  handleUpdate,
  onClose,
}) => {
  const loading = false;
  return (
    <Modal
      open={open}
      title="Connect to the account"
      onOk={handleConnect}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleUpdate}
        >
          Apply
        </Button>,
        <Button
          key="link"
          type="primary"
          loading={loading}
          onClick={handleConnect}
        >
          Connect
        </Button>,
      ]}
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="service"
              label="Service"
              rules={[{ required: true, message: "Please enter service" }]}
            >
              <Input placeholder="Please enter service" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: "Please enter username" }]}
            >
              <Input placeholder="Please enter username" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: "Please enter password" }]}
            >
              <Input.Password placeholder="Please enter password" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="trustedId"
              label="Trusted ID"
              rules={[{ required: true, message: "Please enter trusted ID" }]}
            >
              <Input.Password placeholder="Please enter trusted ID" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AccountModal;
