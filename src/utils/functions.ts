import { RcFile } from "antd/es/upload";
import { utils, read } from "xlsx";
import { ADMIN_MENU_ITEM_KEY } from "./constants";

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
