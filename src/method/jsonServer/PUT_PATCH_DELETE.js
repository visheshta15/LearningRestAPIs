import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { fetchApiData } from './GET'


const makeApiRequest = async (method ,url, inputdata, id) => 
{
    try {
        console.log(inputdata)
        let inputId = ''
        if(id){
            inputId = id
        }
        
        const res = await axios({
            method: method,
            url: `${url}/${inputId}`,
            data: inputdata
        })
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

function PUT_PATCH_DELETE() {
    const [resData, setResData] = useState([])

    const [id, setId] = useState('')
    const [skill, setSkill] = useState('')
    const [user, setUser] = useState('')
    const [mgs, setMgs] = useState('')



    useEffect(()=>{
          (async function(){
            const res =  await fetchApiData('languages')
            setResData(res)           
          })()
    }, [])  
    
    console.log(resData)
    
    const handleClick = (e) => {
        e.preventDefault()
        const d = new Date();
        const createdAt =  d.toString().slice(0,24)
        let flag = false
        if(skill && user && id){
            resData.map((ele)=> {
                if(ele.id === id){
                    flag = true
                }
            })
            flag ? makeApiRequest(
                // 'PUT',
                'PATCH',
                'http://localhost:3031/languages', 
                {
                    id,
                    skill,
                    user,
                    updatedAt: createdAt
                },
                id
            ) :
            makeApiRequest(
                'POST',
                'http://localhost:3031/languages', 
                {
                    id: (resData.length + 1).toString(),
                    skill,
                    user,
                    createdAt
                }
            )
            setSkill('')
            setUser('')
        }
    }
    const handleDelete = (e) => {
        e.preventDefault()

        let flag = false
        if(id){
            resData.map((ele)=> {
                if(ele.id === id){
                    flag = true
                }
            })
            flag && makeApiRequest(
                'DELETE',
                'http://localhost:3031/languages', 
                {},
                id
            ) 
            setId('')
            setMgs('Record deleted successfully')
        }
    }

  return (
    <>
        <h3>PUT</h3>
        <div>
            <form>
                <input type="text" onChange={(e)=> setId(e.target.value) } value={id} placeholder='id'/> <br />
                <input type="text" onChange={(e)=> setSkill(e.target.value) } value={skill} placeholder='skill'/> <br />
                <input type="text" onChange={(e)=> setUser(e.target.value)} value={user} placeholder='user'/> <br />
                <button onClick={handleClick}>PUT</button>
            </form>
            <br />
            <form>
                <input type="text" onChange={(e)=> setId(e.target.value) } value={id} placeholder='id'/> <br />
                <button onClick={handleDelete}>Delete</button>
                {mgs && <h6>{mgs}</h6>}
            </form>
        </div>
        <br />
    </>
  )
}

export default PUT_PATCH_DELETE