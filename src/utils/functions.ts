import { RcFile } from "antd/es/upload";
import { utils, read } from "xlsx";

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
