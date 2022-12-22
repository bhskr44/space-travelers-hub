import React from 'react';

const Rocket = ({ rocket }) => (
  <div className="rocket-div">
    <div className="img-div">
      <img className="rocket-img" src={rocket.flickr_images[0]} alt="Rocket" />
    </div>
    <div className="rocket-details">
      <h2>{rocket.rocket_name}</h2>
      <p>{rocket.description}</p>
      <button type="button" className="reserve-btn">Reserve Rocket</button>
    </div>
  </div>
);

export default Rocket;
