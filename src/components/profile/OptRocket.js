import React from 'react';
import { useSelector } from 'react-redux';

const OptRocket = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const rocketList = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="dislay-table">
      <h2>My Rockets</h2>
      {rocketList.length ? (
        <div className="profile-rockets-div">
          {rocketList.map((rocket) => (
            <p className="profile-rockets" key={rocket.id}>
              {rocket.rocket_name}
            </p>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default OptRocket;
