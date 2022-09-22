import { useState } from 'react';
import './App.css';
import VideoCall from './VideoCall';


function App() {
  const [inCall, setInCall] = useState(false);
  const [channelName, setChannelName] = useState("");
  return (
    <div className="App">
      <VideoCall />
    </div>
  );
}

export default App;
