import React, { useState, useEffect } from "react";
import { ExcelRenderer, OutTable } from "react-excel-renderer";
import "./ExcelPreview.scss";

const ExcelPreview = ({ file }) => {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);

  useEffect(() => {
    if (file) {
      ExcelRenderer(file, (err, resp) => {
        if (err) {
          console.log(err);
        } else {
          setRows(resp.rows);
          setCols(resp.cols);
        }
      });
    }
  }, [file]);

  return (
    <div>
      <OutTable
        data={rows}
        columns={cols}
        tableClassName="ExcelTable2007"
        tableHeaderRowClass="heading"
      />
    </div>
  );
};

export default ExcelPreview;
