import React from 'react'
import axios from 'axios'

const fetchGetApiData = async (url) => {
try {
    let res = await fetch(url)
    let data = await res.json()
    // console.log(res, data)
    console.log('fetch', data)
  } catch (error) {
    console.log('fetch error', error) // not comming to this line 
  }
}

const axiosGetApiData = async (url) => {
  try {
    let data = await axios.get(url)
    console.log('axios', data)
  } catch (error) {
    console.log('axios error', error)
  }
}

const fetchGetApiData2 = (url) => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

function GET() {
    // fetchGetApiData('https://reqres.in/api/users') //List of users
    // fetchGetApiData('https://reqres.in/api/users?per_page=3')
    // fetchGetApiData('https://reqres.in/api/users?per_page=3&page=2')
    // fetchGetApiData('https://reqres.in/api/users/2') //single user
    // fetchGetApiData('https://reqres.in/api/users/27') //single user not found
    // fetchGetApiData('https://reqres.in/api/unknown') //single resource
    // fetchGetApiData('https://reqres.in/api/unknown/23') //single resource not found
    fetchGetApiData('https://reqres.in/api/users?delay=3') //delayed response

    axiosGetApiData('https://reqres.in/api/users?delay=3') 

    // fetchGetApiData2('https://reqres.in/api/userasfdsd')
  return (
    <h3>GET</h3>
  )
}

export default GET