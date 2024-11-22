import React, { useState } from "react";
import { Menu } from "./components/menu.js";
import { Card } from "./components/card.js";
import { Button } from "./components/button.js";
import "./styles/styles.css"; // Global styles

function App() {
  return (
    <div className="App">
      <Menu />
      <Card>
        <h1>Welcome to My App</h1>
        <Button onClick={() => alert("Button Clicked!")}>Click Me</Button>
      </Card>
    </div>
  );
}

export default App;
