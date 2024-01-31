import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { fetchApiData, getProfArr } from './GET'


const postApiData = async (url, inputdata) => 
{
    try {
        console.log(inputdata)
        const res = await axios({
            method: 'POST',
            url: url,
            data: inputdata
        })
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

function POST() {
    const [postId, setPostId] = useState()
    const [name, setName] = useState('')
    const [content, setContent] = useState('')

    const [work, setWork] = useState('')
    const [profArr, setProfArr] = useState()

    useEffect(()=>{
          (async function(){

            const res =  await fetchApiData('posts')
            setPostId(res.length)
            
            setProfArr(await getProfArr())
          })()
    }, [])  
    // console.log(profArr)  
    
    const handleClick = (e) => {
        e.preventDefault()
        const d = new Date();
        const createdAt =  d.toString().slice(0,25)
        if(name && content){
            postApiData('http://localhost:3031/posts', {
                id: (postId + 1).toString(),
                name: name,
                content : content,
                createdAt,
                updatedAt: ''
            })
            setName('')
            setContent('')
        }

        if(work){
            postApiData('http://localhost:3031/professions', {
                work,
                createdAt,
                updatedAt: ''
            })
            setWork("")
        }
    }
  return (
    <>
        <h3>POST</h3>
        <div>
            <form>
                <input type="text" onChange={(e)=> setName(e.target.value) } value={name} placeholder='name'/> <br />
                <input type="text" onChange={(e)=> setContent(e.target.value)} value={content} placeholder='content'/> <br />
                <button onClick={handleClick}>POST</button>
            </form>
        </div>
        <br />
        <div>
            <form>
                <input type="text" onChange={(e)=> setWork(e.target.value) } value={work} placeholder='profession'/> <br />
                <button onClick={handleClick}>POST</button>
            </form>
        </div>


    </>
  )
}

export default POST