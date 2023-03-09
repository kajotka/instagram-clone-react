import NavLeft from "./components/NavLeft";
import NavRight from "./components/NavRight";
import Avatars from "./components/Avatars";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="instagram">
      <NavLeft />
      <div className="center">
        <div className="app">
          <div className="main">
            <Avatars />
            <Posts />
          </div>
          <NavRight />
        </div>
      </div>
    </div>
  );
}

export default App;
