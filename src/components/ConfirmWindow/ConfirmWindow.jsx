import { ConfirmWrapper, MessageWrapper } from "./styles";


export const ConfirmWindow = ({ isOpen, content, handleOk, handleCancel }) => {
      
    return <ConfirmWrapper
        open={isOpen}
        centered
        closable={false}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
    >
        <MessageWrapper>{content}</MessageWrapper>
  </ConfirmWrapper>
}