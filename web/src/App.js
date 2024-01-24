import { useState } from 'react';

import './styles/App.css';
import './styles/reset.css';

import { SideMenu } from './components/SideMenu';
import { ChatMessage } from './components/ChatMessage';

function App() {

  const [input, setInput] = useState("")
  const [chatlog, setChatLog] = useState([{
    user: "gpt",
    message: "Como posso te ajudar hoje?"
  }])

  return (
    <div className="App">
      <SideMenu />
      <section className='chatbox'>
        <div className='chat-log'>
          {chatlog.map((message, index)=>(
            <ChatMessage key={index} message={message}/>
          ))}
        </div>
        
      </section>
    </div>
  );
}

export default App;
