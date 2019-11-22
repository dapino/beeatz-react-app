import React from 'react';
import Oscilloscope from 'oscilloscope';


const Waves = (audioElement) => {
  const audioContext = new window.AudioContext();
  const source = audioContext.createMediaElementSource(audioElement);
  const scope = new Oscilloscope(source);
  scope.animate(canvas.getContext("2d"))
}

export default Waves;
