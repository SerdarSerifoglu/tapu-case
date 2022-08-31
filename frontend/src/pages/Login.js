import { TextField, Button, Grid } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

import { userControl } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const clickEvent = async () => {
    var result = await dispatch(userControl({ email, password }));
    console.log("Login_result", result);
    if (result.meta.requestStatus == "fulfilled" && result.payload.length > 0) {
      navigate("/account");
    }
  };
  return (
    <>
      <Wrapper>
        <h2>Login</h2>
        <Form>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button variant="contained" onClick={clickEvent}>
            Login
          </Button>
        </Form>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  padding: 0 10px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Login;
