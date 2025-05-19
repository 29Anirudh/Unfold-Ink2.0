import React from "react";
import Nav from "./ui/NavBar";
import Home from "./ui/Home";
import Politics from "./ui/Politics";
import Economics from "./ui/Economics";
import Cultural from "./ui/Cultural";
import Movies from "./ui/Movies";
import Cricket from "./ui/Cricket";
// import SignInPage from "./ui/sign_in";

function App() {
  return (
    <>
      
      <Nav />
      <Home />
      <Politics />
      <Movies />
      <Cultural />
      <Economics />
      <Cricket />
     
      {/* <div>
        <SignInPage />
      </div> */}
    </>
  );
}

export default App;
