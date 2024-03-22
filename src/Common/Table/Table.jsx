import React, { useState, useEffect } from "react";
import "./Table.css";
import CommonButton from "../Button/Button";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import EditProduct from "../Edit/Edit";

const CommonTable = ({ columns, data }) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [showEdit, setShowEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSave = (updatedRow) => {
    const updatedData = [...filteredData];
    updatedData[editIndex] = updatedRow;
    setFilteredData(updatedData);
    setShowEdit(false);
  };

  const handleEdit = (rowIndex) => {
    console.log("Editing row at index:", rowIndex);
    setEditIndex(rowIndex);
    setShowEdit(true);
  };

  const handleDelete = (rowIndex) => {
    const newData = [...filteredData];
    newData.splice(rowIndex, 1);
    setFilteredData(newData);
  };

  const HandleBack=()=>{
    setShowEdit(false);
  }

  return (
    <div className="wholeTable">
      {showEdit && (
        <div className="editform">
          <EditProduct handleback={HandleBack} onSave={handleSave} data={filteredData[editIndex]} />
        </div>
      )}
      <div
        className="table-container"
        style={{ opacity: showEdit ? "0.2" : "1" }}
      >
        <table className="custom-table" cellPadding="20" cellSpacing="0">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onMouseEnter={() => setHoveredRow(rowIndex)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>{row[column.datakey]}</td>
                ))}
                <td
                  style={{
                    border: "none",
                    visibility: hoveredRow === rowIndex ? "visible" : "hidden",
                  }}
                >
                  <CommonButton
                    className="action-btn"
                    label={<AiFillEdit />}
                    onClick={() => handleEdit(rowIndex)}
                  />
                  <CommonButton
                    className="action-btn2"
                    label={<MdDeleteForever />}
                    onClick={() => handleDelete(rowIndex)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommonTable;
