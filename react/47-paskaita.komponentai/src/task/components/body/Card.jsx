import React from 'react'

export const Card = (props) => {
  return (
    <div className="card">
      <div className="background">
         <img src={props.data.url} alt="card-image" />
      </div>
      <div className="description">
         <p>{props.data.text}</p>
      </div>
    </div>
  )
}
