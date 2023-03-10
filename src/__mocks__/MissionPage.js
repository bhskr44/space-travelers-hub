import React from 'react';
import MissionList from '../components/mission/MissionList';

const MissionPage = ({ missionsObj }) => (
  <div>
    <MissionList missions={missionsObj} />
  </div>
);

export default MissionPage;
