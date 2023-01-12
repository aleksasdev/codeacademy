import React from 'react';
import { Hero } from './Hero';
import { nanoid } from 'nanoid';

export const Header = () => {
  return (
    <header>
      <Hero key={nanoid()}/>
    </header>
  )
}
