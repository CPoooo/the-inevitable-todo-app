import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function RegisterButtons() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signup', { state: { email } }); 
  };

  return (
    <div className="signUpContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Email address"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Get Started</button>
      </form>
    </div>
  );
}

export default RegisterButtons;
