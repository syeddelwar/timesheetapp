"use clinet";

import React from "react";
import DataTable from "../components/DataTable";
import Header from "../components/Header";

function index() {
  return (
    <div>
      <Header />
      <h1 className="  text-center font-bold mt-5 uppercase">Data Tables</h1>
      <div className=" container mx-auto my-6 px-8">
        <DataTable />
      </div>
    </div>
  );
}

export default index;
