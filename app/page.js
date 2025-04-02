import Link from "next/link.js"
import Header from "@/components/Header/header.js"

export default function Home() {
  console.log("Executing")
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href='/about'>About Us</Link>
      </p>
    </main>
  )
}
