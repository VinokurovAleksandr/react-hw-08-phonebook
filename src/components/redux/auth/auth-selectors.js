const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getRefreshCurrentUser = state => state.auth.refreshCurrentUser;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getRefreshCurrentUser,
};

export default authSelectors;