import zara from '../../../../assets/clothesLogo/zara.svg'
import gucci from '../../../../assets/clothesLogo/gucci.svg'
import prada from '../../../../assets/clothesLogo/prada.svg'
import versace from '../../../../assets/clothesLogo/versace.svg'
import calvinKlein from '../../../../assets/clothesLogo/calvinKlein.svg'

export function DisplayLogos() {
  return (
    <div className="bg-black flex items-center justify-center gap-64 px-28 py-11">
      <img src={versace} />
      <img src={zara} />
      <img src={gucci} />
      <img src={prada} />
      <img src={calvinKlein} />
    </div>
  )
}
