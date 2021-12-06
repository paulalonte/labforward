import React, { FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _, { isEqual } from 'lodash';

import { apiFetchRequested } from 'store/actions';
import Dashboard from 'components/dashboard/Dashboard';
import { State } from 'entities/State';
import { i18nInit } from 'i18n';

const Home: FC = () => {
  const brandName = 'Labforward';

  const dispatch = useDispatch();
  const channels = useSelector((state: State) => state.channels, isEqual);
  const dataPoints = useSelector((state: State) => state.dataPoints, isEqual);
  const devices = useSelector((state: State) => state.devices, isEqual);

  useEffect(() => {
    //initialize of language translation (de or en)
    i18nInit('en');
  }, [])

  // add dependency if in case channels changed dispatch and get new data
  useEffect(() => {
    dispatch(apiFetchRequested('channels'));
  }, [channels]);

  // add dependency if in case devices changed dispatch and get new data
  useEffect(() => {
    dispatch(apiFetchRequested('devices'));
  }, [devices]);

  /*
  *
  * did not use this request since there is already a subscription created in downstream_channel which updates the dataPoints object
  * if needed request params should be data_points not dataPoints also
  *
  useEffect(() => {
    dispatch(apiFetchRequested('data_points'));
  }, []);
  */

  return (
    <Fragment>
      <header>
        <h1>{brandName}</h1>
      </header>
      <Dashboard
        devices={devices}
        channels={channels}
        dataPoints={dataPoints}
      ></Dashboard>
    </Fragment>
  );
};

export default React.memo(Home);
