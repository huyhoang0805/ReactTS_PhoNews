import React from 'react'
import {createComponent} from '@lit/react';
import {btnDemo} from "./button.ts"

const ButtonRed = createComponent({
  react: React,
  tagName: 'buttonDemo',
  elementClass: btnDemo,
});

// export default function Button() {
//   return (
//     <button>
//       hi
//     </button>
//   )
// }

export {ButtonRed}