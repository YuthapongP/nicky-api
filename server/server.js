import { initializeApp, credential as _credential } from "firebase-admin";

import serviceAccount from "./firebaseConfig.json";

initializeApp({
  credential: _credential.cert(serviceAccount),
  databaseURL:
    "https://nicky-api-default-rtdb.asia-southeast1.firebasedatabase.app",
});
