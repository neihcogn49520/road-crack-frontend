import React from "react"
import Image from "next/image"
import { HiOutlineDotsHorizontal, HiOutlineMinusCircle, HiOutlineCheck } from "react-icons/hi"
import { BiReceipt } from "react-icons/bi"
import Ticker from "../Customs/Ticker"

const ListReflects = () => {
  const data = [
    {
      image: "/images/reflect/1.jpg",
      title: "Đường này đang rất nhiều ổ gà! Cần sửa gấp",
      address: "Lê Văn Việt, phường Tăng Nhơn Phú A, TP Thủ Đức, TPHCM ",
      status: {
        icon: <HiOutlineDotsHorizontal className="w-6 h-6" />,
        content: "Đang xử lý",
        className: "text-main",
      },
    },
    {
      image: "/images/reflect/2.jpg",
      title: "Đường này đang rất nhiều ổ gà! Cần sửa gấp",
      address: "Lê Văn Việt, phường Tăng Nhơn Phú A, TP Thủ Đức, TPHCM",
      status: {
        icon: <HiOutlineMinusCircle className="w-6 h-6" />,
        content: "Chưa xử lý",
        className: "text-red-pastel-600",
      },
    },
    {
      image: "/images/reflect/3.jpg",
      title: "Đường này đang rất nhiều ổ gà! Cần sửa gấp",
      address: "Lê Văn Việt, phường Tăng Nhơn Phú A, TP Thủ Đức, TPHCM",
      status: {
        icon: <HiOutlineCheck className="w-6 h-6" />,
        content: "Đã xử lý",
        className: "text-green-400",
      },
    },
    {
      image: "/images/reflect/4.jpg",
      title: "Đường này đang rất nhiều ổ gà! Cần sửa gấp",
      address: "Lê Văn Việt, phường Tăng Nhơn Phú A, TP Thủ Đức, TPHCM",
      status: {
        icon: <BiReceipt className="w-6 h-6" />,
        content: "Đã tiếp nhận",
        className: "text-primary-main",
      },
    },
    {
      image: "/images/reflect/5.jpg",
      title: "Đường này đang rất nhiều ổ gà! Cần sửa gấp",
      address: "Lê Văn Việt, phường Tăng Nhơn Phú A, TP Thủ Đức, TPHCM",
      status: {
        icon: <HiOutlineCheck className="w-6 h-6" />,
        content: "Đã xử lý",
        className: "text-green-400",
      },
    },
    {
      image: "/images/reflect/1.jpg",
      title: "Đường này đang rất nhiều ổ gà! Cần sửa gấp",
      address: "Lê Văn Việt, phường Tăng Nhơn Phú A, TP Thủ Đức, TPHCM",
      status: {
        icon: <HiOutlineDotsHorizontal className="w-6 h-6" />,
        content: "Đang xử lý",
        className: "text-main",
      },
    },
  ]

  return (
    <>
      <div className="flex flex-wrap px-4">
        <div className="flex-[50%]">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-wider !leading-tight">
            <span className="uppercase text-primary-main font-bold">Phản ánh</span> của tôi
          </h3>
          <div className="h-[6px] bg-primary-main w-[100px] my-4" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-white-blue-30 font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Hình ảnh
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Mô tả
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Địa chỉ
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Trạng thái
                    </th>
                  </tr>
                </thead>
                {data.map(({ image, title, address, status }, index) => (
                  <tbody key={index}>
                    <tr className="border-b bg-background-default hover:bg-white-blue-30 dark:border-text-main dark:text-main dark:bg-background-default items-center">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {(stt) =>
                          data.forEach((i) => {
                            stt = i
                            i++
                          })
                        }
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="overflow-hidden rounded-2xl">
                          <Image width={200} height={400} src={image} alt="service" className="max-w-full h-auto" />
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-bold"> {title} </td>
                      <td className="whitespace-nowrap px-6 py-4"> {address} </td>
                      <td className="whitespace-nowrap px-6 py-4 flex space-x-2 items-center">
                        <span className={status.className}>{status.icon}</span>
                        <span className={status.className}>{status.content}</span>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListReflects
