import React from 'react'
import axios from 'axios'


const fetchPostApiData = async (url, inputData) => {
    let res = await fetch(
        url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(inputData)
        },
    )
    let data = await res.json()
    console.log('fetch', data, res)
}
const axiosPostApiDataMethod1 = async (url, inputData) => {
    let res = await axios({
      method: "POST",
      url: url,
      headers: {
        'Content-Type': 'application/json'
      },
      data: inputData
    })
    console.log('axios', res)
}

const axiosPostApiDataMethod2 = async (url, inputData) => {
    let res = await axios.post(
      url, 
      inputData,
      {
          headers: { 'Content-Type': 'application/json' },
      }
    )
    console.log(res)
}


function POST() {
  // 1
    let data1={
        name: 'visheshta',
        job: 'Frontend Developer'
    }
    // fetchPostApiData('https://reqres.in/api/users', data1)
  // 2
    let data2={
        "email": 'visheshta@gmail.com',
        "password": '12345678'
    }
    let data3 = {
      "email": "eve.holt@reqres.in",
      "password": "pistol"
    }
    let data31 = {
      email: "eve.holt@reqres.in",
      password: "pistol"
    }
    let data4 = {
      "email": "sydney@fife"
    }
    fetchPostApiData('https://reqres.in/api/register', data4)

    // axiosPostApiDataMethod1('https://reqres.in/api/users', data1)
    // axiosPostApiDataMethod2('https://reqres.in/api/users', data1)
    axiosPostApiDataMethod1('https://reqres.in/api/register', data4)
    axiosPostApiDataMethod2('https://reqres.in/api/register', data4)

  return (
    <h3>POST</h3>
  )
}

export default POST