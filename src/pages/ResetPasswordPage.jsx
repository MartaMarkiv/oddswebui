import styled from "styled-components";
import { ResetPassword } from "../components/ResetPassword";
import { useParams } from "react-router-dom";
import { updatePasswordRequest } from "../api/userRequests";
import { Title } from "../components/typography/Title/Title";
import { useNavigate } from "react-router-dom";

const StyledMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
`;

export const ResetPasswordPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();


    const onReset = ({password}) => {
        updatePasswordRequest(password, id, data => {
            if (data.success) {
                navigate("/", { replace: true});
            }
        });
    };

    return <StyledMain>
        <Title>Choose a new password</Title>
        <ResetPassword reset={onReset}/>
    </StyledMain>

}