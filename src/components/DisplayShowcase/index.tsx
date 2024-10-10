interface Image {
  url: string
  name: string
  rate: string
  price: string
  originalPriceWithoutDiscount?: string
  discount?: string
}

interface DisplayShowcaseProps {
  title: string
  linkText?: string
  images?: Image[]
}

export function DisplayShowcase({
  title,
  linkText,
  images,
}: DisplayShowcaseProps) {
  function formattingRating(rate: string) {
    let totalRating = 5
    let ratingStars = ''
    const integerRating = Number(rate.slice(0, 1))
    const floatRating = Number(rate.slice(2, 3))

    if (integerRating == 0) {
      return (ratingStars = '○○○○○')
    }

    ratingStars += ''.padStart(integerRating, '●')
    totalRating = totalRating - integerRating

    if (floatRating >= 1) {
      ratingStars += ''.padEnd(1, '◐')
    } else {
      ratingStars += ''.padEnd(1, '○')
    }

    if (totalRating >= 1) {
      totalRating = totalRating - 1
      ratingStars += ''.padEnd(totalRating, '○')
    }

    return ratingStars
  }

  return (
    <div className="flex flex-col items-center mt-[72px] mb-16">
      <p className="text-5xl font-oswald font-bold mb-[55px]">{title}</p>

      <div className="flex justify-between w-full">
        {images?.map((element) => (
          <a href="#">
            <div className="flex items-center justify-center rounded-2xl overflow-hidden w-[295px] h-[298px] bg-[#F0EEED]">
              <img src={element.url} />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <p className="font-bold text-base">{element.name}</p>
              <p className="flex gap-3">
                <span className="rating tracking-widest">
                  {formattingRating(element.rate)}
                </span>
                {element.rate}/5
              </p>
              <div className="mt-2 flex gap-3 items-center">
                <span className="text-2xl font-bold">${element.price}</span>
                {element.originalPriceWithoutDiscount && (
                  <s className="text-2xl font-bold text-[#616060]">
                    ${element.originalPriceWithoutDiscount}
                  </s>
                )}

                {element.discount && (
                  <span className="flex items-center justify-center text-sm w-[58px] h-[28px] rounded-full ml-4  text-[#FF3333] bg-[#F3E7EC]">
                    -{element.discount}%
                  </span>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
      {linkText && (
        <a
          href="#"
          className="mt-9 border border-[#DAD8D9]  rounded-full py-4 px-14"
        >
          {linkText}
        </a>
      )}
    </div>
  )
}
