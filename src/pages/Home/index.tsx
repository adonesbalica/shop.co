import { DisplayLogos } from './components/DisplayLogos'

export function Home() {
  return (
    <div>
      <div className="flex h-[663px] px-28 pt-28 bg-[url('./assets/coupleImage.svg')]  bg-cover">
        <div className="w-[577px] ">
          <h1 className="text-[64px] mb-8 leading-[64px] font-oswald font-bold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="mb-8 text-base text-[#616060] leading-5">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <a
            href="#"
            className="inline-block py-4 px-16 text-white font-bold bg-black rounded-full"
          >
            Shop Now
          </a>

          <div className="flex mt-9 gap-8">
            <div>
              <span className="font-bold text-[40px]">200+</span>
              <p className="text-[#616060] leading-5 text-base">
                International Brands
              </p>
            </div>
            <div className="border border-[#DAD8D9]"></div>
            <div>
              <span className="font-bold text-[40px]">2,000+</span>
              <p className="text-[#616060] leading-5 text-base">
                High-Quality Products
              </p>
            </div>
            <div className="border border-[#DAD8D9]"></div>
            <div>
              <span className="font-bold text-[40px]">30,000+</span>
              <p className="text-[#616060] leading-5 text-base">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <DisplayLogos />
      <div></div>
    </div>
  )
}
