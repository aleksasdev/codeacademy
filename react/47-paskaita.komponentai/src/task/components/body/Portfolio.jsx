import React from 'react'
import { Card } from './Card'

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dicta unde! Eum consectetur culpa ipsum numquam aliquam itaque veniam magnam architecto? Commodi accusamus quasi perspiciatis officia doloribus culpa magni eius.</p>

      {require('../../data/portfolio.json').cards.map((entry, index) => {
         return <Card data={entry} key={index.toString()}/>
      })}
    </section>
  )
}
