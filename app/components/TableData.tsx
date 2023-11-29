'use client'
import DashBoard from "@/app/components/DashBoard";
import React from "react";
import { useData } from "../hooks/useData";

const TableData: React.FC = () => {
    const infos = useData();

  return (
    <div className="table-container">{infos.length ? <DashBoard infos={infos} /> : <p className="mt-4">Loading...</p>}</div>
  );
};

export default TableData;
