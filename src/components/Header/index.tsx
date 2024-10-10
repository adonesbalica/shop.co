import closeIcon from '../../assets/icons/close.svg'
import searchIcon from '../../assets/icons/search.svg'
import cartIcon from '../../assets/icons/cart.svg'
import perfilIcon from '../../assets/icons/perfil.svg'
import logo from '../../assets/logo.svg'
import { useState } from 'react'

export function Header() {
  const [isSignClosed, setIsSignClosed] = useState<boolean>(true)

  function handleOpenAndCloseSign() {
    setIsSignClosed(!isSignClosed)
  }

  return (
    <header>
      {isSignClosed && (
        <div className="bg-black flex text-white py-3 relative h-10 items-center justify-center">
          <p className="absolute">
            <span className="text-base font-thin">
              Sign up and get 20% off to your first order.
            </span>{' '}
            <a href="#" className="text-white underline font-bold">
              Sign Up Now
            </a>
          </p>
          <button
            className="absolute right-28"
            onClick={handleOpenAndCloseSign}
          >
            <img src={closeIcon} />
          </button>
        </div>
      )}
      <div className="h-[96px] flex px-28 items-center">
        <img src={logo} />
        <nav className="flex ml-10 items-center w-full">
          <ul className="flex gap-6 mr-10">
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">On Sale</a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
          </ul>

          <div className="relative h-12 mr-auto flex-1">
            <img className="absolute top-3 left-5" src={searchIcon} />
            <input
              type="text"
              className="bg-[#F0F0F0] pl-14 h-12 w-full rounded-3xl"
              placeholder="Search for products..."
            />
          </div>

          <ul className="flex gap-4 ml-10">
            <li>
              <a href="#">
                <img src={cartIcon} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={perfilIcon} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
