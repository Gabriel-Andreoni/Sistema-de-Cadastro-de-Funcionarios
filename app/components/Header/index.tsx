import { SignedIn, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export async function Header() {
    const { userId } = await auth();
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

            {userId ? <Link prefetch className="text-slate-950" href="/dashboard">Dashboard</Link> : ''}
            {userId ? <Link prefetch className="text-slate-950" href="/trabalhadores">Trabalhadores</Link> : ''}

            <span className="w-auto ml-auto">
                <Link
                    href="/dashboard/relatorio"
                    target="_blank"
                    className="text-slate-950">
                    Baixar Relatório
                </Link>
            </span>
        </header>
    )
}