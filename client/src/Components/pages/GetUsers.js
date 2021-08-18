import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "/Users/User/Downloads/GraphQL-ApolloClient-Template-main/client/src/GraphQL/Queries";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      {/* {" "}
      {users.map((val) => {
        return <h1> {val.firstName}</h1>;
      })} */}
    </div>
  );
}

export default GetUsers;
