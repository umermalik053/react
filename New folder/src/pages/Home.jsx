import React from 'react'
import  {projectData} from '../utils/constant/ProjectData'
import Card from '../components/common/Card/card'


const Home = () => {
   
  return (
    <div>
        {
            projectData.map((item,index)=>{
                return (<Card key={index} data={item}/>)
            })
        }
      
    </div>
  )
}

export default Home
