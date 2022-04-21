import Head from 'next/head'
import toast from "react-hot-toast"
import { auth } from '../../lib/firebase'

export default function account() {
  return (
    <>
    <SignOutButton/>
    </>
  )
}
function SignOutButton(){
    return <button onClick={()=> auth.signOut()}>Изход</button>
}
