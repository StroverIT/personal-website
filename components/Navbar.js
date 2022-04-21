import Link from "next/link"
import {useContext} from "react"
import {UserContext} from "../lib/context"

export default function Navbar(){

    const {user, username, email} = useContext(UserContext)
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button>HOME</button>
                    </Link>
                </li>

                { /* user is signed-in and has username*/}
                {username || email&&(
                    <li>
                        <Link href="/account">
                            Account
                        </Link>
                    </li>
                    
                )}
                {/* user is not signed OR has not created username */}
                {(!username && !email )&& (
                    <li>
                        <Link href="/account/login">
                        <button>Log in</button>
                        </Link>
                    </li>
                )}

            </ul>

        </nav>
    )
}