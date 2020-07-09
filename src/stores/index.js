import React from 'react'
import { MobXProviderContext } from 'mobx-react'

import test from './test.js';

const stores  = {
  test,
}

export default stores;

export function useStores() {
  return React.useContext(MobXProviderContext)
}