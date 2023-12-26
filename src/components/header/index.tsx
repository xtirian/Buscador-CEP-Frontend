import './style.scss'
import { FaMapLocationDot } from "react-icons/fa6";

const Header = () => {
  return (
    <aside>
        <header>
          <FaMapLocationDot className="logo" />
          <div>
            <h1>Buscador de CEP</h1>
          </div>

          <img src="/Hero.png" alt="hero" />
        </header>
      </aside>
  )
}

export default Header