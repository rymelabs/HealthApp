import { useState } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "@/lib/firebase";

import useDebouncedSearch from "../../hooks/useDebouncedLog";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const logSearch = httpsCallable(functions, "logSearch");

  async function handleSearch(term) {
    if (!term.trim() || term.length < 3) return;
  }
}
