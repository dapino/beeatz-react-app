import React from 'react';
import Audio from '../atoms/audio';

const audioUrl = "https://s3-us-west-1.amazonaws.com/spliceblob.splice.com/sample_pack_demos/f5b0c0c8-0d87-4180-efe6-93727d0b0d6e12a04b5/demo.mp3";
const imgUrl = "https://splice-res.cloudinary.com/image/upload/f_auto,q_auto,w_auto/c_limit,w_450/v1474908505/dzaedogksqrmouq2laav.jpg";

const Track = () => (
  <div className="Track">
    <h3>Track Name</h3>
    <h4>Artist</h4>
    <img src={imgUrl} alt="" />
    <Audio audioUrl={audioUrl} />
  </div>
);

export default Track;
