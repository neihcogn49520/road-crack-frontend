import React from "react"

import Link from "next/link"
import { HiOutlineClock, HiOutlineMail, HiOutlineCamera } from "react-icons/hi"

const Reflect = () => {
  return (
    <>
      <div className="w-full text-center sm:p-4 px-4 mb-12 md:max-w-[60%] mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wider !leading-tight mb-4">
          Quy trình tiếp nhận <span className="text-primary-main font-bold uppercase ">Phản ánh</span>
        </h1>
        <div className="leading-relaxed text-sm md:text-base opacity-80">
          Đây là trình tự của hệ thống thực hiện khi người dùng gửi phản ánh và hệ thống tiếp nhận phản ánh để người
          dùng có thể dễ dàng hiểu rõ hơn về hệ thống của chúng tôi.
        </div>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/3 px-2">
          <div className="bg-background-paper max-w-[400px] rounded-3xl w-auto mx-auto h-full flex flex-col justify-center items-center border-[2px] border-text-main/10 text-center z-20 relative mb-4 lg:mb-0 p-4 py-8 sm:p-8">
            <div className="mb-4 flex justify-center items-center">
              <HiOutlineCamera className="w-[45px] h-[45px]" />
            </div>
            <span className="text-text-main/80">Gửi phản ánh</span>
            <h4 className="mb-4 mt-2 text-2xl dark:text-primary-main">Chụp ảnh vết nứt</h4>
            <p className="text-base !leading-normal">
              Khi phát hiện một con đường có nhiều vết nứt nặng hoặc ổ gà hoặc nhiều hư hỏng khác, chụp ảnh và tạo phản
              ánh lên bằng ứng dụng trên điện thoại.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2">
          <div className="bg-background-paper  w-auto max-w-[400px] rounded-3xl mx-auto h-full flex flex-col justify-center items-center border-[2px] border-text-main/10 text-center z-20 relative mb-4 lg:mb-0 p-4 py-8 sm:p-8">
            <div className="mb-4 flex justify-center items-center">
              <HiOutlineClock className="w-[45px] h-[45px]" />
            </div>
            <span className="text-text-main/80">Tiếp nhận</span>
            <h4 className="mt-2 mb-2 text-2xl dark:text-primary-main">Phân tích và xử lý</h4>
            <p className="text-base !leading-normal my-2">
              Hệ thống sẽ tiến hành phân tích mức độ của phản ánh đã gửi lên và cập nhật trạng thái theo trình tự xử lý.
            </p>
            <ul className="inline-block list-unstyled mx-auto text-left opacity-80 text-base !leading-normal">
              <li className="flex justify-content-between ">
                <span className="font-bold"> Mức độ</span> <span>: tính theo % (1-100%)</span>
              </li>
              <li className="flex justify-content-between">
                <span className="font-bold">Trạng thái </span> <span>: Đã | Đang | Chưa xử lý</span>
              </li>
            </ul>
            <Link href="/reflects">
              <button className="inline-flex mt-6 transition items-center cursor-pointer uppercase align-middle text-center select-none whitespace-nowrap py-2 px-6 text-sm leading-normal no-underline rounded-full bg-text-main dark:bg-text-main/5 hover:bg-transparent border-2 border-text-main dark:border-text-main/10 dark:hover:bg-primary-main hover:text-text-main text-white outline-none font-bold">
                Xem phản ánh
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2">
          <div className="bg-background-paper max-w-[400px] rounded-3xl w-auto mx-auto h-full flex flex-col justify-center items-center border-[2px] border-text-main/10 text-center z-20 relative mb-4 lg:mb-0 p-4 py-8 sm:p-8">
            <div className="mb-4 flex justify-center items-center">
              <HiOutlineMail className="w-[45px] h-[45px]" />
            </div>
            <span className="text-text-main/80">Gửi phản ánh</span>
            <h4 className="mb-4 mt-2 text-2xl dark:text-primary-main">24/7 Service</h4>
            <p className="text-base !leading-normal">
              Sau khi phân tích mức độ của phản ánh, hệ thống sẽ thống kê và gửi các phản ánh lên cơ quan liên quan theo
              thứ tự mức độ từ thấp đến cao.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reflect
