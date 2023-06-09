import { useState } from 'react'
import './App.css'
import { InlineStyle } from "./components/InlineStyle.jsx";
import { CssModules } from "./components/CssModules.jsx";
import {StyledJsx} from "./components/StyledJsx.jsx";
import {StyledComponents} from "./components/StyledComponents.jsx";
import {Emotion} from "./components/Emotion.jsx";

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}

export default App