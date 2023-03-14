import React from "react";
import styled from "styled-components";
import { ResetPassword } from "../components/ResetPassword";

const StyledMain = styled.div`
  position: relative;
`;

const onReset = (values) => {
    console.log("On reset");
    console.log(values);
}
export const ResetPasswordPage = ({}) => {

    return <StyledMain>
        <ResetPassword reset={onReset}/>
    </StyledMain>

}