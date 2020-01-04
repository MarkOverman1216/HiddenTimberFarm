/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
let auth0 = null;

// ..

const fetchAuthConfig = () => fetch("/auth_config.json");

// ..

const configureClient = async () => {
  const response = await fetchAuthConfig();
  const config = await response.json();

  auth0 = await createAuth0Client({
    domain: config.domain,
    client_id: config.clientId,
    audience: config.audience
  });
};
// ..

// ..

window.onload = async () => {
  await configureClient();

  // NEW - update the UI state
  updateUI();

  const isAuthenticated = await auth0.isAuthenticated();

  if (isAuthenticated) {
    // show the gated content
    return;
  }

  // NEW - check for the code and state parameters
  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    // Process the login state
    await auth0.handleRedirectCallback();

    updateUI();

    // Use replaceState to redirect the user away and remove the querystring parameters
    window.history.replaceState({}, document.title, "/");
  }
};

// NEW
const updateUI = async () => {
  const isAuthenticated = await auth0.isAuthenticated();
  // document.getElementById("btn-logout").disabled = !isAuthenticated;
  // document.getElementById("btn-login").disabled = isAuthenticated;
  // document.getElementById("btn-call-api").disabled = !isAuthenticated;
  // NEW - add logic to show/hide gated content after authentication
  // if (isAuthenticated) {
  //   document.getElementById("gated-content").classList.remove("hidden");
  //   document.getElementById(
  //     "ipt-access-token"
  //   ).innerHTML = await auth0.getTokenSilently();
  //   document.getElementById("ipt-user-profile").innerHTML = JSON.stringify(
  //     await auth0.getUser()
  //   );
  // } else {
  //   document.getElementById("gated-content").classList.add("hidden");
  // }
};

const login = async () => {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin
  });
};

const logout = () => {
  auth0.logout({
    returnTo: window.location.origin
  });
};

const getToken = async () => {
  try {
    // Get the access token from the Auth0 client
    return auth0.getTokenSilently();

    // Make the call to the API, setting the token
    // in the Authorization header
    // const response = await fetch("/api/owners", {
    // headers: {
    //   Authorization: `Bearer ${token}`
    // }
    // });

    // // Fetch the JSON result
    // const responseData = await response.json();

    // // Display the result in the output element
    // const responseElement = document.getElementById("api-call-result");

    // responseElement.innerText = JSON.stringify(responseData, {}, 2);
  } catch (e) {
    // Display errors in the console
    console.error(e);
  }
};

const API = {
  saveOwner: async owner => {
    console.log(owner, "inside the auth.js");
    const token = await auth0.getTokenSilently();
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/owners",
      data: JSON.stringify(owner),
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  getOwners: async () => {
    const token = await auth0.getTokenSilently();
    return $.ajax({
      url: "api/owners",
      type: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  editOwner: async formData => {
    const token = await auth0.getTokenSilently();
    // console.log($ownerId.text(), formData);
    return $.ajax({
      url: "/api/owners/" + $ownerId.text(),
      type: "PUT",
      data: { ...formData },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  deleteOwner: async id => {
    const token = await auth0.getTokenSilently();
    return $.ajax({
      url: "api/owners/" + id,
      type: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  //Horses ----------------------------------
  saveHorse: async horse => {
    const token = await auth0.getTokenSilently();
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/horses",
      data: JSON.stringify(horse),
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  getHorses: async () => {
    const token = await auth0.getTokenSilently();
    return $.ajax({
      url: "api/horses",
      type: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  editHorse: async (formData, $horseId) => {
    const token = await auth0.getTokenSilently();
    return $.ajax({
      url: "/api/horses/" + $horseId.text(),
      type: "PUT",
      data: { ...formData },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  deleteHorse: async id => {
    const token = await auth0.getTokenSilently();
    return $.ajax({
      url: "api/horses/" + id,
      type: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};
