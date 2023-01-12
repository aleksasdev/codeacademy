import React from 'react'
import { ListItem } from './ListItem'

export const List = (props) => {
  return (
    <>
      {props.data.map( (item, index)=> <ListItem key={index.toString()} data={item} /> )}
    </>
  )
}
