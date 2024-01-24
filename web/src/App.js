import { useState } from 'react';

import './styles/App.css';
import './styles/reset.css';

import {SideMenu} from './components/SideMenu';

function App() {

  const [input, setInput] = useState("")
  const [chatlog, setChatLog] = useState([{
    user: "gpt",
    message: "Como posso te ajudar hoje?"
  }])

  return (
    <div className="App">
      <SideMenu />
      <h1>Working</h1>
    </div>
  );
}

export default App;
