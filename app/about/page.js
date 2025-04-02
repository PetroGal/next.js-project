import Link from "next/link.js"

export default function About() {
  console.log("Executing")
  return (
    <main>
      <h1>Ha!Ha!Ha!</h1>
      <p>🔥 Ha!Ha!Ha! 🔥</p>
      <p>
        <Link href='/'>Back to the main page</Link>
      </p>
    </main>
  )
}
