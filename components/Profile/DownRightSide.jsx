import React from "react"
import Image from "next/image"

const DownRightSide = () => {
  return (
    <div className="lg:w-1/3 lg:pl-8 mt-4 lg:mt-0 p-4">
      <div className="contact-box-layout1">
        <h3 className="text-lg md:text-xl tracking-wider !leading-tight">Ảnh đại diện</h3>
        <div className="h-[6px] bg-primary-main w-[30px] my-4" />
        <div className="flex items-center">
          <Image
            alt="avatar"
            src="/images/reflect/avatar.jpeg"
            width={600}
            height={600}
            className=" rounded-full flex-shrink-0 object-cover object-center"
          />
          <div className="flex-grow flex flex-col pl-4"></div>
        </div>
      </div>
    </div>
  )
}

export default DownRightSide
