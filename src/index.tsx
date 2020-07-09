import React from 'react'
import ReactDom from 'react-dom'

// mobx
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import stores from './stores'
// mobx 使用严格模式 -- 即 所有 store 的 state 必须通过 action 才能改变
configure({enforceActions: "always"});

import TestComp from './components/demo/demo'

ReactDom.render(
  <Provider  {...stores}>
    <TestComp name="dudaxia12" />
  </Provider>
, document.getElementById('app'))

