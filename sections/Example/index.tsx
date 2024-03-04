import { Button } from '@/components/Button'

export const Example = () => {
  return (
    <div className="w-full h-exampleSectionHeight flex flex-col justify-around items-center bg-lightGray py-9">
      <Button className="pt-4" type="tertiary">
        Example Section
      </Button>
      <div className="w-2/3">
        <h1 className="text-2xl font-semibold leading-10 text-center tracking-wide">
          Lorem{' '}
          <span className="background-gradient">
            ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex
            vel
          </span>{' '}
          massa lacinia ultricies. Suspendisse lobortis vehicula eros, sed
          sodales eros mollis eget. Morbi vitae libero in nunc sodales.
        </h1>
      </div>
      <Button type="link">SEE MORE</Button>
    </div>
  )
}
