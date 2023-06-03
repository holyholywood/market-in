import { useState, useEffect } from "react";
import FetchAPI, { API_RESPONSE_TYPE } from "../plugins/APIClient";
const Fetch = new FetchAPI();

/**
 * Fetch API Hooks
 * @param url
 * @param id
 * @returns [data, isLoading, errors]
 */
const useFetch = (url: string, id?: number) => {
  const [data, setData] = useState<Response | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    Fetch.get(url)
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrors(err);
        setIsLoading(false);
      });

    setIsLoading(false);
  }, [url]);
  return [data, isLoading, errors];
};

export default useFetch;
