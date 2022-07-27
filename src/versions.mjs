#!/usr/bin/env node

import {pick} from 'lodash-es';

console.log(
  pick(process.versions, ['node', 'v8', 'unicode'])
);