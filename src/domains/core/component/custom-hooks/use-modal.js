import { useState } from "react";
import ReactDOM from "react-dom";


const modalRoot = document.getElementById("modal-root");

const useModal = () => {

	const [visibility, setVisibility] = useState(false);

	const open = () => {
		setVisibility(true);
	};

	const close = () => {
		setVisibility(false);
	};

	const ModalWrapper = (props) => {
		const { children } = props;
		return visibility ? ReactDOM.createPortal(children, modalRoot) : null;
	};

	return {
		ModalWrapper, open, close
	};
};

export default useModal;