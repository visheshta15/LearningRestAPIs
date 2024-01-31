import React from 'react'

import ReqResService from './method/reqres/ReqResService'
import JsonServerService from './method/jsonServer/JsonServerService'

function App() {
  return (
    <div>
      <h1>RestFullApi</h1>
      {/* <ReqResService /> */}
      <JsonServerService />
    </div>
  )
}

export default App