import React from "react"
import Image from "next/image"
import { Ticker, TitleAndDescription } from "../"

const CtaSection = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-wrap px-4 mt-auto mb-auto lg:w-1/2 md:w-2/3 content-start md:pr-12 pt-12 order-1 md:order-0 ">
        <div>
          <TitleAndDescription
            titleStart="Thống kê số liệu"
            titleHighlight="đường hư hỏng"
            titleEnd="và các sự cố giao thông"
            description="Số liệu mới nhất về các con đường đang xuống cấp và hư hỏng chưa được xử lý,
            các vụ tai nạn do cơ sở hạ tầng đường phố xuống cấp gây ra."
            left
          />
        </div>
        <div className="py-4 px-2 md:px-6 sm:w-1/2 lg:w-1/3 w-1/2">
          <h2 className="font-medium text-3xl">
            <Ticker count={60} decimal={1} />%
          </h2>
          <p className="leading-relaxed">Đường hư hỏng</p>
        </div>
        <div className="py-4 px-2 md:px-6 sm:w-1/2 lg:w-1/3 w-1/2">
          <h2 className="font-medium text-3xl">
            <Ticker count={7.488} decimal={1} />
            K+
          </h2>
          <p className="leading-relaxed">Vụ tai nạn</p>
        </div>
        <div className="py-4 px-2 md:px-6 sm:w-1/2 lg:w-1/3 w-1/2">
          <h2 className="font-medium text-3xl">
            <Ticker count={1000} />+
          </h2>
          <p className="leading-relaxed">Phản ánh từ người dân</p>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-1/3 rounded-xl md:rounded-3xl overflow-hidden w-full order-0 mx-2 md:mx-0 md:order-1">
        <Image
          className="object-cover object-center w-full h-full"
          src="/images/bglogin.png"
          width={600}
          height={400}
          alt="cta"
        />
      </div>
    </div>
  )
}

export default CtaSection
