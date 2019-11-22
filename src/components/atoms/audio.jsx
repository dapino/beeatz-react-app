import React from 'react';
import styled from 'styled-components';

const StyledAudio = styled.audio`
  
`;

const Audio = ({ audioUrl }) => (
  <StyledAudio controls>
    <source src={audioUrl} type="audio/ogg"/>
    Your browser does not support the audio element.
  </StyledAudio>

);

export default Audio;
