import { SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SignIn routing="hash" />
      
    </div>
  )
}