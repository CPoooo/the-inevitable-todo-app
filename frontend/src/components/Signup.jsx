import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 

function Signup() {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;
