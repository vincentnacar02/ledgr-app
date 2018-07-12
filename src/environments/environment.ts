// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:61479/ServiceApi.svc',
  apiEndpoint: '/api/v1',
  firebaseConfig: {
    apiKey: "AIzaSyB9aTqwD619rnukNFgWIGQjgSmFHVLf9PA",
    authDomain: "ledger-app-a234a.firebaseapp.com",
    databaseURL: "https://ledger-app-a234a.firebaseio.com",
    projectId: "ledger-app-a234a",
    storageBucket: "ledger-app-a234a.appspot.com",
    messagingSenderId: "492125508517"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
