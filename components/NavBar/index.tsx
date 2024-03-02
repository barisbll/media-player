import { BrandIcon } from '../Icons/BrandIcon'
import { Button } from '../Button'

export const NavBar = () => {
  return (
    <div className="w-full h-24 flex justify-center items-center bg-white">
      <div className="w-2/3 flex justify-between items-center">
        <div className="flex gap-x-2">
          <Button type="primary" isActive={true}>
            HOME
          </Button>
          <Button type="primary">ABOUT</Button>
          <Button type="primary">PRODUCTS</Button>
        </div>

        <div>
          <BrandIcon className="w-12 h-12" />
        </div>
        <div>
          <Button type="primary" isActive={true}>
            HOME
          </Button>
          <Button type="primary">ABOUT</Button>
          <Button type="primary">PRODUCTS</Button>
        </div>
      </div>
    </div>
  )
}
