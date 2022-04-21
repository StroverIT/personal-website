import Head from 'next/head'
import toast from "react-hot-toast"
import { auth } from '../../lib/firebase'
import {useRouter} from "next/router"

export default function account() {
    const router = useRouter()

    const handleClick = e =>{
        router.push("/")
    }
  return (
    <main>
    <SignOutButton home={handleClick}/>
    </main>
  )
}
function SignOutButton({home}){
    return <button onClick={()=> signOut(home)}>Изход</button>
}
function signOut(home){
    auth.signOut()
    home()
}