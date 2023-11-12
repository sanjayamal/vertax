import { Avatar, Button, Card, Col, Form, Input, Row } from "antd";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import vertax_small from "../../assets/vertax_small.jpg";

type FieldType = {
  username: string;
  password: string;
  service: string;
  trustedId: string;
};

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values: FieldType) => {
    console.log("Success:", values);
    navigate("/home");
  };

  return (
    <div className="login-container">
      <Row>
        <Col
          style={{ marginTop: "4rem" }}
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 12, offset: 6 }}
          lg={{ span: 8, offset: 8 }}
        >
          <Card
            title={
              <div style={{ padding: "10px" }}>
                <Avatar
                  style={{ marginRight: "15px" }}
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xxl: 64 }}
                  src={vertax_small}
                />
                VerTax
              </div>
            }
            bordered={false}
          >
            <Form name="basic" labelCol={{ span: 6 }} onFinish={onFinish}>
              <Form.Item<FieldType>
                label="Service"
                name="service"
                rules={[
                  { required: true, message: "Please enter your service" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please enter your username" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item<FieldType>
                label="Trusted ID"
                name="trustedId"
                rules={[
                  { required: true, message: "Please enter your trusted ID" },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 6, span: 8 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
