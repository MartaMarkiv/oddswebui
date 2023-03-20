import { WindowWrapper } from "./styles";
import { Title } from "../typography/Title/Title";

export const ModalWindow = ({ title, isOpen, isClosable, children }) => {
      
    return <WindowWrapper
            title={<Title>{title}</Title>}
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