import React from 'react'
import { baseImgUrl } from '../constants';

const ActorCard = ({actor}) => {
    console.log(actor);
  return (
    <div className='line-clamp-1 w-[160px]'>
      <div>
        <img className='h-[175px]' src={baseImgUrl + actor.profile_path} alt={actor.name} />
        <h2>{actor.original_name}</h2>
        <h2 className='line-clamp-1'>{actor.character}</h2>
      </div>
    </div>
  )
}

export default ActorCard
