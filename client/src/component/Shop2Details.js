import React, { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";

const Shop1Details = () => {
  const [getUserdata, setUserdata] = useState([]);
  console.log(getUserdata);

  const { id } = useParams("");
  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await fetch(`/induserShop2/${id}`, {
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
      const res2 = await fetch(`/deleteuserShop2/${id}`, {
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
            <NavLink className="btn btn-info" to="/shop2">SHOP2</NavLink>
        </div>
      <h1 style={{ fontWeight: 400 }}>MODEL DETAILS</h1>
      <Card sx={{ maxWidth: 500 }}>
        <CardContent className="cardcontainer mt-3">
          <div className="add_btn">
            <NavLink to={`/Shop2/Shop2edit/${getUserdata.id}`}>
              <button className="btn btn-primary mx-2">
                <EditIcon />
              </button>
            </NavLink>
            <button
              className="btn btn-danger"
              onClick={() => deleteuser(getUserdata.id)}>
              <DeleteIcon />
            </button>
          </div>

          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <h3 className="mt-2">
                Model: <span>{getUserdata.model}</span>
              </h3>
              <p className="mt-3">
                DATE : <span>{getUserdata.date}</span>
              </p>
              <p className="mt-3">
                TOTAL CW : <span>{getUserdata.totcw}</span>
              </p>
              <p className="mt-3">
                TOTAL PIN : <span>{getUserdata.totpin}</span>
              </p>
            </div>

            <div className="right_view col-lg-6 col-md-6 col-12">
              <p className="mt-3">
                CW MADE : <span>{getUserdata.cwmade}</span>
              </p>
              <p className="mt-3">
                PIN MADE : <span>{getUserdata.pinmade}</span>
              </p>
              <p className="mt-2">
                CW BALANCE : <span>{getUserdata.cwbal}</span>
              </p>
              <p className="mt-3">
                PIN BALANCE : <span>{getUserdata.pinbal}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Shop1Details;
