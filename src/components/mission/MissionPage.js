import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionList from './MissionList';
import { getMissions } from '../../redux/api';

const MissionPage = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missions.length]);

  return (
    <div>
      <MissionList missions={missions} />
    </div>
  );
};

export default MissionPage;
