import React from 'react'
import './tag_sec.css'
import { tagsData } from '../../../assets/data/data'
const TagsSec = () => {
  return (
 <div className='mt-5'>
    <h4 className=''>People are also looking for</h4>
       <ul href='#' className='tag-container d-flex flex-wrap mt-3 text-decoration-none'>
     {tagsData.map((tag,key)=>(
         <li key={key} className=''><a href='#' key={key} className=' me-2 '>{tag}</a></li>
     ))}
    </ul>
 </div>
  )
}

export default TagsSec
