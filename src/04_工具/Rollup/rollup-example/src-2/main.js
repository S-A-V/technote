/* eslint-disable no-console */

import('./_').then(({ groupBy }) => {
  console.log(groupBy(
    [
      { type: 'number', value: 4 },
      { type: 'string', value: 'name' },
      { type: 'number', value: 8 },
    ],
    'type',
  ));
});
