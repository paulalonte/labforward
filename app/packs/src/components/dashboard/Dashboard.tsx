import React, { FC, Fragment } from 'react';
import _ from 'lodash';

import Card from 'components/card/Card';
import { Channel } from 'entities/Channel';
import { DataPoint } from 'entities/DataPoint';
import { Device } from 'entities/Device';
import LfLineChart from 'components/chart/LfLineChart';
import i18next from 'i18next';

type Props = {
  devices: Record<string, Device>;
  channels: Record<string, Channel>;
  dataPoints: Record<string, DataPoint>;
};

const Dashboard: FC<Props> = ({ devices, channels, dataPoints }) => {
  const dashboardName = i18next.t('dashboardLabel');
  // console.log('re render ', dataPoints);
  return (
    <Fragment>
      <div className="dashboard">
        <h2 className="dashboard-heading">{dashboardName}</h2>
        <hr className="splitter" />
        <section className="legend">
          <h4>Legend</h4>
          <p>X Axis: Date Created</p>
          <p>Y Axis: Value</p>
        </section>
        <section className="card-container">
          {_.flatMap(devices, (device) =>
            _.map(_.filter(channels, { deviceId: device.id }), (channel) => (
              <LfLineChart
                device={device}
                channel={channel}
                dataPoints={dataPoints}
                key={`${device.id}${channel.id}`}
              ></LfLineChart>
            ))
          )}
        </section>
        <section>
          <div className="dashboard-card-layout">
            <h4>{i18next.t('channels')}</h4>
            <section className="card-container">
              {Object.keys(channels).map((value) => (
                <Card
                  key={channels[value].id}
                  name={channels[value].name}
                  createdAt={channels[value].createdAt}
                  updatedAt={channels[value].updatedAt}
                ></Card>
              ))}
            </section>
          </div>
          <div className="dashboard-card-layout">
            <h4>{i18next.t('devices')}</h4>
            <section className="card-container">
              {Object.keys(devices).map((value) => (
                <Card
                  key={devices[value].id}
                  name={devices[value].name}
                  createdAt={devices[value].createdAt}
                  updatedAt={devices[value].updatedAt}
                ></Card>
              ))}
            </section>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default React.memo(Dashboard);
