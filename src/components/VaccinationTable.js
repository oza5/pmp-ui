import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
const VaccinationTable = ({ records }) => {
  const vaccinationRecords = records;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Vaccine</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Location</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {vaccinationRecords.map((record) => (
          <TableRow key={record.vaccine}>
            <TableCell>{record.vaccine}</TableCell>
            <TableCell>{record.date}</TableCell>
            <TableCell>{record.location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default VaccinationTable;
