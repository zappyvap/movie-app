import React from 'react'

interface Props{
    title : string;
    overview : string;
    release_date : string;
    poster_path : string;
    vote_average : number;
}
const SelectedMovie : React.FC<Props> = ({title,overview,release_date,poster_path,vote_average}) => {
  return (
    <div>
        {title}
        {overview}
        {release_date}
        {poster_path}
        {vote_average}
    </div>
  )
}

export default SelectedMovie