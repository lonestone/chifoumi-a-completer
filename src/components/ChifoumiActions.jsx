import chifoumiActions from '../types/ChifoumiActions.js'
import ChifoumiButton from './ChifoumiButton.jsx'

export default function ChifoumiActions () {
  return (
    Object.keys(chifoumiActions).map((chifoumiActionKey) => {
      return (
        <ChifoumiButton actionKey={chifoumiActionKey} key={chifoumiActionKey} />
      )
    })
  )
}
