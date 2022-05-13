import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(url)
      .then((x) => x.json())
      .then((y) => {
        setData(y);
        console.log(y);
      });
  }, [url]);
  return [data];
};
