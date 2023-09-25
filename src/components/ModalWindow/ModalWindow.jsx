import { WindowWrapper } from "./styles";
import { Title } from "../typography/Title/Title";
import {LogoImage, LogoLink} from "../Header/styles";

export const ModalWindow = ({ title, isOpen, isClosable, children }) => {
      
    return <WindowWrapper
            title={
                <Title>
                    <LogoLink href="/">
                        <LogoImage />
                    </LogoLink>
                    {title}
                </Title>
            }
            open={isOpen}
            centered
            closable={isClosable}
            footer={null}
        >
            {
                children
            }
    </WindowWrapper>
}