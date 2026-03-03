import admin from "firebase-admin";
import { onCall, HttpsError } from "firebase-functions/v2/https";

import { db } from "../firebase.js";

const logSearch = onCall(async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "Login Required");

  try {
    const { term, resultsCount = null } = request.data;

    if (!term || term.length < 3) {
      throw new HttpsError("invalid-argument", "Invalid search term");
    }

    const normalizedTerm = term.trim().toLowerCase().replace(/\s+/g, "-");

    const analyticsRef = db.collection("search_analytics").doc(normalizedTerm);

    await analyticsRef.set(
      {
        term: normalizedTerm,
        count: admin.firestore.FieldValue.increment(1),
        lastSearchAt: admin.firestore.FieldValue.serverTimestamp(),
        resultsCount,
      },
      { merge: true },
    );

    await db.collection("search_logs").add({
      term,
      normalizedTerm,
      resultsCount,
      userId: request.auth?.uid || null,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { success: true };
  } catch (error) {
    console.error("Log Search Error:", error.response?.data || error.message);
    throw new HttpsError("internal", "Could not log search");
  }
});

export default logSearch;
