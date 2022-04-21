import Head from 'next/head'
import Loader from "../components/Loader"
import toast from "react-hot-toast"

export default function Home() {
  return (
    <>
    <Loader show={true} />
    <button onClick={() => toast.success("hello toast!")}>Toast me</button>
    </>
  )
}
