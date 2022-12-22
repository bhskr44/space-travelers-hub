import React from 'react';
import Rocket from './Rocket';

const RocketList = ({ rockets }) => (
  <div className="rocket-list">
    {rockets.map((rocket) => (
      <Rocket rocket={rocket} key={rocket.id} />
    ))}
  </div>
);

export default RocketList;
