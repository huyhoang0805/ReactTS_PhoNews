import React from 'react'
import {createComponent} from '@lit/react';
import {btnDemo} from "./button.ts"

export const buttonRed = createComponent({
  react: React,
  tagName: 'demo-greeting',
  elementClass: btnDemo,
});

export default function Button() {
  return (
    <button>
      hi
    </button>
  )
}

