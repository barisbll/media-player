import { inter } from '@/assets/fonts'
import { cn } from '@/utility/cn'
import { GradientDivider } from '@/components/GradientDivider'
import { BrandIcon } from '@/components/Icons/BrandIcon'

export const Footer = () => {
  return (
    <div className={cn(inter.className, 'flex flex-col w-full h-footerHeight')}>
      <GradientDivider />
      <div className="w-full h-full flex justify-center items-center bg-lightBrown">
        <div className=" w-2/3 flex justify-between items-center">
          <div className="flex justify-between items-center gap-6">
            <BrandIcon className="text-darkerGray" />
            <h1 className="text-darkerGray text-3xl tracking-wider  ">
              Brand Name
            </h1>
          </div>
          <div className="w-3/4">
            <p className="font-normal text-xs">
              © 2024 <span className="font-semibold">Brand Name</span> All
              rights reserved. Unauthorized use or copying of this brand is
              strictly prohibited. No part of this website may be reproduced,
              distributed, or transmitted in any form or by any means, including
              photocopying, recording, or other electronic or mechanical
              methods, without the prior written permission of{' '}
              <span className="font-semibold">Brand Name</span>, except in the
              case of brief quotations embodied in critical reviews and certain
              other non-commercial uses permitted by copyright law.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
