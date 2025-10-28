import "./ModalProvider.scss";

const ModalProvider = ({ children }) => {
  return <div className="modal">{children}</div>;
};

export default ModalProvider;
