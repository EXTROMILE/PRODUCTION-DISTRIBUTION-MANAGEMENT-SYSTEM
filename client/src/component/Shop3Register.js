import { useContext, useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { adddata } from "./context/ContextProvider";

const Shop1Register = () => {
  const { udata, setUdata } = useContext(adddata);

  const navigate = useNavigate("");

  const [inpval, setINP] = useState({
    model:"",
    date:"",
    totcw:"",
    totpin:"",
    cwmade:"",
    pinmade:"",
    cwbal:"",
    pinbal:"",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {...preval, [name]: value };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const {
        model,
        date,
        totcw,
        totpin,
        cwmade,
        pinmade,
        cwbal,
        pinbal,
    } = inpval;

    if (model === "") {
      alert("Model is required");
    } else if (date === "") {
      alert("Date is required");
    } else if (totcw === "") {
      alert("Total Cw is required");
    } else if (totpin === "") {
      alert("Total Pin is required");
    } else if (cwmade === "") {
      alert("Cw Made is required");
    } else if (pinmade === "") {
      alert("Pin Made is required");
    } else if (cwbal === "") {
      alert("Cw Balance is required");
    } else if (pinbal === "") {
      alert("Pin Balance is required");
    } else {
      const res = await fetch("/createShop3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model,
            date,
            totcw,
            totpin,
            cwmade,
            pinmade,
            cwbal,
            pinbal,
        })
      });

      const data = await res.json();

      if (res.status === 422 ||!data) {
        alert("Error");
        console.log("Error");
      } else {
        navigate("/Shop3");
        setUdata(data);
        console.log("Data added");
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="mt-3 mb-3">
            <NavLink className="btn btn-info" to="/shop3">SHOP3</NavLink>
        </div>
        <form className="container mt-4">
          <div className="row">
            <div className="mb-3 col-lg-12 col-md-12 col-12">
              <label for="InputModel" className="form-label">
                MODEL
              </label>
              <input
                type="text"
                onChange={setdata}
                value={inpval.model}
                name="model"
                className="form-control"
                id="InputModel"
              />
            </div>

            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputDate" className="form-label">
                DATE
              </label>
              <input
                type="date"
                onChange={setdata}
                value={inpval.date}
                name="date"
                className="form-control"
                id="InputDate"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputTotalCw" class="form-label">
                TOTAL CW
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.totcw}
                name="totcw"
                class="form-control"
                id="InputTotalCw"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputTotalPin" class="form-label">
                TOTAL PIN
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.totpin}
                name="totpin"
                class="form-control"
                id="InputTotalPin"
              />
            </div>

            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputCwMade" className="form-label">
                CW MADE
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.cwmade}
                name="cwmade"
                className="form-control"
                id="InputCwMade"
              />
            </div>

            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputPinMade" className="form-label">
                PIN MADE
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.pinmade}
                name="pinmade"
                class="form-control"
                id="InputPinMade"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputCwBal" class="form-label">
                CW BAL
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.cwbal}
                name="cwbal"
                class="form-control"
                id="InputCwBal"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputPinBal" class="form-label">
                PIN BAL
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.pinbal}
                name="pinbal"
                class="form-control"
                id="InputPinBal"
              />
            </div>

            <button
              type="submit"
              onClick={addinpdata}
              class="btn btn-primary mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Shop1Register;
