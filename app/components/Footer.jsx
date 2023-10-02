import { FiGithub } from "react-icons/fi"
export const Footer = () => {
    return (
        <section className="footerContainer">
            <p>Prueba tecnica Aertec</p>
            <a href="https://github.com/Alan-Figueredo/movie-app" target="_blank"><FiGithub /></a>
            <p>Created By <a href="https://alanfigueredo.netlify.app/" target="_blank">Alan Figueredo</a></p>
        </section>
    )
}