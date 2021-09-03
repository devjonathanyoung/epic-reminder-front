import { useEffect } from "react";

/**
 * Custom hook that listens for clicks outside the {ref} html element and calls handler function
 * @param {Object} ref
 * @param {function} handler
 */
const useOnClickOutside = (ref, handler) => {
	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};
		document.addEventListener("mousedown", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
		};
	}, [ref, handler]);
};

export default useOnClickOutside;
