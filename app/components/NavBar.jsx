"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
const links = [
    { name: "Upcoming", link: "#upcoming" },
    { name: "Popular Series", link: "#populartvseries" },
    { name: "Popular Movies", link: "#popularfilmlist" }
]

const NavBar = () => {
    const [text, setText] = useState("")
    const router = useRouter();

    return (
        <nav>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                <Link href="/"><h1>Cinema Centre</h1></Link>
                <div className="header-search-col">
                    <div className="search-container">
                        <input type="text" name="search" className="search" id="search" placeholder="Click to search" onKeyUp={(evt) => { evt.key === "Enter" ? router.push(`/search/${text}`) : setText(evt.target.value) }} />
                        <Link href={`/search/${text}`} type="button" className="search-button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="search-svg" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_8680_24)">
                                    <path
                                        d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                                        fill="#8F959A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_8680_24">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <ul>
                {links.map((item) => {
                    return (
                        <li>
                            <Link className="link" href={`/${item.link}`}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>

        </nav>
    )
}
export default NavBar;