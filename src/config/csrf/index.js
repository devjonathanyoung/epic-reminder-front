const csrfRequestHeader = "csrf-token";
const csrfStorageName = "csrf-token";

/**
 * get CSRF token
 * @return {string} token
 */
const getCSRFToken = () => localStorage.getItem(csrfStorageName);

/**
 * set CSRF token
 * @param {string} token
 */
const saveCSRFToken = (token) => localStorage.setItem(csrfStorageName, token);

const csrf = { csrfRequestHeader, getCSRFToken, saveCSRFToken };

export default csrf;
