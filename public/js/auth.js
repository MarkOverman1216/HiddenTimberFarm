/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
let auth0 = null;
// ..
const configureClient = async () => {
  auth0 = await createAuth0Client({
    domain: process.env.AUTH0DOMAIN,
    client_id: process.env.AUTH0CLIENTID,
    audience: process.env.AUDIENCE
  });
};
// ..
// ..
window.onload = async () => {
  await configureClient();
  // NEW - update the UI state
  // NEW - check for the code and state parameters
  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    // Process the login state
    await auth0.handleRedirectCallback();
    // Use replaceState to redirect the user away and remove the querystring parameters
    window.history.replaceState({}, document.title, "/");
  }
};

const login = async () => {
  console.log(window.location);
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin
  });
};
const logout = () => {
  auth0.logout({
    returnTo: window.location.origin
  });
};
