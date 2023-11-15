import { Button } from "@mui/material";
import React from "react";
import writeXlsxFile from "write-excel-file";

const ExportAsCSV = (file_name) => {
  const objects = [
    {
      name: "John Smith",
      dateOfBirth: new Date(),
    },
    {
      name: "Alice Brown",
      dateOfBirth: new Date(),
    },
  ];
  const schema = [
    {
      column: "Name",
      type: String,
      value: (student) => student.name,
    },
    {
      column: "Date of Birth",
      type: Date,
      format: "mm/dd/yyyy",
      value: (student) => student.dateOfBirth,
    },
  ];
  async function handle() {
    const csv = await writeXlsxFile(objects, { schema, fileName: file_name });
    return csv;
  }
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          handle();
        }}
      >
        Export As CSV
      </Button>
    </div>
  );
};

export default ExportAsCSV;
