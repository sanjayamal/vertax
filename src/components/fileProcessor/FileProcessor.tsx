import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  message,
  Result,
  Row,
  Spin,
  Statistic,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { getRowCounts } from "../../utils/functions";
import { RcFile } from "antd/es/upload";

const { Dragger } = Upload;

type processorType = "sales" | "purchase";

interface IFileProcessor {
  type: processorType;
  parties: number;
  positions: number;
}

const FileProcessor: React.FC<IFileProcessor> = ({ type }) => {
  const [rowsCount, setRowsCount] = useState<number>(0);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isRowCounting, setIsRowCounting] = useState<boolean>(false);
  const [fileList, setFileList] = useState<Array<UploadFile>>([]);

  const handleProcess = () => {
    setIsSuccess(true);
  };

  const handleFileUpload = (droppedFile: UploadFile) => {
    setFileList([droppedFile]);
  };

  const updateRowCount = async (droppedFile: UploadFile) => {
    try {
      const count = await getRowCounts(droppedFile as RcFile);
      setRowsCount(count);
      setIsRowCounting(false);
    } catch (error) {
      setIsRowCounting(false);
    }
  };

  const handleFileRemove = (file: UploadFile) => {
    setFileList([]);
    setRowsCount(0);
  };
  const draggerProps: UploadProps = {
    name: "file",
    accept: ".xlsx",
    beforeUpload: (file) => {
      handleFileUpload(file);
      setIsRowCounting(true);
      updateRowCount(file);
      return true;
    },
    fileList,
    onRemove: handleFileRemove,
  };
  return (
    <>
      <Row>
        <Col sm={10} md={12} lg={16} xl={16}>
          <Dragger {...draggerProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single upload and only support for the excel file.
            </p>
          </Dragger>
        </Col>
      </Row>
      <Row style={{ marginTop: "2rem" }}>
        <Col span={8}>
          <Spin spinning={isRowCounting}>
            <Statistic title="Numbers of Records" value={rowsCount} />
          </Spin>
        </Col>
      </Row>
      <Row style={{ marginTop: "1rem" }} gutter={16}>
        <Col span={8}>
          <Button
            type="primary"
            style={{ width: "100%" }}
            onClick={handleProcess}
          >
            Process
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        <Col sm={10} md={12} lg={16} xl={16}>
          {isSuccess && (
            <Result
              status="success"
              title="Successfully Processed Your File!"
              subTitle="order.xlsx"
              extra={[
                <Button type="primary" key="console">
                  View
                </Button>,
                <Button key="buy">Download</Button>,
              ]}
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default FileProcessor;
