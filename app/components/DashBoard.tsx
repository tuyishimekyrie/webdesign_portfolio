// components/DashBoard.tsx
import React from "react";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";

interface Props {
  infos: {
    id: string;
    services: string;
    budget: number;
    pages: number;
    message: string;
    email: string;
  }[];
}

const DashBoard: React.FC<Props> = ({ infos }) => (
  <Card>
    <Title>Dashboard</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Services</TableHeaderCell>
          <TableHeaderCell>Budget</TableHeaderCell>
          <TableHeaderCell>Pages</TableHeaderCell>
          <TableHeaderCell>Message</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {infos.map((item) => (
          <TableRow key={item.id} className="border-2 border-slate-700">
            <TableCell className="text-sm">{item.id}</TableCell>
            <TableCell>
              <Text className="text-sm">{item.services}</Text>
            </TableCell>
            <TableCell>
              <Text className="text-sm">{item.budget}</Text>
            </TableCell>
            <TableCell>
              <Text className="text-sm">{item.pages}</Text>
            </TableCell>
            <TableCell>
              <Text className="text-sm">{item.message}</Text>
            </TableCell>
            <TableCell>
              <Text className="text-sm">{item.email}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default DashBoard;
