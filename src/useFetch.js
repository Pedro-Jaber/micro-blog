const { useEffect, useState } = require("react");

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("fetch data");

    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        console.log("res:", res);
        if (!res.ok) {
          throw Error(
            "could not fetch the data for that resource: " + res.status
          );
        }
        return res.json();
      })
      .then((_data) => {
        setData(_data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
          return;
        }
        console.log("ERROR:", err.message);
        setError(err.message);
        setIsPending(false);
      })
      .finally(() => {});

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
