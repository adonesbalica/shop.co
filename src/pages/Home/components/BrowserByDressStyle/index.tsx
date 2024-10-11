export function BrowserByDressStyle() {
  return (
    <div className="bg-[#F0F0F0] flex flex-col rounded-xl">
      <p className="my-16 text-5xl font-oswald font-bold text-center">
        Browser By Dress Style
      </p>

      <div className="flex flex-col px-16 gap-7 items-center">
        <div className="flex gap-x-14">
          <a
            href="#"
            className="pt-6 pl-9 rounded-xl w-[780px] h-[289px] bg-[#FFF] bg-[url('./assets/dressStyle/casual.svg')] bg-contain bg-right	bg-no-repeat"
          >
            <span className="text-bold text-4xl">Casual</span>
          </a>
          <a
            href="#"
            className="pt-6 pl-9 rounded-xl w-[1020px] h-[289px] bg-[#FCFCFC]  bg-[url('./assets/dressStyle/formal.svg')] bg-contain bg-right	bg-no-repeat"
          >
            <span className="text-bold text-4xl">formal</span>
          </a>
        </div>
        <div className="flex gap-x-14 mb-20">
          <a
            href="#"
            className="pt-6 pl-9 rounded-xl  w-[1020px] h-[289px] bg-[#FFF]  bg-[url('./assets/dressStyle/party.svg')] bg-contain bg-right	bg-no-repeat"
          >
            <span className="text-bold text-4xl">party</span>
          </a>
          <a
            href="#"
            className="pt-6 pl-9 rounded-xl w-[780px] h-[289px] bg-[#FFF]  bg-[url('./assets/dressStyle/gym.svg')] bg-contain bg-right	bg-no-repeat"
          >
            <span className="text-bold text-4xl">Gym</span>
          </a>
        </div>
      </div>
    </div>
  )
}
