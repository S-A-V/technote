/* eslint-disable no-console */
import { version } from '../package.json';
import { groupBy } from './_';
import cjs from './cjs-module';

export default () => {
  console.log(version);
  console.log(groupBy(
    [
      { type: 'number', value: 4 },
      { type: 'string', value: 'name' },
      { type: 'number', value: 8 },
    ],
    'type',
  ));
  console.log('cjs: ', cjs.type);
};
