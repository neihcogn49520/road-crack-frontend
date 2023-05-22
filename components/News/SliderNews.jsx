import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Link from "next/link"
import Image from "next/image"
import { data } from "autoprefixer"

const Intro = () => {
  const tintuc = [
    {
      image: "/images/news/tintuc-1.png",
    },
    {
      image: "/images/news/tintuc-2.png",
    },
    {
      image: "/images/news/tintuc-3.png",
    },
  ]
  return (
    <>
      <div className="w-full text-center sm:p-4 px-4 mb-12 md:max-w-[60%] mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wider !leading-tight mb-4">
          <span className="text-primary-main font-bold uppercase">Tin tức</span> mới nhất
        </h1>
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
          {tintuc.map(({ image }, index) => (
            <SwiperSlide key={index}>
              <div className="w-full mt-4 mb-20 md:mb-24 !h-full">
                <div className="h-full rounded-2xl p-2 bg-text-main/5">
                  <div className=" items-center">
                    <Image alt={image} src={image} width={400} height={600} className="w-full h-full rounded-md " />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="lg:flex-[33.33%] md:flex-[50%] flex-[100%] px-4 md:px-0">
            <div className="rounded-2xl overflow-hidden !leading-[0px] ">
              <Image
                src="/images/profile.jpg"
                width={400}
                height={800}
                alt="profile"
                loading="lazy"
                className="w-full "
              />
            </div>
            <div className="mt-6 text-center">
              <h4 className="mb-0 text-xl">Dr. Aman Sharma</h4>
              <p className="md:opacity-90 my-1 opacity-90">Med Expert Founder</p>
              <div className="flex justify-center flex-wrap items-center my-4">
                {socialLink.map(({ icon, url }, index) => (
                  <Link key={index} href={url}>
                    <div className="ml-2 p-1 cursor-pointer hover:text-main-main transition-colors">
                      {icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:flex-[66.66%] md:flex-[50%] flex-[100%] px-4">
            <div className="mt-4 md:mt-0 md:ml-2 lg:ml-4 ">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-wider !leading-tight">
                Introducing to myself
              </h2>
              <div className="divider my-4" />
              <p className="text-sm md:text-base !leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                tempore cumque voluptate beatae quis inventore sapiente nemo, a
                eligendi nostrum expedita veritatis neque incidunt ipsa
                doloribus provident ex, at ullam. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ipsam, perferendis officiis esse
                quae, nobis eius explicabo quidem? Officia accusamus repudiandae
                ea esse non reiciendis accusantium voluptates, facilis enim,
                corrupti eligendi?
              </p>
              <p className="text-sm md:text-base mb-8 !leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                recusandae veritatis minus optio quod obcaecati laborum
                temporibus, deleniti vero perferendis molestias, ducimus
                facilis, sunt minima. Tempora, amet quasi asperiores voluptas?
              </p>
              <Link href="/appointment">
              <button className="inline-flex items-center cursor-pointer group uppercase align-middle text-center transition-all select-none whitespace-nowrap py-2 px-6 text-sm leading-normal no-underline rounded-full bg-text-main dark:bg-text-main/5 hover:bg-transparent border-2 border-text-main dark:border-text-main/10 dark:hover:bg-primary-main hover:text-text-main text-white outline-none font-bold">

                Make an appoinment
                <HiOutlineArrowLongRight className="w-[18px] h-[18px] ml-2 group-hover:ml-4 transition-all duration-100" />
              </button>
            </Link>
            </div>
          </div> */}
      </div>
    </>
  )
}

export default Intro
