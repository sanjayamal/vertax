import { RcFile } from "antd/es/upload";
import { utils, read } from "xlsx";
import { ADMIN_MENU_ITEM_KEY } from "../constants";
import axios from "axios";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export const getRowCounts = (file: RcFile) => {
  return new Promise<number>(async (resolve, reject) => {
    try {
      const ab = await file.arrayBuffer();
      const workbook = read(ab);
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const range = utils.decode_range(sheet["!ref"]!);
      const rowCount = range.e.r - range.s.r + 1;
      resolve(rowCount);
    } catch (error) {
      const err = new Error("Cannot get row counts");
      reject(err);
    }
  });
};

export const readExcelData = async (file: RcFile) => {
  try {
    const ab = await file.arrayBuffer();
    const workbook = read(ab); // parse the array buffer
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = utils.sheet_to_json(sheet, { raw: false }) as any;
    return data;
  } catch (error) {
    return [];
  }
};

export const getAdminNavigationPath = (key: number): string => {
  try {
    switch (key) {
      case ADMIN_MENU_ITEM_KEY.user:
        return "user-management";
      case ADMIN_MENU_ITEM_KEY.Account:
        return "account-management";
      default:
        return "admin";
    }
  } catch (error) {
    return "admin";
  }
};

export const getAdminNavigationKey = (path: string): string => {
  try {
    switch (path) {
      case "user-management":
        return `${ADMIN_MENU_ITEM_KEY.user}`;
      case "account-management":
        return `${ADMIN_MENU_ITEM_KEY.Account}`;
      default:
        return `${ADMIN_MENU_ITEM_KEY.Account}`;
    }
  } catch (error) {
    return `${ADMIN_MENU_ITEM_KEY.Account}`;
  }
};

export const getSoapServiceResponse = async (
  url: string,
  xmlString: string | undefined
) => {
  try {
    const { data } = await axios.post(
      "https://gea.eu.ondemand.vertexinc.com:443/vertex-ws/services/CalculateTax90",
      xmlString,
      {
        headers: {
          "Content-Type": "text/xml; charset=utf-8",
        },
      }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const handleModifyExcel = async (
  file: RcFile,
  dataMapsArr: Array<Map<number, string>>
) => {
  try {
    const workbook = new ExcelJS.Workbook();
    const fileReader = new FileReader();

    fileReader.onload = async (e: any) => {
      const buffer = e.target.result;
      await workbook.xlsx.load(buffer);
      const sheetName = workbook.worksheets[0];
      const worksheet = workbook.getWorksheet(sheetName.name);

      if (worksheet) {
        dataMapsArr.forEach((dataMap: Map<number, string>, index) => {
          dataMap.forEach((value, key) => {
            const row = worksheet.getRow(2 + index);
            row.eachCell({ includeEmpty: true }, function (cell, colNumber) {
              if (colNumber == key) {
                cell.value = value;
              }
            });
          });
        });
      }

      const modifiedBlob = await workbook.xlsx.writeBuffer();
      saveAs(new Blob([modifiedBlob]), file.name);
    };

    fileReader.readAsArrayBuffer(file);
  } catch (error) {
    console.error("Error modifying Excel file:", error);
  }
};
