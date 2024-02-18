import { useEffect, useState } from "react";

function useFetch(url: string) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((ex) => console.log("Something wrong:", ex));
  }, []);

  return [data];
}

export default useFetch;
