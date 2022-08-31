import React, { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
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
