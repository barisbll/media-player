import { BrandIcon } from '../Icons/BrandIcon'
import { CartIcon } from '../Icons/CartIcon'
import { ProfileIcon } from '../Icons/ProfileIcon'
import { SearchIcon } from '../Icons/SearchIcon'
import { Button } from '../Button'

export const NavBar = () => {
  return (
    <div className="w-full h-navbarHeight flex justify-center items-center bg-lightGray">
      <div className="w-2/3 flex justify-between items-center">
        <div className="flex gap-x-3">
          <Button type="primary" isActive={true}>
            HOME
          </Button>
          <Button type="primary">ABOUT</Button>
          <Button type="primary">PRODUCTS</Button>
        </div>

        <div>
          <BrandIcon className="w-12 h-12" />
        </div>
        <div className="flex gap-x-4">
          <Button type="rounded">
            <CartIcon className="w-5 h-5" />
          </Button>
          <Button type="rounded">
            <ProfileIcon className="w-5 h-5" />
          </Button>
          <Button type="rounded">
            <SearchIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
