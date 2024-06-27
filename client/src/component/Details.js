import React, { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";

// const [udata, setUdata] = useState("");
//   const [updata, setUPdata] = useState("");
//   const [dltdata, setDLTdata] = useState("");


const Details = () => {
  const [getUserdata, setUserdata] = useState([]);
  console.log(getUserdata);

  const { id } = useParams("");
  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await fetch(`/induser/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 200) {
          setUserdata(data);
          console.log("get data");
        } else {
          console.log("error ");
        }
      } catch (error) {
        console.error(error);
      }
    };

    getdata();
  }, [id]);

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

      if (res2.status === 200) {
        console.log("user deleted");
        navigate("/");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-3">
      <div className="mt-3 mb-3">
            <NavLink className="btn btn-info" to="/">Home</NavLink>
        </div>
      <h1 style={{ fontWeight: 400 }}>MODEL DETAILS</h1>
      <Card sx={{ maxWidth: 500 }}>
        <CardContent className="cardcontainer">
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <h3 className="mt-2">
                Model: <span>{getUserdata.model}</span>
              </h3>
              <p className="mt-3">
                JSR : <span>{getUserdata.jsr}</span>
              </p>
              <p className="mt-3">
                LKW : <span>{getUserdata.lkw}</span>
              </p>
              <p className="mt-3">
                CKD/LIV : <span>{getUserdata.ckdliv}</span>
              </p>
              <p className="mt-3">
                PUNE : <span>{getUserdata.pune}</span>
              </p>
              <p className="mt-3">
                SPD : <span>{getUserdata.spd}</span>
              </p>
              <p className="mt-2">
                LKOADV : <span>{getUserdata.lkoadv}</span>
              </p>
              <p className="mt-3">
                PUNEADV : <span>{getUserdata.puneadv}</span>
              </p>
            </div>

            <div className="right_view col-lg-6 col-md-6 col-12">

            <div className="add_btn">
            <NavLink to={`/edit/${getUserdata.id}`}>
              <button className="btn btn-primary mx-2">
                <EditIcon />
              </button>
            </NavLink>
            <button
              className="btn btn-danger"
              onClick={() => deleteuser(getUserdata.id)}
            >
              <DeleteIcon />
            </button>
          </div>
              
              <p className="mt-3">
                TOTREQ : <span>{getUserdata.totalrequired}</span>
              </p>
              <p className="mt-3">
                MICOPROD : <span>{getUserdata.micoprod}</span>
              </p>
              <p className="mt-3">
                MICOBAL : <span>{getUserdata.micobal}</span>
              </p>
              <p className="mt-3">
                EXTRA CW : <span>{getUserdata.excw}</span>
              </p>
              <p className="mt-3">
                EXTRA PIN : <span>{getUserdata.expin}</span>
              </p>
              <p className="mt-3">
                TOTAL CW : <span>{getUserdata.totcw}</span>
              </p>
              <p className="mt-3">
                TOTAL PIN : <span>{getUserdata.totpin}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;