import logo from '../../assets/logo.svg'
import facebook from '../../assets/socials/facebook.svg'
import github from '../../assets/socials/github.svg'
import instagram from '../../assets/socials/instagram.svg'
import twitter from '../../assets/socials/twitter.svg'

import visa from '../../assets/cardsIcons/visa.svg'
import paypal from '../../assets/cardsIcons/paypal.svg'
import mastercard from '../../assets/cardsIcons/mastercard.svg'
import googlePay from '../../assets/cardsIcons/googlePay.svg'
import applePay from '../../assets/cardsIcons/applePay.svg'

export function Footer() {
  return (
    <div className="px-28 bg-[#F0F0F0] flex flex-col">
      <div className="flex bg-black items-center justify-center gap-10 rounded-3xl mt-[-80px]">
        <p className="my-16 text-white text-5xl font-oswald font-bold text-left">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
        <form className="flex flex-col gap-3">
          <input
            className="w-[349px] h-[48px] rounded-3xl pl-10"
            type="text"
            placeholder="Enter your email address"
          />
          <button
            className="w-[349px] h-[48px] bg-white font-bold rounded-3xl"
            type="submit"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>

      <div className="mt-14 flex gap-48 mb-14">
        <div className="flex flex-col w-64">
          <p className="font-bold font-oswald text-3xl">SHOP.CO</p>
          <p className="mt-7 text-sm leading-6 text-[#606060]">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <ul className="flex mt-9 gap-3">
            <li>
              <a
                href="#"
                className="flex justify-center items-center w-7 h-7 rounded-full border border-[#CCCCCC]"
              >
                <img src={twitter} alt="" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-center items-center w-7 h-7 rounded-full bg-black"
              >
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-center items-center w-7 h-7 rounded-full border border-[#CCCCCC]"
              >
                <img src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-center items-center w-7 h-7 rounded-full border border-[#CCCCCC]"
              >
                <img src={github} alt="" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base text-black font-medium mb-7">COMPANY</p>
          <ul className="text-sm leading-6 text-[#606060] flex flex-col gap-4">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base text-black font-medium mb-7">HELP</p>
          <ul className="text-sm leading-6 text-[#606060] flex flex-col gap-4">
            <li>
              <a href="#">Customer Support</a>
            </li>
            <li>
              <a href="#">Delivery Details</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base text-black font-medium mb-7">FAQ</p>
          <ul className="text-sm leading-6 text-[#606060] flex flex-col gap-4">
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Manage Deliveries</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Payments</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base text-black font-medium mb-7">RESOURCES</p>
          <ul className="text-sm leading-6 text-[#606060] flex flex-col gap-4">
            <li>
              <a href="#">Free eBooks</a>
            </li>
            <li>
              <a href="#">Development Tutorial</a>
            </li>
            <li>
              <a href="#">How to - Blog</a>
            </li>
            <li>
              <a href="#">YouTube Playlist</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#CCCCCC] mb-7 h-[1px]"></div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-black">© 2000-2021, All rights reserved</p>
        <div>
          <ul className="flex gap-3">
            <li>
              <img src={visa} />
            </li>
            <li>
              <img src={mastercard} />
            </li>
            <li>
              <img src={paypal} />
            </li>
            <li>
              <img src={applePay} />
            </li>
            <li>
              <img src={googlePay} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
