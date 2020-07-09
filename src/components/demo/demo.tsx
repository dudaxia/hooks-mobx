import React, { 
  useState, 
  useEffect, 
  useContext, 
  useReducer, 
  useMemo, 
  useCallback 
} from 'react'
import { inject, observer } from 'mobx-react';
import { useStores } from '../../stores'

const Toolbar = observer(() => {
  const { test } = useStores()
  return (
    <div>
      <div style={{width: '500px',height: '40px',fontSize: '32px',}} 
        onClick={() => {test.setIsTest();}}
      >更改theme</div>
      <div>isTest: {test.isTest ? 'true' : 'false'}</div>
    </div>
  )
})

const TestComp = (props) => {
  let [count, setCount] = useState(0)
  useEffect(() => { 
    let I = setInterval(() => {
      console.log(count)
      setCount(count => count+1)
    }, 1000)
    return () => {
      clearInterval(I)
    }
  }, [])
  return <div>
    Hello {props.name} -- count: {count}
    <div onClick={()=>{ setCount( count => count + 1 ) }}> Click me</div>
    <Toolbar />
  </div>
}

export default TestComp