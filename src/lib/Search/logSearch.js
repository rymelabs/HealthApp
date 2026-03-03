import { functions } from "../firebase";
import { httpsCallable } from "firebase/functions";

const logSearch = ({ term, resultsCount = 0 }) => {
  if (!term || term.trim().length < 3) return;

  const logSearchFn = httpsCallable(functions, "logSearch");
  logSearchFn({ term, resultsCount })
    .then((result) => {
      if (result) {
        console.log("Search logged: successfully: ", term);
      }
    })
    .catch((err) => console.error("Logging search failed: ", err));
};

export default logSearch;
