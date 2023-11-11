import React, { useEffect} from 'react'

const Title = ({title}) => {
    useEffect(() => {
        document.title = title;
    },[title]);
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Title
