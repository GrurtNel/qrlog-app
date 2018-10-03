// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL: 'http://localhost:8081/api/',
  host: 'http://localhost:8081/app',
  firebase: {
    apiKey: "AIzaSyDyJZd5gv_J5dPHrpzK-kOlXpocpAld0eM",
    authDomain: "trunglv-c5d29.firebaseapp.com",
    databaseURL: "https://trunglv-c5d29.firebaseio.com",
    projectId: "trunglv-c5d29",
    storageBucket: "trunglv-c5d29.appspot.com",
    messagingSenderId: "80453937715"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
