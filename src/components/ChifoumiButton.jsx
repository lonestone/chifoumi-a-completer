import determineWinner from '../play.js'
import { useState } from 'react'
import chifoumiActions from '../types/ChifoumiActions.js'

export default function ChifoumiButton({ actionKey }) {
  const [winner, setWinner] = useState('');

  return (
    <button onClick={() => setWinner(determineWinner(actionKey))}>
      {chifoumiActions[actionKey]}
    </button>
  )
}
