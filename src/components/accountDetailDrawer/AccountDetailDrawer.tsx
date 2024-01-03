import React from "react";
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from "antd";

interface IAccountDetailDrawer {
  title: string;
  open: boolean;
  onClose: () => void;
}

const AccountDetailDrawer: React.FC<IAccountDetailDrawer> = ({
  onClose,
  title,
  open,
}) => {
  const onSelectUser = (value: string) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <Drawer
      title={title}
      width={720}
      onClose={onClose}
      destroyOnClose
      open={open}
      styles={{
        body: {
          paddingBottom: 80,
        },
      }}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose} type="primary">
            Submit
          </Button>
        </Space>
      }
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="email"
              label="User"
              rules={[{ required: true, message: "Please select user" }]}
            >
              <Select
                showSearch
                placeholder="Select a user"
                optionFilterProp="children"
                onSelect={onSelectUser}
                filterOption={filterOption}
                options={[
                  {
                    value: "jack@gmail.com",
                    label: "jack@gmail.com",
                  },
                  {
                    value: "lucy@gmail.com",
                    label: "Lucy@gmail.com",
                  },
                  {
                    value: "tom@gmail.com",
                    label: "Tom@gmail.com",
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="name" label="Name">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="service"
              label="Service"
              rules={[{ required: true, message: "Please enter service" }]}
            >
              <Input placeholder="Please enter service" />
            </Form.Item>
          </Col>
          <Col span={12}>
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
          <Col span={12}>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: "Please enter password" }]}
            >
              <Input.Password placeholder="Please enter password" />
            </Form.Item>
          </Col>
          <Col span={12}>
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
    </Drawer>
  );
};

export default AccountDetailDrawer;
