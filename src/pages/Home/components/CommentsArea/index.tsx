import leftArrow from '../../../../assets/leftArrow.svg'
import rightArrow from '../../../../assets/rightArrow.svg'

interface Commentary {
  comment: string
  rating: string
  name: string
}

const comments: Commentary[] = [
  {
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: '●●●●●',
    name: 'Sarah M.',
  },
  {
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: '●●●●●',
    name: 'Sarah M.',
  },
  {
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: '●●●●●',
    name: 'Sarah M.',
  },
  {
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: '●●●●●',
    name: 'Sarah M.',
  },
  {
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: '●●●●●',
    name: 'Sarah M.',
  },
]
//
export function CommentsArea() {
  return (
    <div className="mb-48 overflow-x-hidden ">
      <div className="flex justify-between">
        <p className="my-16 text-5xl font-oswald font-bold text-left">
          OUR HAPPY CUSTOMERS
        </p>
        <div className="flex gap-5">
          <button>
            <img src={leftArrow} />
          </button>
          <button>
            <img src={rightArrow} />
          </button>
        </div>
      </div>
      <div className="flex w-dvw gap-8">
        {comments.map((commentary) => (
          <div className="flex flex-col gap-4 pt-[28px] px-8 w-[400px] h-[240px] border border-[#DAD8D9] rounded-2xl">
            <span className="rating text-xl">{commentary.rating}</span>
            <p className="text-bold text-[20px]">{commentary.name}</p>
            <p className="text-[#666666] text-base">{commentary.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
