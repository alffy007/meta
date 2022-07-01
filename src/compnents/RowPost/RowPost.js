import React from 'react'
import './RowPost.css'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios.'
import YouTube from 'react-youtube'
import  { useEffect, useState } from 'react'
function RowPost(props) {
    const [Movie, setMovie] = useState([])
    const [Idea, setIdea] = useState('')
    useEffect(() => {
      axios.get(props.genre).then((response)=>{
     console.log(response.data.results)
     setMovie(response.data.results)
})

}, [])
const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay:1 ,
    },
  };
  const handeleMovie=(id)=>{
console.log(id)
axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
if(Response.data.results.length!==0){
setIdea(Response.data.results[0])
}
else{
    console.log('array 0')
}
})
  }
  
    return (    
        <div className='row'>
          
            <h2>{props.title}</h2>
            <div className='posters'>
            {Movie.map((obj)=>
            <img onClick={()=>handeleMovie(obj.id)} className='poster' alt='poster' src={imageUrl+obj.poster_path}/>
            )}
                
            </div>
       {    Idea && <YouTube opts={opts} videoId={Idea.key} />}
       
        </div>
      
    )
}

export default RowPost