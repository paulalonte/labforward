import { Resource } from './Resource';

export interface DataPoint extends Resource {
  channelId: number;
  value: number;
}
