import { SignedIn, UserButton} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export async function Header() {
    const {userId} = await auth();
    return (
        <header className="w-full p-4 flex gap-4 items-center bg-white">
            <SignedIn>
                <UserButton appearance={{
                    elements: {
                        userButtonAvatarBox: {
                            width: '48px',
                            height: '48px',
                        },
                    },
                }} />
            </SignedIn>

            {userId ? <Link className="text-slate-950" href="/dashboard">Dashboard</Link> : <Link className="text-slate-950" href="/login">Login</Link>}
            {userId ? <Link className="text-slate-950" href="/trabalhadores">Trabalhadores</Link> : ''}
        </header>
    )
}