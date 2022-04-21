import Link from "next/link"

export default function Navbar(){
    // let user = null;
    let username = null

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button>HOME</button>
                    </Link>
                </li>

                { /* user is signed-in and has username*/}
                {username &&(
                    <li>
                        <Link href="/account">
                            Account
                        </Link>
                    </li>
                    
                )}
                {/* user is not signed OR has not created username */}
                {!username && (
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