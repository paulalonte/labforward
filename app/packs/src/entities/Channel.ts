import { Resource } from './Resource';

export interface Channel extends Resource {
  deviceId: number;
  name: string;
}
