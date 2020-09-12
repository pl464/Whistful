import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import Wad from 'web-audio-daw';
import Button from 'react-bootstrap/Button';

function Test() {

    let saw = new Wad({source : 'sawtooth'});

    function playsaw() {
        saw.play();
    }

    function stopsaw() {
        saw.stop();
    }

    return (
        <div>
            <h3>Click the buttons below to test your sound</h3>
            <Button variant="outline-secondary" className="mx-2" onClick={playsaw}>
                Play test
            </Button>
            <Button variant="outline-secondary" className="mx-2" onClick={stopsaw}>
                Stop test
            </Button>
        </div>
    );

}

export default Test;
