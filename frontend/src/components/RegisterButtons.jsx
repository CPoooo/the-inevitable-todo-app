import React, { useState } from "react";

function RegisterButtons() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
    // You can handle the form submission here, e.g., send the email to an API
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
