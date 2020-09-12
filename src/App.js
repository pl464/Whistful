import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import Wad from 'web-audio-daw';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
//import Clock from './Clock';

function App() {

  let request_id;

  let voice = new Wad({source : 'mic' });
  let tuner = new Wad.Poly();

  let logPitch = function(){
        if (typeof tuner.noteName !== "undefined") {
            document.getElementById("pitch-display").innerHTML = tuner.noteName;
        }
        console.log(tuner.pitch, tuner.noteName);
        request_id = requestAnimationFrame(logPitch);
  };

  function playvoice() {
    tuner.setVolume(0); // If you're not using headphones, you can eliminate microphone feedback by muting the output from the tuner.
    tuner.add(voice);
    voice.play(); // You must give your browser permission to access your microphone before calling play().
    tuner.updatePitch(); // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in <code>tuner.pitch</code> and <code>tuner.noteName</code>.
      
    requestAnimationFrame(logPitch);
  }

  function stopvoice() {
    document.getElementById("pitch-display").innerHTML = "";
    voice.stop();
    tuner.noteName = null;
    tuner.stopUpdatingPitch();
    cancelAnimationFrame(request_id);
  }

  return (
      <div>
          <div id="pitch-display"></div>
          <h3>Have fun whistling!</h3>
          <Button variant="outline-secondary" className="mx-2" onClick={playvoice}>
            Start recording
          </Button>
          <Button variant="outline-secondary" className="mx-2" onClick={stopvoice}>
            Stop recording
          </Button>
      </div>
  );

}

export default App;
