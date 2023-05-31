import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const API_UNIQUE_KEY = "super-heroes";

function SuperheroesRQ() {
  const onSuccess = (data) => {
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  const { isLoading, data, isError, error, refetch } = useQuery(
    API_UNIQUE_KEY,
    () => {
      return axios.get("http://localhost:4000/superheroes");
    },
    {
      //Disable useQuery to manually fetch data
      enabled: false,
      onSuccess,
      onError,
    }
  );
  useEffect(() => {
    return () => {
      console.log("component unmounted");
    };
  }, []);
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <button onClick={refetch}>Fetch Data</button>
      {data?.data.map((row) => (
        <p key={row.id}>{row.name}</p>
      ))}
    </div>
  );
}

export default SuperheroesRQ;
