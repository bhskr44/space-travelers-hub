import React from 'react';
import { useSelector } from 'react-redux';

const OptMission = () => {
  const missions = useSelector((state) => state.missions.missions);
  const missionList = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="dislay-table">
      <h2>My Missions</h2>
      {missionList.length ? (
        <div className="profile-rockets-div">
          {missionList.map((mission) => (
            <p className="profile-rockets" key={mission.mission_id}>
              {mission.mission_name}
            </p>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default OptMission;
