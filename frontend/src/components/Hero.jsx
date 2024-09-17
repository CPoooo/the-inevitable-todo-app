import RegisterButtons from "./RegisterButtons";

function Hero() {
  return (
    <div className="mainContainer">
      <div className="hero">
        <h1 className="heroTitle">OMG! Another Todo App?</h1>
        <h2 className="heroSubTitle">Anyways... New here? Get started below</h2>
        <p className="heroText">Returning members sign in up top</p>
        <RegisterButtons />
      </div>
    </div>
  );
}

export default Hero;
