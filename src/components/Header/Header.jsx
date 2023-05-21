
import "./Header.css"

export const Header = ({title}) => {
  return (
    <header className="titulo">
        <h1>{title}</h1>
        <div className="underline"></div>
    </header>
  )
}


