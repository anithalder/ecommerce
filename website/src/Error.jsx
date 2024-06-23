import React from "react";
import styled from "styled-components";
// import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img src="error.svg" alt="error"/>
      <NavLink to="/">
        {/* <Button className="btn"> Go Back</Button> */}
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: scale(.75);

  .btn {
    font-size: 1.8rem;
    margin-top: 2rem;
  }
`;

export default Error;