import React, { FC, Fragment } from 'react';
import _ from 'lodash';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

import { Channel } from 'entities/Channel';
import { DataPoint } from 'entities/DataPoint';
import { Device } from 'entities/Device';
import i18next from 'i18next';

type Props = {
  device: Record<string, Device>;
  channel: Record<string, Channel>;
  dataPoints: Record<string, DataPoint>;
};

const LfLineChart: FC<Props> = ({ device, channel, dataPoints }) => {
  return (
    <Fragment>
      <div>
        <section className="chart-label">
          <p>{i18next.t('device')}: {device.name}</p>
          <p>{i18next.t('channel')}: {channel.name}</p>
        </section>
        <LineChart
          key={`device-${device.id}-channel-${channel.id}`}
          data={_.values(_.filter(dataPoints, { channelId: channel.id }))}
          height={200}
          width={250}
        >
          <Line dataKey="value" />
          <CartesianGrid />
          <XAxis dataKey="createdAt" />
          <YAxis />
        </LineChart>
      </div>
    </Fragment>
  );
};

export default React.memo(LfLineChart);
