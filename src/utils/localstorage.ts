/**********************
 * Localstorage management
 **********************/

/**
 * Set Auth
 */
export const setAuth = (token: string) => {
  localStorage.setItem('auth', token);
};

/**
 * Get Auth
 */
export const getAuth = () => {
  return localStorage.getItem('auth');
};
