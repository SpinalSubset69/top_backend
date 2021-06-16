import React from 'react';
import { useState } from 'react';
import { hot } from 'react-hot-loader';
import upArrow from '../static/up-button.png';

const UpButton = () => {
    let toUp = document.getElementsByClassName
    return (
        <div className="up-button"><img src={upArrow}/></div>
    );
}

export default hot(module)(UpButton);