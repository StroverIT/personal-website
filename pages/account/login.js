import {auth, googleAuthProvider} from "../../lib/firebase"

export default function account(){
    const user = null
    const username = null
    // 1. user signed out <SignInButton/>
    // 2. user signed  in, but missing username <UsernameForm />
    // 3. user signed in, has username <SignOutButton />
    return (
        <main>
            {user ? 
            !username ? <UsernameForm /> : <SignOutButton />
            :
            <SignInButton />
            }
        </main>
    )
}

// Sign in with Google button
function SignInButton(){
    const signInWithGoogle = async () =>{
        try{
            await auth.signInWithPopup(googleAuthProvider)

        }catch(e){
            console.log(e);
        }
    }
    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            Sign in with google
        </button>
    )

}
//  Sign out button
function SignOutButton(){
    return <button onClick={()=> auth.signOut()}>Изход</button>
}
