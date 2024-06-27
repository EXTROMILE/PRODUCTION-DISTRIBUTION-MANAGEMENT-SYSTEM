import React, { useContext, useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";
import { adddata, deldata } from "./context/ContextProvider";
import { updatedata } from "./context/ContextProvider";
import axios from "axios";

const Home = () => {
  const [getUserdata, setUserdata] = useState([]);
  console.log(getUserdata);

  const { udata, setUdata } = useContext(adddata);
  const { updata, setUPdata } = useContext(updatedata);
  const { dltdata, setDLTdata } = useContext(deldata);

  useEffect(() => {
    axios
      .get("http://localhost:8001/getusersShop1")
      .then((res) => {
        console.log(res.data.status); // This logs the status
        if (res.data.status) {
          console.log(res.data.Result);
          setUserdata(res.data.Result); // Correctly access the Result
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log("error ", error);
      });
  }, []);

  // useEffect(() => {
  //   const getdata = async () => {
  //     try {
  //       const res = await fetch("/getusersShop1", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const data = await res.json();
  //       console.log(data);
  //       setUserdata(data);
  //     } catch (error) {
  //       console.log("error ");
  //     }
  //   };
  //   getdata();
  // }, []);

  const deleteuser = async (id) => {
    try {
      const res2 = await fetch(`/deleteuserShop1/${id}`, {
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
        //  getdata();
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
          <div className="d-flex justify-content-between">
            <div className="mb-3">
              
              <NavLink className="btn btn-info" to="/">
                Home
              </NavLink>
            </div>
            <div className="add_btn">
             
              <NavLink
                to="/Shop1Register"
                className="btn btn-primary mb-3 mr-5"
              >
                Add data
              </NavLink>
              <NavLink to="/buttonShop" className="btn btn-outline-info mb-3">
                DOWNLOAD
              </NavLink>
              
            </div>
          </div>
          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">ID</th>
                <th scope="col w-6">MODEL</th>
                <th scope="col">DATE</th>
                <th scope="col">TOTAL CW</th>
                <th scope="col">TOTAL PIN</th>
                <th scope="col">CW MADE</th>
                <th scope="col">PIN MADE</th>
                <th scope="col">CW BALANCE</th>
                <th scope="col">PIN BALANCE</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getUserdata.map((getUserdata, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
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
                  <td className="d-flex justify-content-between">
                    <NavLink to={`Shop1view/${getUserdata.id}`}>
                      <button className="btn btn-success">
                        <VisibilityIcon />
                      </button>
                    </NavLink>
                    <NavLink to={`Shop1edit/${getUserdata.id}`}>
                      {" "}
                      <button className="btn btn-primary">
                        <EditIcon />
                      </button>
                    </NavLink>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteuser(getUserdata.id)}
                    >
                      <DeleteIcon />
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
