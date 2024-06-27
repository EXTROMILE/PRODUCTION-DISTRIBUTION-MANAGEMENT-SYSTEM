import { useContext, useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { adddata } from "./context/ContextProvider";

const Register = () => {
  const { udata, setUdata } = useContext(adddata);

  const navigate = useNavigate("");

  const [inpval, setINP] = useState({
    model: "",
    jsr: "",
    lkw: "",
    ckdliv: "",
    pune: "",
    spd: "",
    lkoadv: "",
    puneadv: "",
    totalrequired: "",
    micoprod: "",
    micobal: "",
    excw:"",
    expin:"",
    totcw:"",
    totpin:""
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
      jsr,
      lkw,
      ckdliv,
      pune,
      spd,
      lkoadv,
      puneadv,
      totalrequired,
      micoprod,
      micobal,
      excw,
      expin,
      totcw,
      totpin,
    } = inpval;

    if (model === "") {
      alert("Model is required");
    } else if (jsr === "") {
      alert("Jsr is required");
    } else if (lkw === "") {
      alert("Lkw is required");
    } else if (ckdliv === "") {
      alert("Ckdliv is required");
    } else if (pune === "") {
      alert("Pune is required");
    } else if (spd === "") {
      alert("Spd is required");
    } else if (lkoadv === "") {
      alert("Lkoadv is required");
    } else if (puneadv === "") {
      alert("Puneadv is required");
    } else if (totalrequired === "") {
      alert("Totalrequired is required");
    } else if (micoprod === "") {
      alert("Micoprod is required");
    } else if (micobal === "") {
      alert("Micobal is required");
    } else if (excw === "") {
      alert("EXTRA CW is required");
    } else if (expin === "") {
      alert("EXTRA PIN is required");
    } else if (totcw === "") {
      alert("TOTAL CW is required");
    } else if (totpin === "") {
      alert("TOTAL PIN is required");
    } else {
      const res = await fetch("/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model,
          jsr,
          lkw,
          ckdliv,
          pune,
          spd,
          lkoadv,
          puneadv,
          totalrequired,
          micoprod,
          micobal,
          excw,
          expin,
          totcw,
          totpin,
        })
      });

      const data = await res.json();

      if (res.status === 422 ||!data) {
        alert("Error");
        console.log("Error");
      } else {
        navigate("/");
        setUdata(data);
        console.log("Data added");
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="mt-3 mb-3">
            <NavLink className="btn btn-info" to="/">Home</NavLink>
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
              <label for="InputJsr" className="form-label">
                JSR
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.jsr}
                name="jsr"
                className="form-control"
                id="InputJsr"
              />
            </div>

            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputLkw" className="form-label">
                LKW
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.lkw}
                name="lkw"
                className="form-control"
                id="InputLkw"
              />
            </div>

            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputCkd/Liv" className="form-label">
                CKD/LIV
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.ckdliv}
                name="ckdliv"
                class="form-control"
                id="InputCkd/Liv"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputPune" class="form-label">
                PUNE
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.pune}
                name="pune"
                class="form-control"
                id="InputPune"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputSpd" class="form-label">
                SPD
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.spd}
                name="spd"
                class="form-control"
                id="InputSpd"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputLkoAdv" class="form-label">
                LKO ADV
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.lkoadv}
                name="lkoadv"
                class="form-control"
                id="InputLkoAdv"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputPuneAdv" class="form-label">
                PUNE ADV
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.puneadv}
                name="puneadv"
                class="form-control"
                id="InputPuneAdv"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputTotalRequired" class="form-label">
                TOTAL REQUIRED
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.totalrequired}
                name="totalrequired"
                class="form-control"
                id="InputTotalRequired"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputMicoProd" class="form-label">
                MICO PRODUCTION
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.micoprod}
                name="micoprod"
                class="form-control"
                id="InputmiMcoProd"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputMicoBal" class="form-label">
                MICO BALANCE
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.micobal}
                name="micobal"
                class="form-control"
                id="InputMicoBal"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputExtraCw" class="form-label">
                EXTRA CW
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.excw}
                name="excw"
                class="form-control"
                id="InputExtraCw"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="InputExtraPin" class="form-label">
                EXTRA PIN
              </label>
              <input
                type="number"
                onChange={setdata}
                value={inpval.expin}
                name="expin"
                class="form-control"
                id="InputExtraPin"
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

export default Register;
