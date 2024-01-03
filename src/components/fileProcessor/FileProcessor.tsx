import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Result,
  Row,
  Spin,
  Statistic,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import {
  getSales3parties2ndPositionsRequestBody,
  getRowCounts,
  readExcelData,
  getSoapServiceResponse,
  getSales2parties1stPositionsRequestBody,
  getPurchase3parties2ndPositionsRequestBody,
  getPurchase2parties2ndPositionsRequestBody,
} from "../../utils/functions";
import { RcFile } from "antd/es/upload";
import { selectCurrentUserAccountDetail } from "../../appStore/usersSlice";
import { useAppSelector } from "../../hooks/useRedux";
import { IAccount } from "../../interfaces";
import { read, utils, writeFile } from "xlsx";

const { Dragger } = Upload;

type processorType = "sales" | "purchase";

interface IFileProcessor {
  type: processorType;
  parties: number;
  positions: number;
}

const FileProcessor: React.FC<IFileProcessor> = ({
  type,
  parties,
  positions,
}) => {
  const [rowsCount, setRowsCount] = useState<number>(0);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isRowCounting, setIsRowCounting] = useState<boolean>(false);
  const [fileList, setFileList] = useState<Array<UploadFile>>([]);

  const currentUserAccountDetail = useAppSelector(
    selectCurrentUserAccountDetail
  );

  const handleProcess = async () => {
    setIsSuccess(true);
    const dataRows = await readExcelData(fileList[0] as RcFile);

    for (const data of dataRows) {
      // console.log(data);
      // const reqBody = getXMLRequestBody(
      //   type,
      //   parties,
      //   positions,
      //   currentUserAccountDetail,
      //   data
      // );

      // const res = await getSoapServiceResponse(
      //   currentUserAccountDetail.service,
      //   reqBody
      // );
      const updateData = [
        { TAXES_TaxResult: "Raji" },
        { TAXES_TaxResult: "sanjayaml" },
      ];

      const ab = await (fileList[0] as RcFile).arrayBuffer();
      const workbook = read(ab); // parse the array buffer
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      utils.sheet_add_json(sheet, updateData, {
        skipHeader: true,
        origin: "BO2",
      });
      writeFile(workbook, fileList[0].name);

      //   // read XML res
      //   // write Excel
      //   // update success status
    }
  };

  const getXMLRequestBody = (
    type: processorType,
    parties: number,
    positions: number,
    currentUserAccountDetail: IAccount,
    data: any
  ) => {
    if (type === "sales") {
      if (parties === 3 && positions === 2) {
        return getSales3parties2ndPositionsRequestBody(
          currentUserAccountDetail,
          data
        );
      }
      if (parties === 2 && positions === 1) {
        return getSales2parties1stPositionsRequestBody(
          currentUserAccountDetail,
          data
        );
      }
    } else {
      if (parties === 3 && positions === 2) {
        return getPurchase3parties2ndPositionsRequestBody(
          currentUserAccountDetail,
          data
        );
      }
      if (parties === 2 && positions === 2) {
        return getPurchase2parties2ndPositionsRequestBody(
          currentUserAccountDetail,
          data
        );
      }
    }
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
    accept: ".xlsx,.xls",
    beforeUpload: (file) => {
      handleFileUpload(file);
      setIsRowCounting(true);
      updateRowCount(file);
      return true;
    },
    fileList,
    onRemove: handleFileRemove,
  };

  const handleExport = async () => {};
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
              title="Successfully Processed and Downloaded Your File!"
              subTitle={`${fileList[0]?.name}`}
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default FileProcessor;
function Purchase_Order_3Parties2ndPositionXMLString(
  currentUserAccountDetail: IAccount,
  data: any
) {
  throw new Error("Function not implemented.");
}
