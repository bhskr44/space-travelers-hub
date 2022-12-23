import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, cancelMission } from '../../redux/missions/missions';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const handleCancelMission = (id) => {
    dispatch(cancelMission(id));
  };

  return (
    // <div>
    <tr>
      <td>
        <h3>{mission.mission_name}</h3>
      </td>
      <td>{mission.description}</td>
      <td>
        {mission.reserved ? (
          <button type="button" className="active-member">
            Active Member
          </button>
        ) : (
          <button type="button" className="not-member">
            NOT A MEMBER
          </button>
        )}
      </td>
      <td>
        {mission.reserved ? (
          <button
            type="button"
            className="leave-mission"
            onClick={() => {
              handleCancelMission(mission.mission_id);
            }}
          >
            leave Mission
          </button>
        ) : (
          <button
            type="button"
            className="join-mission"
            onClick={() => {
              handleJoinMission(mission.mission_id);
            }}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
    // </div>
  );
};

export default Mission;
