/*exported OAuthConfig*/
var OAuthConfig = (function() {
  'use strict';

  var clientId = '2b287596407f421d9c1781cfa830d926';
  var redirectUri = 'http://localhost:8000/callback.html';

  if (location.href.indexOf('http://drinkonbrother.com/') === 0){
    redirectUri = 'http://drinkonbrother.com/callback.html';
    console.log("YES");  
    console.log(location.href);  
  }  else if(location.href.indexOf('http://www.drinkonbrother.com/') === 0) {
    redirectUri = 'http://www.drinkonbrother.com/callback.html';

  }

  var host = /http[s]?:\/\/[^/]+/.exec(redirectUri)[0];

  return {
    clientId: clientId,
    redirectUri: redirectUri,
    host: host,
    stateKey: 'spotify_auth_state'
  };


})();
