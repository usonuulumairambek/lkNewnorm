import React from "react";
import "./index.css";
import excelFiles from "./excelfiles";
import { useSelector } from "react-redux";

export default function TableDoc() {
  // article_value(pin):"nan"
  // product_type(pin):"nan"
  // color(pin):"nan"
  // target_gender(pin):"nan"
  // clothing_type(pin):"nan"
  // clothing_value(pin):"nan"
  // composition(pin):"nan"
  // standard_no(pin):"nan"
  // status(pin):"nan"
  const docsData = useSelector((state) => state.docs.getTable);
  return (
    <div>
      <table className="table table-docs">
        <thead>
          {excelFiles.map((data, index) => (
            <tr key={index}>
              {data.map((row, qr) => (
                <th key={qr} className="table-th">
                  {row}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {(docsData || []).map((data) => (
            <tr key={data.id}>

              {console.log(data.tnved === "nan")}
              <td className="table-tr">
                {data.tnved === "nan" ? "" : data.tnved}
              </td>
              <td className="table-tr">
                {data.full_product_name === "nan" ? "" : data.full_product_name}
              </td>
              <td className="table-tr">
                {data.trademark === "nan" ? "" : data.trademark}
              </td>
              <td className="table-tr">
                {data.article_type === "nan" ? "" : data.article_type}
              </td>
              <td className="table-tr">
                {data.article_value === "nan" ? "" : data.article_value}
              </td>
              <td className="table-tr">
                {data.product_type === "nan" ? "" : data.product_type}
              </td>
              <td className="table-tr">
                {data.color === "nan" ? "" : data.color}
              </td>
              <td className="table-tr">
                {data.target_gender === "nan" ? "" : data.target_gender}
              </td>
              <td className="table-tr">
                {data.clothing_type === "nan" ? "" : data.clothing_type}
              </td>
              <td className="table-tr">
                {data.clothing_value === "nan" ? "" : data.clothing_value}
              </td>
              <td className="table-tr">
                {data.composition === "nan" ? "" : data.composition}
              </td>
              <td className="table-tr">
                {data.standard_no === "nan" ? "" : data.standard_no}
              </td>
              <td className="table-tr">
                {data.status === "nan" ? "" : data.status}
              </td>
              <td className="table-tr">
                {data.status === "nan" ? "" : data.result_treatment_data}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
