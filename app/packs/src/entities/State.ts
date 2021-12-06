import { Channel } from './Channel';
import { DataPoint } from './DataPoint';
import { Device } from './Device';

export interface State {
  channels: Record<number, Channel>;
  dataPoints: Record<number, DataPoint>;
  devices: Record<number, Device>;
}
