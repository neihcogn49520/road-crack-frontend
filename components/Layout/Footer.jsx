import React from "react"
import Link from "next/link"
import { FaFacebookF, FaGoogle } from "react-icons/fa"
import Image from "next/image"

const Footer = () => {
  const socialLink = [
    {
      icon: <FaFacebookF className="w-[16px] h-[16px]" />,
      url: "https://www.facebook.com/BoMonCNTTUTCHCMC",
    },
    {
      icon: <FaGoogle className="w-[16px] h-[16px]" />,
      url: "https://utc2.edu.vn/",
    },
  ]
  const data = {
    "Hỗ trợ": [{ text: "FB: Bộ môn Công nghệ thông tin UTC2" }, { text: "Email: bmcnttutc2@utc2.edu.vn" }],
    "Liên kết": [
      { text: "Điều khoản & điều kiện", url: "/terms" },
      { text: "Chính sách bảo mật", url: "/policy" },
      { text: "Hỗ trợ", url: "/faq" },
    ],
    "Địa chỉ": [{ text: "451 Lê Văn Việt, phường Tăng Nhơn Phú A, Tp Thủ Đức, TPHCM" }],
  }

  return (
    <footer className="body-font bg-text-main/5 mt-8 md:font-medium">
      <div className="max-w-[1140px] px-4 py-8 md:py-20 mx-auto flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-80 flex-shrink-0 mx-5">
          <div className="flex w-full justify-center md:justify-start md:w-auto cursor-pointer gap-2 items-center">
            <Link href="/">
              <Image
                width={500}
                height={500}
                alt="logo"
                src="/roadbg.png"
                className="rounded-[50%] w-[45px] h-[45px]"
              />
              <h3 className="text-xl">PHẢN ÁNH ĐƯỜNG PHỐ</h3>
            </Link>
          </div>
          <p className="mt-3 text-sm sm:text-md md:text-base !font-normal w-2/3">
            Phân tích các phản ánh về sự cố cơ sở hạ tầng giao thông đô thị
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10">
          {Object.keys(data).map((title, index) => (
            <div key={index} className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="tracking-widest text-xl mb-8 relative after:content-start after:absolute after:bottom-0 after:left-0 after:right-0 after:w-[15%] after:mb-[-12px] after:h-[4px] after:bg-primary-main">
                {title}
              </h2>
              <nav className="list-none mb-10">
                {data[title].map(({ text, url }, index) =>
                  url ? (
                    <Link key={index} href={url}>
                      <li>
                        <div className="text-text-main/75 py-0.5 text-sm sm:text-md hover:text-text-main cursor-pointer">
                          {text}
                        </div>
                      </li>
                    </Link>
                  ) : (
                    <li>
                      <div className="text-text-main/75 cursor-default py-0.5 text-sm sm:text-md">{text}</div>
                    </li>
                  )
                )}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-2 border-text-main/5">
        <div className="max-w-[1140px] mx-auto py-4 px-10 flex flex-wrap flex-col sm:flex-row">
          <div className="py-3 uppercase text-sm md:text-base text-center font-semibold">
            copyright &copy; 2023
            <span className="mx-2">|</span>
            IT UTC2
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center items-center space-x-3">
            {socialLink.map(({ icon, url }, index) => (
              <Link key={index} href={url}>
                <div className="hover:text-main-main opacity-70 hover:opacity-100 cursor-pointer">{icon}</div>
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
