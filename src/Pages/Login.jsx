import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    Number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = () => {
    console.log(login);
  };

  return (
    <div>
      <div>
        <div
          style={{
            background: "green",
            width: "55%",
            height: "60vh",
            margin: "auto",
            marginTop: "150px",
            borderRadius: "20px",
          }}
        >
          <h1
            style={{
              width: "40%",
              marginLeft: "60px",
              color: "white",
              fontFamily: "sans-serif",
              position: "relative",
              top: "100px",
              fontSize: "40px",
            }}
          >
            Enter Mobile Number
          </h1>
          <input
            name="Number"
            type="text"
            placeholder="Mobile Number"
            onChange={handleChange}
            value={login.Number}
            style={{
              position: "relative",
              height: "30px",
              width: "260px",
              marginLeft: "60px",
              top: "100px",
              color: "black",
              fontSize: "20px",
            }}
          />
          <br />
          <button
            type="button" // Changed to "button" type
            style={{
              position: "relative",
              height: "40px",
              borderRadius: "10px",
              border: "1px solid black",
              cursor: "pointer",
              width: "258px",
              fontFamily: "sans-serif",
              fontSize: "20px",
              marginLeft: "60px",
              top: "120px",
              background: "white",
              fontWeight: "600",
            }}
            onClick={handleSubmit}
          >
            Get OTP
          </button>
          <div
            style={{
              background: "black",
              width: "2px",
              height: "40vh",
              position: "relative",
              left: "55%",
              top: "-130px",
              backgroundColor: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
