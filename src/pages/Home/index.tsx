import { DisplayShowcase } from '../../components/DisplayShowcase'
import { BrowserByDressStyle } from './components/BrowserByDressStyle'
import { CommentsArea } from './components/CommentsArea'
import { DisplayLogos } from './components/DisplayLogos'

interface Image {
  url: string
  name: string
  rate: string
  price: string
  originalPriceWithoutDiscount?: string
  discount?: string
}

const newArrivals: Image[] = [
  {
    name: 'T-SHIRT WITH TAPE DETAILS',
    price: '120',
    rate: '4.5',
    url: 'src\\assets\\clothesNewArrivals\\image7.svg',
  },
  {
    name: 'T-SHIRT WITH TAPE DETAILS',
    price: '120',
    rate: '3.5',
    url: 'src\\assets\\clothesNewArrivals\\image8.svg',
    originalPriceWithoutDiscount: '260',
    discount: '20',
  },
  {
    name: 'T-SHIRT WITH TAPE DETAILS',
    price: '120',
    rate: '2.5',
    url: 'src\\assets\\clothesNewArrivals\\image9.svg',
  },
  {
    name: 'T-SHIRT WITH TAPE DETAILS',
    price: '120',
    rate: '4.1',
    url: 'src\\assets\\clothesNewArrivals\\image10.svg',
    originalPriceWithoutDiscount: '160',
    discount: '30',
  },
]

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
      <div className="px-28">
        <DisplayShowcase
          title="New Arrivals"
          linkText="View All"
          images={newArrivals}
        />

        <div className="flex border border-[#DAD8D9]"></div>

        <DisplayShowcase
          title="Top Selling"
          linkText="View All"
          images={newArrivals}
        />
      </div>
      <div className="px-28">
        <BrowserByDressStyle />
      </div>
      <div className="px-28">
        <CommentsArea />
      </div>
    </div>
  )
}
