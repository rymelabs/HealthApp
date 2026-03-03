import admin from "firebase-admin";

let app;
if (!admin.apps.length) {
  app = admin.initializeApp();
}

export const db = admin.firestore(app);
export default admin;
