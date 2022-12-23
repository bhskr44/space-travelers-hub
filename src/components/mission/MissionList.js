import React from 'react';
import Mission from './Mission';

const MissionList = ({ missions }) => (
  <div className="rocket-list">
    <table>
      <tr>
        <th>
          <h3>Mission</h3>
        </th>
        <th>
          <h3>Description</h3>
        </th>
        <th>
          <h3>Status</h3>
        </th>
        <th>
          <h3>&nbsp;</h3>
        </th>
      </tr>
      {missions.map((mission) => (
        <Mission mission={mission} key={mission.mission_id} />
      ))}
    </table>
  </div>
);

export default MissionList;
