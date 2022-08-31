import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  console.log("user", user);
  const logoutClick = async () => {
    console.log("result_entered");
    var result = await dispatch(logout());
    console.log("result", result);
  };
  return (
    <>
      <h2>Account</h2>
      <h2>
        <b>{user.name}</b>
      </h2>
      <p>{`Email: ${user.email}`}</p>
      <p>{`Password: ${user.password}`}</p>
      <p>{`Email: ${user.email}`}</p>
      <Button variant="outlined" color="error" onClick={logoutClick}>
        Log Out
      </Button>
    </>
  );
};

export default Account;
