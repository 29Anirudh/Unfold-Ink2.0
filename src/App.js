import Nav from "./ui/NavBar";
import Home from "./ui/Home";
import Politics from "./ui/Politics";
import Economics from "./ui/Economics";
import Cultural from "./ui/Cultural";
import Movies from "./ui/Movies";
import Cricket from "./ui/Cricket";
const App=()=> {
  return (
   <>
   <div>
    <Nav/>
    <Home/>
    <Politics/>
    <Movies/>
    <Cultural/>
    <Economics/>
    <Cricket/>
   </div>
   </>
  );
}

export default App;
