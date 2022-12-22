import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RockList from './RocketList';
import getRockets from '../../redux/api';

const RocketPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div>
      <RockList rockets={rockets} />
    </div>
  );
};

export default RocketPage;
