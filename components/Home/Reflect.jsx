import React from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"
import { HiOutlineDotsHorizontal, HiOutlineMinusCircle, HiOutlineCheck } from "react-icons/hi"
import { BiReceipt } from "react-icons/bi"

const ReflectSection = () => {
  const data = [
    {
      image: "/images/reflect/1.jpg",
      content: {
        description: "Con đường này đang hư hỏng nặng, đường nứt gãy nghiêm trọng dễ gây ra nhiều sự cố giao thông.",
        level: "3",
        status: {
          pending: {
            icon: <HiOutlineDotsHorizontal className="w-6 h-6" />,
            content: "Đang xử lý",
          },
          receiption: {
            icon: <BiReceipt className="w-6 h-6" />,
            content: "Đã tiếp nhận",
          },
          processed: {
            icon: <HiOutlineCheck className="w-6 h-6" />,
            content: "Đã xử lý",
          },
          no_process: {
            icon: <HiOutlineMinusCircle className="w-6 h-6" />,
            content: "Chưa xử lý",
          },
        },
      },
      author: {
        avatar: "/images/reflect/avatar.jpeg",
        name: "Tran Van A",
        description: "User",
      },
    },
    {
      image: "/images/reflect/2.jpg",
      content: {
        description: "Con đường này đang hư hỏng nặng, đường nứt gãy nghiêm trọng dễ gây ra nhiều sự cố giao thông.",
        level: "3",
        status: {
          pending: {
            icon: <HiOutlineDotsHorizontal className="w-6 h-6" />,
            content: "Đang xử lý",
          },
          receiption: {
            icon: <BiReceipt className="w-6 h-6" />,
            content: "Đã tiếp nhận",
          },
          processed: {
            icon: <HiOutlineCheck className="w-6 h-6" />,
            content: "Đã xử lý",
          },
          no_process: {
            icon: <HiOutlineMinusCircle className="w-6 h-6" />,
            content: "Chưa xử lý",
          },
        },
      },
      author: {
        avatar: "/images/reflect/avatar.jpeg",
        name: "Nguyen Thi Binh",
        description: "User",
      },
    },
    {
      image: "/images/reflect/3.jpg",
      content: {
        description: "Con đường này đang hư hỏng nặng, đường nứt gãy nghiêm trọng dễ gây ra nhiều sự cố giao thông.",
        level: "3",
        status: {
          pending: {
            icon: <HiOutlineDotsHorizontal className="w-6 h-6" />,
            content: "Đang xử lý",
          },
          receiption: {
            icon: <BiReceipt className="w-6 h-6" />,
            content: "Đã tiếp nhận",
          },
          processed: {
            icon: <HiOutlineCheck className="w-6 h-6" />,
            content: "Đã xử lý",
          },
          no_process: {
            icon: <HiOutlineMinusCircle className="w-6 h-6" />,
            content: "Chưa xử lý",
          },
        },
      },
      author: {
        avatar: "/images/reflect/avatar.jpeg",
        name: "Ngoc Hien",
        description: "User",
      },
    },
    {
      image: "/images/reflect/4.jpg",
      content: {
        description: "Con đường này đang hư hỏng nặng, đường nứt gãy nghiêm trọng dễ gây ra nhiều sự cố giao thông.",
        level: "3",
        status: {
          pending: {
            icon: <HiOutlineDotsHorizontal className="w-6 h-6" />,
            content: "Đang xử lý",
          },
          receiption: {
            icon: <BiReceipt className="w-6 h-6" />,
            content: "Đã tiếp nhận",
          },
          processed: {
            icon: <HiOutlineCheck className="w-6 h-6" />,
            content: "Đã xử lý",
          },
          no_process: {
            icon: <HiOutlineMinusCircle className="w-6 h-6" />,
            content: "Chưa xử lý",
          },
        },
      },
      author: {
        avatar: "/images/reflect/avatar.jpeg",
        name: "Doan Nhat",
        description: "User",
      },
    },
  ]

  return (
    <>
      <div className="w-full text-center sm:p-4 px-4 mb-12 md:max-w-[60%] mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wider !leading-tight mb-4">
          Một số <span className="text-primary-main font-bold uppercase">Phản ánh</span> mới nhất
        </h1>
        <p className="leading-relaxed text-sm md:text-base">
          Một số phản ánh mới nhất về sự cố cơ sở hạ tầng giao thông từ người dân.
        </p>
      </div>
      <div className="px-0 sm:px-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          loop={false}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {data.map(({ image, content, author }, index) => (
            <SwiperSlide key={index}>
              <div className="w-full mt-4 mb-20 md:mb-24 !h-full">
                <div className="h-full rounded-2xl p-8 bg-text-main/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 ml-auto mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                  </svg>
                  <div className="inline-flex items-center">
                    <Image
                      alt={image}
                      src={image}
                      width={200}
                      height={200}
                      className="w-1/2 h-1/2 rounded-md flex-shrink-0 object-cover object-center"
                    />
                    <div className="flex-grow flex flex-col pl-4 space-y-2">
                      <p className="leading-relaxed pl-4">{content.description}</p>
                      <p className="pl-4">
                        <span className="title-font font-medium">Mức độ: </span>
                        {content.level}
                      </p>
                      <p className="pl-4">
                        <span className="title-font font-medium">Trạng thái: </span>
                        <span className="flex text-md items-center space-x-2">
                          <span>{content.status.receiption.icon}</span>
                          <span>{content.status.receiption.content}</span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center">
                    <Image
                      alt={author.name}
                      src={author.avatar}
                      width={200}
                      height={200}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <div className="flex-grow flex flex-col pl-4">
                      <h6 className="title-font font-medium">{author.name}</h6>
                      <p className="text-sm">{author.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default ReflectSection
