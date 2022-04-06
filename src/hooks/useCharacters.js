import { useState, useEffect } from "react";

const useCharacters = (url) => {
  const [character, setCharacters] = useState(null); // null || []
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, [url]);
  return character;
};

export default useCharacters;
