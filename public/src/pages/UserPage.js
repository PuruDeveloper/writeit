import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  const { subdomain } = useParams();
  const [subDomain, setSubDomain] = useState("");
  const [text, setText] = useState("");
  useEffect(() => {
    // fetch(`/api/users/${subdomain}`).then;
  });
  return <div>{subdomain}</div>;
}

export default UserPage;
