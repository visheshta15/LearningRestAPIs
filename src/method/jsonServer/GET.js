import React from 'react'
import axios from 'axios'

const getApiData = async (url) => {
    try {
       let res = await axios.get(url)
       console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}
export const fetchApiData = async (param) => {
    try {
       let res = await axios.get(`http://localhost:3031/${param}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const getProfArr = async () => {
    try {
       let res = await axios.get('http://localhost:3031/professions')
        return res.data
    } catch (error) {
        console.log(error)
    }
}

function GET() {
    getApiData('http://localhost:3031/posts')
    getApiData('http://localhost:3031/languages')
    getApiData('http://localhost:3031/professions')
  return (
    <h3>GET</h3>
  )
}

export default GET