import { useEffect, useState } from "react"

const useApi = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const fetchApi = async () => {
      try{
    const response = await fetch(url);
    const res = await response.json();
    console.log("RES: " + res);
    setData(res);
    setLoading(false);
      } catch(e){
        setLoading(false);
      }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data }
};

export default useApi;