import { uri_home } from 'router/Routes';
import { doLogout } from 'store/slices/auth/actions';

/**
 * Function to remove user data from the store and redirect to home
 * @param {*} dispatch is the function to throw actions to the store in order to update the state
 * @param {*} navigate is the function to navigate between routes
 * @function
 */
export const logout = (dispatch, navigate) => {
  dispatch(doLogout());
  navigate(uri_home, { replace: true });
};
