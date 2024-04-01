import "./App.css";

import { CommonButton } from "@repo/ui/src/button";

function App() {
  return (
    <>
      <div>
        Hello
        <CommonButton
          children="Webapp button from repo ui"
          onClick={() => {
            alert("you are inside webapp");
          }}
        />
      </div>
    </>
  );
}

export default App;
