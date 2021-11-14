import React, { useState } from "react";
import "./Style.js";
import { TextField, Grid, FormControl, Button } from "@material-ui/core";
import { useStyles } from "./Style";
import { axiosPost } from "../../Network/CRUD";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      alert("wrond username or password");
    }
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    var response = await axiosPost(formdata, "User");
    if (response.status == 201) {
      window.localStorage.setItem("email", email);
      navigate("/admin");
    }
    console.log("log", response);
  };
  const styles = useStyles();

  return (
    <Grid container style={{ marginTop: "50px" }}>
      <Grid item xs={12} lg={3}></Grid>
      <Grid item xs={12} lg={6}>
        <FormControl style={{ marginTop: "10px" }} fullWidth>
          <h2 htmlFor="projectName" style={{ color: "white" }}>
            Email
          </h2>
          <TextField
            id="projectName"
            value={email}
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            InputProps={{
              className: styles.input,
            }}
          />
        </FormControl>
        <FormControl style={{ marginTop: "10px" }} fullWidth>
          <h2 htmlFor="projectLocation" style={{ color: "white" }}>
            Password
          </h2>
          <TextField
            id="Password"
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            variant="outlined"
            InputProps={{
              className: styles.input,
            }}
          />
        </FormControl>
        <FormControl
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            onClick={handleSubmit}
            style={{
              marginRight: "25%",
              marginLeft: "25%",
              marginTop: "10px",
              color: "white",
              fontSize: "1.3rem",
              borderColor: "white",
            }}
          >
            Login
          </Button>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={3}></Grid>
    </Grid>
  );
}
