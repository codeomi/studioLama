import React, { useMemo, useState } from "react";
import "./pg1.css";
import { Link } from "react-router-dom";
import Pg2 from "./Pg2";
import uncoloredscroll from "../Assets/Vector (4).png";
import coloredscroll from "../Assets/Vector (5).png";
// import { Link } from "react-router-dom";
import backicon from "../Assets/Group.png";
import { useFormik } from "formik";
import { page1Schema } from "../Schemas/pg1schema";
import countryList from "react-select-country-list";
import Select from "react-select";
import countryCodes from "country-codes-list";

const initialValues = {
  name: "",
  email: "",
  number: "",
  dob: "",
};

function Page1() {
  const myCountryCodesObject = Object.values(countryCodes);
  console.log(myCountryCodesObject);
  
  const options = useMemo(() => countryList().getData(), []);

  const [flag, setFlag] = useState(false);
  const [country, setCountry] = useState("");

  const myStyle = {
    display: flag ? "block" : "none",
  };

  const clearradio = (name, value) => {
    var radios = document.getElementsByName(name);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].value !== value) {
        radios[i].checked = false;
      }
    }
  };

  return (
    <div className="pg1">
      <div className="pg">
        <img src={coloredscroll} alt="" />
        <img src={uncoloredscroll} alt="" />
        <img src={uncoloredscroll} alt="" />
        <img src={uncoloredscroll} alt="" />
      </div>
      <h3 className="heading">
        Get your questions answered by our consultants from the comfort of your
        home
      </h3>
      <form className="formContainer"
      //  onClick={handleSubmit} 
       action="">
        <div className="nameContainer inputContainers">
          <div htmlFor="">Child's name</div>

          <input
            name="name"
            className="ninput"
            // onChange={handleChange}
            // value={cname}
            placeholder="Alice"
            type="text"
            // value=
            // onChange={handleChange}
            // onBlur={handleBlur}
          />

        </div>
        <div className="dobContainer inputContainers">
          <div htmlFor="">Child's date of birth</div>

          <input
            className="ninput"
            placeholder="9/14/2020"
            name="dob"
            type="text"
            // value={values.dob}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />

          {/* {errors.dob && touched.dob ? (
            <p className="form-errors">{errors.dob}</p>
          ) : null} */}

          <div htmlFor="">Born at less than 37 weeks?</div>

          <div htmlFor="">
            <input
              type="radio"
              name="grp1"
              value="1"
              onClick={() => {
                // clearradio("grp1", "1");
                setFlag(!flag);
              }}
            />
            No
          </div>

          <div htmlFor="">
            <input
              type="radio"
              name="grp1"
              value="2"
              onClick={() => {
                // clearradio("grp1", "2");
                setFlag(!flag);
              }}
            />
            Yes
          </div>

          {/* <div className="random">{flag}</div> */}

          <div style={myStyle} className="variable">
            <div>Born in weeks</div>

            <input className="ninput" type="text" />
          </div>
        </div>

        <div className="weightHeight">
          <div className="weightContainer  inputContainers">
            <div htmlFor="">Weight unit</div>
            <div className="weightHeightInput">
              <input className="cin wh-unit" type="number" />

              <select className="unit" name="wt-units" id="">
                <option value="kg">Kg</option>
                <option value="kg">g</option>
                <option value="kg">pound</option>
              </select>
            </div>
          </div>
          <div className="heightContainer  inputContainers">
            <div htmlFor="">Height unit</div>

            <div className="weightHeightInput">
              <input className="cin wh-unit" type="number" />

              <select className="unit" name="" id="">
                <option value="cm">cm</option>
                <option value="inches">inches</option>
              </select>
            </div>
          </div>
        </div>
        <div className="emailContainer  inputContainers">
          <div htmlFor="">Email address</div>

          <input
            name="email"
            placeholder="james@gmail.com"
            className="ninput"
            type="text"
            // value={values.email}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />

          {/* {errors.email && touched.email ? (
            <p className="form-errors">{errors.email}</p>
          ) : null} */}
        </div>
        <div className="phoneContainer  inputContainers">
          <div htmlFor="">Phone number</div>
          <select>
            {myCountryCodesObject.map((country) => (
              <option key={country.alpha2} value={country.alpha2}>
                {country.name}
              </option>
            ))}
          </select>

          <input
            name="number"
            placeholder="number"
            className="pin"
            type="text"
            // value={values.number}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
          {/* {errors.number && touched.number ? (
            <p className="form-errors">{errors.number}</p>
          ) : null} */}
        </div>

        <Link to={`/pg2`}>
          <button className="btn" type="submit">
            Next
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Page1;
