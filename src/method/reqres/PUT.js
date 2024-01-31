import axios from 'axios'
import React from 'react'

const fetchPutApiData = async (url, inputData) => {
    let res = await fetch(url, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputData)
    })

    let data = await res.json()
    console.log('fetch put ', res, data)
}
const axiosPutApiDataMethod1 = async (url, inputData) => {
    let res = await axios.put(
        url,
        inputData,
        { 
            headers: { "Content-Type": "application/json" }
        }
    
    )
    console.log('axios put ', res)
}
const axiosPutApiDataMethod2 = async (url, inputData) => {
    let res = await axios({
        method: 'PUT',
        url: url,
        data: inputData,
        headers: { "Content-Type": "application/json" }
    })
    console.log('axios put ', res)
}

function PUT() {
    let data1 = {
        name: "Jane Doe",
        job: "Designer"
      }
    // fetchPutApiData('https://reqres.in/api/users/2', data1)
    // axiosPutApiDataMethod1('https://reqres.in/api/users/2', data1)
    axiosPutApiDataMethod2('https://reqres.in/api/users/2', data1)

  return (
    <h3>PUT</h3>
  )
}

export default PUT