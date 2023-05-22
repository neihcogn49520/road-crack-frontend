import React from "react"
import Image from "next/image"

const DownSide = () => {
  const data = [
    {
      image: "/images/reflect/1.jpg",
      title: "Đường này đang rất nhiều ổ gà! Cần sửa gấp",
      address: "Lê Văn Việt, phường Tăng Nhơn Phú A, TP Thủ Đức, TPHCM ",
      author: {
        avatar: "/images/reflect/avatar.jpeg",
        username: "Ngoc Hien",
      },
    },
    {
      image: "/images/reflect/2.jpg",
      title: "Đường này đang rất nhiều ổ gà! Cần sửa gấp",
      address: "Lê Văn Việt, phường Tăng Nhơn Phú A, TP Thủ Đức, TPHCM",
      author: {
        avatar: "/images/reflect/avatar.jpeg",
        username: "Ngoc Hien",
      },
    },
    {
      image: "/images/reflect/3.jpg",
      title: "Đường này đang rất nhiều ổ gà! Cần sửa gấp",
      address: "Lê Văn Việt, phường Tăng Nhơn Phú A, TP Thủ Đức, TPHCM",
      author: {
        avatar: "/images/reflect/avatar.jpeg",
        username: "Ngoc Hien",
      },
    },
    {
      image: "/images/reflect/4.jpg",
      title: "Đường này đang rất nhiều ổ gà! Cần sửa gấp",
      address: "Lê Văn Việt, phường Tăng Nhơn Phú A, TP Thủ Đức, TPHCM",
      author: {
        avatar: "/images/reflect/avatar.jpeg",
        username: "Ngoc Hien",
      },
    },
    {
      image: "/images/reflect/5.jpg",
      title: "Đường này đang rất nhiều ổ gà! Cần sửa gấp",
      address: "Lê Văn Việt, phường Tăng Nhơn Phú A, TP Thủ Đức, TPHCM",
      author: {
        avatar: "/images/reflect/avatar.jpeg",
        username: "Ngoc Hien",
      },
    },
    {
      image: "/images/reflect/1.jpg",
      title: "Đường này đang rất nhiều ổ gà! Cần sửa gấp",
      address: "Lê Văn Việt, phường Tăng Nhơn Phú A, TP Thủ Đức, TPHCM",
      author: {
        avatar: "/images/reflect/avatar.jpeg",
        username: "Ngoc Hien",
      },
    },
  ]
  return (
    <div className="flex flex-wrap ">
      {data.map(({ image, title, address }, index) => (
        <div key={index} className="lg:w-1/3 p-4 md:w-1/2 sm:w-1/2">
          <div className="mb-4 bg-text-main/5 rounded-2xl p-4">
            <div className="overflow-hidden rounded-2xl">
              <Image
                width={400}
                height={400}
                src={image}
                alt="service"
                className="max-w-full h-auto object-cover object-center"
              />
            </div>
            <div>
              <h3 className="mt-6 mb-1.5 text-xl">{title}</h3>
              <p className="mb-4 !leading-relaxed text-sm md:text-sm">{address}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DownSide
