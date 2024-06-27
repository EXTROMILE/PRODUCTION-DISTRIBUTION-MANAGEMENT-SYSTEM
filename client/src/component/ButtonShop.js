import { useState, useEffect } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const buttonshop = () => {
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
            {result.map((getUserdata) => (
              <tr>
                <td className="width-10"> 
                    {/* <label for="model"></label>
                    <select name="model" id="model">
                      <option value="">{getUserdata.model}</option>
                    </select> */}
                    {getUserdata.MODEL}
                  </td>
                  <td>
                  <input type="date" />
                  <label for="date"></label>
                  </td>
                  <td>{getUserdata.TOTCW}</td>
                  <td>{getUserdata.TOTPIN}</td>
                  <td>{getUserdata.CWMADE}</td>
                  <td>{getUserdata.PINMADE}</td>
                  <td>{getUserdata.CWBAL}</td>
                  <td>{getUserdata.PINBAL}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default buttonshop;
