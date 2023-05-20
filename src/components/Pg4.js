import React from "react";
import "./P4.css";
import camera from "../Assets/videocall.png";
import phone from "../Assets/call.png";
import coloredscroll from "../Assets/Vector (5).png";
import { Link } from "react-router-dom";
import backicon from "../Assets/Group.png";
import { page4Schema } from "../Schemas/pg4schema";
import { useFormik } from "formik";

const initialValues = {
  date: "",
  time: "",
};

function Pg4() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: page4Schema,
      onSubmit: (values, action) => {
        fetch("http://localhost:3001", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }).then(function (response) {
          console.log(response.status);
        });
        console.log(values);
        // action.resetForm();
      },
    });
  console.log(errors);
  return (
    <div className="pg4">
      <div className="ht">
        <Link to="/pg3">
          <img src={backicon} alt="" />
        </Link>
        Back
      </div>

      <div className="pg">
        <img src={coloredscroll} alt="" />
        <img src={coloredscroll} alt="" />
        <img src={coloredscroll} alt="" />
        <img src={coloredscroll} alt="" />
      </div>
      <h3 className="heading">Schedule an appointment</h3>

      <form onSubmit={handleSubmit} action="">
        <div className="">Select date</div>
        <br />
        <input
          className="ninput"
          placeholder="September 18,2021"
          type="date"
          name="date"
          id="date"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        {errors.date && touched.date ? (
          <p className="form-errors">{errors.date}</p>
        ) : null}

        <div className="input-heading" htmlFor="">
          Select time
        </div>
        <br />
        <input
          className="ninput"
          type="text"
          name="time"
          id="time"
          value={values.time}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />

        <div htmlFor="">Choose a slot</div>
        <br />
        <button className="btn2 active">10:30 to 10:45 am</button>
        <button className="btn2">10:45 to 11:00 am</button>
        <br />

        <div className="input-heading" htmlFor="">
          call type
        </div>
        <br />
        <button className="btn3 active ">
          <img src={camera} alt="" />
          Video call
        </button>
        <button className="btn3 call ">
          <img src={phone} alt="" />
          Audio call
        </button>
        <br />

        <Link to="/pg5">
          <button className="btn">Next</button>
        </Link>
      </form>
    </div>
  );
}

export default Pg4;
