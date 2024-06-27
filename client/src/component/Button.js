import { useState, useEffect } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const button = () => {
  const [result, setResult] = useState([]);

  const getData = () => {
    fetch("https://localhost:8001/getusers")
      .then((response) => response.json())
      .then((res) => setResult(res));
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="container">
      <h3 className="mt-3 text-success">
        <center>Export React Table Data into EXCEL Sheet</center>
      </h3>
      <div className="row mt-4">
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button btn btn-success mb-3"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Export Data to Excel Sheet"
        />
        <table className="table" id="table-to-xls">
          <tbody>
            {result.map((e) => (
              <tr>
                <td>{e.Model}</td>
                <td>{e.JSR}</td>
                <td>{e.LKW}</td>
                <td>{e.CKDLIV}</td>
                <td>{e.PUNE}</td>
                <td>{e.SPD}</td>
                <td>{e.LKOADV}</td>
                <td>{e.PUNEADV}</td>
                <td>{e.TOTALREQUIRED}</td>
                <td>{e.MICOPROD}</td>
                <td>{e.MICOBAL}</td>
                <td>{e.EXTRACW}</td>
                <td>{e.EXTRAPIN}</td>
                <td>{e.TOTALCW}</td>
                <td>{e.TOTALPIN}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default button;
