import React from 'react';
import Mission from './Mission';

const MissionList = ({ missions }) => (
  <div className="rocket-list">
    <table className="mission-table">
      <thead>
        <tr>
          <th className="td-name">
            <h3>Mission</h3>
          </th>
          <th className="td-description">
            <h3>Description</h3>
          </th>
          <th className="td-status">
            <h3>Status</h3>
          </th>
          <th className="td-button">
            <h3>&nbsp;</h3>
          </th>
        </tr>
      </thead>
      {missions.map((mission) => (
        <Mission mission={mission} key={mission.mission_id} />
      ))}
    </table>
  </div>
);

export default MissionList;
