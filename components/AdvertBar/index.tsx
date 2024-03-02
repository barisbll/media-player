import { GradientDivider } from '@/components/GradientDivider'
import { inter } from '@/assets/fonts'
import { cn } from '@/utility/cn'

export const AdvertBar = () => {
  return (
    <div className={cn(inter.className, 'flex flex-col')}>
      <div className="w-full h-16 flex justify-center items-center bg-lightBrown">
        <h1 className="h-4">
          NEW CUSTOMERS GET 15% OFF! USE CODE{' '}
          <span className="text-linkBlue">WELCOME15</span>
        </h1>
      </div>
      <GradientDivider />
    </div>
  )
}
