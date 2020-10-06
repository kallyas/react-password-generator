import React, { useState, useEffect } from "react";

export default function PasswordGenerator() {
  const API =
    "https://cors-anywhere.herokuapp.com/https://pass-gen-1.herokuapp.com/api/passwords";
  const [password, setPassword] = useState([]);
  // Fetch passwords after first mount
  //   componentDidMount() {
  //     this.getPasswords();
  //   }
  const getPasswords = useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((password) => setPassword(password));
  }, []);

  return (
    <div>
      {password.length ? (
        <div>
          <h1>10 Passwords.</h1>
          <ul className="passwords">
            {password.map((pass, index) => (
              <li key={index}>{pass}</li>
            ))}
          </ul>
          <button className="more" onClick={getPasswords}>
            Get More
          </button>
        </div>
      ) : (
        // Render a helpful message otherwise
        <div>
          <h1>No passwords click to generate:(</h1>
          <button className="more" onClick={getPasswords}>
            Try Again?
          </button>
        </div>
      )}
    </div>
  );
}
