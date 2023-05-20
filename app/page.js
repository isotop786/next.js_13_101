import React from 'react'
import Link from 'next/link'

export const metadata = {
  title:'Next.js 13 101 Project'
}

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Next.js 13</h1>
      <ul>
        <li><Link href={"/"}>Homepage</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/about/team"}>Team</Link></li>
      </ul>
    </div>
  )
}

export default HomePage