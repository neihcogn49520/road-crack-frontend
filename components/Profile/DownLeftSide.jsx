import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { HiDownload } from "react-icons/hi"

const DownLeftSide = () => {
  const selectDropdownRef = useRef()
  const buttonRef = useRef()

  useEffect(() => {
    const handleClick = (event) => {
      if (
        selectDropdownRef.current &&
        !selectDropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        handleSelectClose()
      }
    }
    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [selectDropdownRef])

  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    subject: { image: "/images/reflect/avatar.jpeg", title: "Emily" },
    message: "",
  }
  const [userData, setUserData] = useState(initialState)
  const { firstname, lastname, subject, email, phone, message } = userData
  const subjectOptions = [
    { image: "/images/reflect/avatar.jpeg", title: "John Doe" },
    { image: "/images/reflect/avatar.jpeg", title: "Emily" },
    { image: "/images/reflect/avatar.jpeg", title: "Calen Fall" },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  const [selectOpen, setSelectOpen] = useState(false)
  const handleSelectOpen = () => setSelectOpen(true)
  const handleSelectClose = (index) => {
    if (index !== undefined) {
      setUserData({ ...userData, subject: subjectOptions[index] })
    }
    setSelectOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefualt()
    //login here
  }

  return (
    <div className="lg:w-2/3">
      <div className="flex-[50%] p-2">
        <h3 className="text-xl md:text-2xl tracking-wider !leading-tight">Thông tin cá nhân</h3>
        <div className="h-[6px] bg-primary-main w-[100px] mt-4 mb-8" />
        <form className="flex flex-wrap" noValidate onSubmit={handleSubmit}>
          <div className="md:w-1/2 w-full py-2 pr-4 mb-2">
            <label for="firstname" className="block mb-3 px-1 md:text-sm  text-base font-medium capitalize">
              Họ <span className="text-red-pastel-600"> *</span>
            </label>
            <input
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={handleInputChange}
              placeholder="Nguyen"
              className="py-2.5 px-4 text-text-main/80 focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 outline-none w-full md:text-sm  text-base leading-normal border border-text-main/10 bg-background-paper rounded-lg"
            />
          </div>

          <div className="md:w-1/2 w-full py-2 pr-4 mb-2">
            <label for="lastname" className="block mb-3 px-1 md:text-sm text-base font-medium capitalize">
              Tên <span className="text-red-pastel-600"> *</span>
            </label>
            <input
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={handleInputChange}
              placeholder="Hien"
              className="py-2.5 px-4 text-text-main/80 focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 outline-none w-full md:text-sm  text-base leading-normal border border-text-main/10 bg-background-paper rounded-lg"
            />
          </div>

          <div className="w-full py-2 pr-4 mb-2">
            <label for="email" className="block mb-3 px-1 md:text-sm text-base font-medium capitalize">
              Email <span className="text-red-pastel-600"> *</span>
            </label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="E-mail"
              className="py-2.5 px-4 text-text-main/80 focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 outline-none w-full md:text-sm  text-base leading-normal border border-text-main/10 bg-background-paper rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 py-2 pr-4 mb-2">
            <label for="phone" className="block mb-3 px-1 md:text-sm text-base font-medium capitalize">
              Số điện thoại <span className="text-red-pastel-600"> *</span>
            </label>
            <input
              id="phone"
              name="phone"
              value={phone}
              onChange={handleInputChange}
              placeholder="0894261238"
              className="py-2.5 px-4 text-text-main/80 focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 outline-none w-full md:text-sm  text-base leading-normal border border-text-main/10 bg-background-paper rounded-lg"
            />
          </div>

          {/* <div className="w-full md:w-1/2 py-2 pr-4 mb-2">
            <label for="subject" className="block mb-3 px-1 md:text-sm text-base font-medium capitalize">
              Select a subject
            </label>
            <div ref={selectDropdownRef} className="relative mt-1 text-sm md:text-base">
              <button
                type="button"
                className="relative w-full cursor-default rounded-md border border-text-main/10 bg-background-paper group py-2 pl-3 pr-10 text-left shadow-sm focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 sm:text-sm"
                onClick={handleSelectOpen}
                ref={buttonRef}
              >
                <span className="flex items-center">
                  <Image
                    src={subject.image}
                    alt={subject.image}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-6 w-6 flex-shrink-0 rounded-full object-cover object-center"
                  />
                  <span className="ml-3 block truncate">{subject.title}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2 opacity-50">
                  <HiOutlineChevronDown className="w-4 h-4" />
                </span>
              </button>
              {selectOpen && (
                <ul
                  className="transition-all absolute z-10 mt-1 max-h-56 w-full border border-text-main/10 bg-background-paper overflow-auto rounded-lg text-base shadow-lg outline-none sm:text-sm"
                  tabIndex="-1"
                  role="listbox"
                >
                  {subjectOptions.map(({ image, title }, index) => (
                    <li
                      className="relative cursor-default text-sm  select-none py-2 pl-3 pr-9 hover:bg-white/5 rounded-lg"
                      role="option"
                      onClick={() => handleSelectClose(index)}
                    >
                      <div className="flex items-center">
                        <Image
                          src={image}
                          alt="left-image"
                          width={800}
                          height={800}
                          loading="lazy"
                          className="h-6 w-6 flex-shrink-0 rounded-full object-cover object-center"
                        />
                        <span className="ml-3 block">{title}</span>
                      </div>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 opacity-50">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/1000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div> */}

          <div className="w-full py-2 pr-4 mb-2">
            <label htmlFor="message" className="block mb-4 px-1 md:text-sm  text-base font-medium capitalize">
              Thông tin khác
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              rows={7}
              cols={20}
              onChange={handleInputChange}
              placeholder="Thông tin khác"
              className="py-2.5 px-4 text-text-main/80 focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 resize-none outline-none w-full md:text-sm  text-base leading-normal border border-text-main/10 bg-background-paper rounded-lg"
            />
          </div>

          <div className="w-full space-x-3">
            <button
              type="submit"
              style={{ opacity: 75 }}
              disabled={Boolean(
                !firstname ||
                  !email ||
                  !email.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  ) ||
                  !phone ||
                  !phone.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) ||
                  !message
              )}
              className="inline-flex my-3 items-center cursor-pointer disabled:cursor-default group uppercase align-middle text-center transition-all select-none whitespace-nowrap py-2 px-6 md:text-sm  text-base leading-normal no-underline rounded-full bg-text-main hover:bg-transparent disabled:bg-background-paper disabled:text-text-main/80 disabled:border-transparent border-2 border-primary-main hover:text-primary-main text-white outline-none font-bold"
            >
              Lưu
              <HiDownload className="w-[18px] h-[18px] ml-2 group-hover:ml-4 group-disabled:ml-2 transition-all duration-100" />
            </button>
            <button className="inline-flex items-center cursor-pointer group uppercase align-middle text-center transition-all select-none whitespace-nowrap py-2 px-6 text-sm leading-normal no-underline rounded-full bg-red-pastel-600 dark:bg-text-main/5 hover:bg-transparent border-2 border-red-pastel-600 dark:border-text-main/10 dark:hover:bg-primary-main hover:text-red-pastel-600 text-white outline-none font-bold">
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DownLeftSide
