import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import Wad from 'web-audio-daw';
import Button from 'react-bootstrap/Button';

function App() {

  let request_id;

  let saw = new Wad({source : 'sawtooth'});
  let voice = new Wad({source : 'mic' });
  let tuner = new Wad.Poly();

  let logPitch = function(){
    console.log(tuner.pitch, tuner.noteName);
    request_id = requestAnimationFrame(logPitch);
  };

  function playsaw() {
    saw.play();
  }

  function stopsaw() {
    saw.stop();
  }

  function playvoice() {
    tuner.setVolume(0); // If you're not using headphones, you can eliminate microphone feedback by muting the output from the tuner.
    tuner.add(voice);
    voice.play(); // You must give your browser permission to access your microphone before calling play().
    tuner.updatePitch(); // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in <code>tuner.pitch</code> and <code>tuner.noteName</code>.
    requestAnimationFrame(logPitch);
  }

  function stopvoice() {
    voice.stop();
    tuner.stopUpdatingPitch();
    cancelAnimationFrame(request_id);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="outline-secondary" className="my-2" onClick={playsaw}>
          Play test
        </Button>
        <Button variant="outline-secondary" className="my-2" onClick={stopsaw}>
          Stop test
        </Button>
        <Button variant="outline-secondary" className="my-2" onClick={playvoice}>
          Start recording
        </Button>
        <Button variant="outline-secondary" className="my-2" onClick={stopvoice}>
          Stop recording
        </Button>
      </header>
    </div>
  );
}

export default App;
