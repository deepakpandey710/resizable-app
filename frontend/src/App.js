import Sizeable from "./Component/Sizeable";
import { DIRECTIONS } from "./utils/constants";

function App() {
  return (
    <div className="App">
      <Sizeable content={'hello'} resizeHandles={DIRECTIONS}/>
    </div>
  );
}


export default App;
