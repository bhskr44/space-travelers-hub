import React from 'react';
import { useDispatch } from 'react-redux';
import { bookReservation, cancelReservation } from '../../redux/rockets/rockets';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleReservation = (id) => {
    dispatch(bookReservation(id));
  };

  const handleCancelReservation = (id) => {
    dispatch(cancelReservation(id));
  };

  const reservedText = 'Reserved';

  return (
    <div className="rocket-div">
      <div className="img-div">
        <img className="rocket-img" src={rocket.flickr_images[0]} alt="Rocket" />
      </div>
      <div className="rocket-details">
        <h2>{rocket.rocket_name}</h2>
        <p>
          { rocket.reserved ? <span className="reserved-tag">{reservedText}</span> : ''}
          {rocket.description}
        </p>
        {rocket.reserved
          ? <button type="button" className="cancel-reservation" onClick={() => { handleCancelReservation(rocket.id); }}>Cancel Reservation</button>
          : <button type="button" className="reserve-btn" onClick={() => { handleReservation(rocket.id); }}>Reserve Rocket</button>}
      </div>
    </div>
  );
};

export default Rocket;
