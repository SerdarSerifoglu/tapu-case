import React, { Suspense, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Layout = () => {
  var userSignedIn = useSelector((state) => state.user.isSignedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userSignedIn) {
      navigate("/login");
    }
  }, [userSignedIn]);

  return (
    <>
      <Suspense
        fallback={
          <CircularProgressWrapper>
            <CircularProgress />
          </CircularProgressWrapper>
        }
      >
        <Outlet />
      </Suspense>
      <Footer></Footer>
    </>
  );
};

const CircularProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
export default Layout;
