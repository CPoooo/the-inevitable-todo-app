import { useState } from "react";

function Navbar() {

  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <div>
      <nav>
        <h2 className="navHeader">todoApp</h2>
        <button className="navButton">{isSignedIn ? "Log Out" : "Sign In"}</button>
      </nav>
    </div>
  );
}

export default Navbar;
