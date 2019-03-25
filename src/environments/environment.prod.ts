export const environment = {
  production: true
};
export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'winterclient.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://westerosfantasyleague.azurewebsites.com';
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:4200';
}
