import { ConfirmWrapper, MessageWrapper } from "./styles";


export const ConfirmWindow = ({ isOpen, content, handleOk, handleCancel, okText }) => {
      
    return <ConfirmWrapper
        open={isOpen}
        centered
        closable={false}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={okText}
    >
        <MessageWrapper>{content}</MessageWrapper>
  </ConfirmWrapper>
}