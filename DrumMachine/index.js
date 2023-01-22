const { useEffect, useState } = React
// import { useEffect } from 'react';

function App() {
    const [activeKey, setActiveKey] = useState('');
    const[volume,setVolume]=useState(1);
    useEffect(()=>{
        document.addEventListener('keydown', (event)=>{
          console.log(event.key)
          sound(event.key.toUpperCase());
        });
    }, [])


    const beats = [
    {
      keyCode: 81,
      id: "Q",
      key: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      id: "W",
      key: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      id: "E",
      key: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      id: "A",
      key: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      id: "S",
      key: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      id: "D",
      key: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      id: "Z",
      key: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      id: "X",
      key: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      id: "C",
      key: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  function sound(pressed){
    console.log(pressed)
    const audio = document.getElementById(pressed);
    console.log(audio)
    audio.volume = volume;
    audio.play();                 
    setActiveKey(pressed);
  }

  return (
    <div className="App text-center">
      <div className="drum-machine" id="drum-machine">
        <div id="display" className="display">{activeKey}</div>
        <div className="drum-pads">
          {beats.map((beat) => (
            <div 
                key = {beat.id}
                onClick={() => {
                sound(beat.id)
            }} className="drum-pad btn btn-dark" id={beat.key}>
              {beat.id}
              <audio
                className="clip"
                id={beat.id}
                src={beat.url}
              ></audio>
              
            </div>
          ))}
          <div className="vol">
            <h4 className="h4">Volume</h4>
            <input
            type="range"
            step="0.01"
            onChange={(event)=>{
              // console.log(event);
              setVolume(event.target.value);
            }}
            max="1"
            min="0"
            // value={volume}
            className="w-10"
            ></input>
          </div>
         
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("f"));
