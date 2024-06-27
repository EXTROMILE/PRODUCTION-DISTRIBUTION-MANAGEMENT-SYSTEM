import React, { useContext, useEffect, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";
import { adddata, deldata } from "./context/ContextProvider";
import { updatedata } from "./context/ContextProvider";
import axios from "axios";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Home = () => {
  const [getUserdata, setUserdata] = useState([]);
 // console.log(getUserdata);


  const { udata, setUdata } = useContext(adddata);
  const { updata, setUPdata } = useContext(updatedata);
  const { dltdata, setDLTdata } = useContext(deldata);


  useEffect(() => {
    axios.get("http://localhost:8001/getusers")
      .then((res) => {
        console.log(res.data.status); // This logs the status
        if(res.data.status){
          console.log(res.data.Result);
          setUserdata(res.data.Result); // Correctly access the Result
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log("error ", error);
      }); 
  } ,[])

  // useEffect(() => {
  //   const getdata = async () => {
  //     try {
  //       const res = await fetch("/getusers", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const data = await res.json();
  //       console.log(data);
  //       setUserdata(data);
  //       console.log(getUserdata.Model);
  //     } catch (error) {
  //       console.log("error ");
  //     }
  //   };
  //   getdata();
  // }, []);

  const deleteuser = async (id) => {
    try {
      const res2 = await fetch(`/deleteuser/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const deletedata = await res2.json();
      console.log(deletedata);

      if (res2.status === 422 || !deletedata) {
        console.log("error");
      } else {
        console.log("user deleted");
        setDLTdata(deletedata);
      }
    } catch (error) {
      console.log("error");
    }
  };
  
  

  return (
    <>
      {udata ? (
        <>
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{udata.name}</strong> Model added successfully! {/* see */}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      {updata ? (
        <>
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{updata.name}</strong> Model updated successfully!{" "}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      {dltdata ? (
        <>
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>{dltdata.name}</strong> Model deleted successfully!{" "}
            {/* see */}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="mt-5">
        <div className="container">
          <div className="add_btn">
            <div className="button">
              <NavLink to="/Shop1" className="btn btn-outline-primary mb-3">
                METAL CUTTING
              </NavLink>
              <NavLink to="/Shop2" className="btn btn-outline-primary mb-3">
                HEAT TREATEMENT
              </NavLink>
              <NavLink to="/Shop3" className="btn btn-outline-primary mb-3">
                GRINDING
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-info mb-3">
                Add data
              </NavLink>
              <NavLink to="/button" className="btn btn-outline-info mb-3">
                DOWNLOAD
              </NavLink>
            </div>
          </div>

          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">ID</th>
                <th scope="col">MODEL</th>
                <th scope="col">JSR</th>
                <th scope="col">LKW</th>
                <th scope="col">CKD/LIV</th>
                <th scope="col">PUNE</th>
                <th scope="col">SPD</th>
                <th scope="col">LKO ADV</th>
                <th scope="col">PUNE ADV</th>
                <th scope="col">TOTAL REQ</th>
                <th scope="col">MICO PROD</th>
                <th scope="col">MICO BAL</th>
                <th scope="col">EXTRA CW</th>
                <th scope="col">EXTRA PIN</th>
                <th scope="col">TOTAL CW</th>
                <th scope="col">TOTAL PIN</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {/* <li key={user.id}>{user.name}</li> */}
              {getUserdata.map((e , index) => (
                
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
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
                  <td className="d-flex justify-content-around">
                    <NavLink to={`view/${e.id}`}>
                      <button className="btn btn-success space-x-3">
                        <div className="editButton"><VisibilityIcon /></div>
                      </button>
                    </NavLink>
                    <NavLink to={`edit/${e.id}`}>
                      {" "}
                      <button className="btn btn-primary">
                        <div className="editButton"><EditIcon /></div>
                      </button>
                    </NavLink>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteuser(e.id)}
                    >
                      <div className="editButton"><DeleteIcon /></div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};



export default Home;
