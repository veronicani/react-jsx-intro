"use strict";

/** renders a div with instances of the other two components*/
function App() {
  return (
    <div>
      <Tweet username="bob" name="Bob Style"message="hey there"/>
      <Tweet username="george" name="George Style"message="hey there"/>
      <Tweet username="jane" name="Bob Style"message="hey there"/>
    </div>
  );
}

//TODO: 3 tweets