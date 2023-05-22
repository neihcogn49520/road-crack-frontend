import { useEffect, useReducer, useState } from "react"
import { useRouter } from "next/router"
import Input from "/components/Ui/Input"
import Image from "next/image"
import PasswordInput from "/components/Ui/PasswordInput"
import { Transition } from "@headlessui/react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <section className=" bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white-blue-100 grid grid-cols-2 rounded-2xl shadow-lg max-w-4xl h-full p-5 items-center">
        {/* Login */}
        <Transition
          show={true}
          enter="transition-all ease-in-out duration-500"
          enterFrom="transform translate-x-full"
          enterTo="transform translate-x-0"
          leave="transition-all ease-in-out duration-500"
          leaveFrom="transform translate-x-0"
          leaveTo="transform translate-x-full"
        >
          {/* Login Form */}
          <div className="form-container md:w-full p-2">
            <h2 className=" font-bold text-3xl text-deep-blue">Đăng nhập</h2>
            <p className="text-sm mt-4 text-[#ffb703] font-semibold text-y">
              Chào mừng đến với website Road crack, đăng nhập để theo dõi những phản ánh cơ sở hạ tầng đường phố của bạn
            </p>
            <form action="" className="flex flex-col gap-4 mt-8">
              <Input
                name="phone"
                type="number"
                placeholder="Số điện thoại"
                className="w-full p-2 border-slate-400 active:translate-y-1"
              />
              <div className=" relative ">
                <PasswordInput placeholder="Mật khẩu" className="w-full p-2 border-slate-400" />
              </div>
              <button
                type="submit"
                className="p-2 bg-navy-blue-400 text-white rounded-md hover:bg-deep-blue duration-300"
              >
                Đăng nhập
              </button>
            </form>
            <div className="mt-10 grid grid-cols-3 items-center text-white-blue-400">
              <hr className=" border-gray-400" />
              <p className="text-center text-sm">HOẶC</p>
              <hr className=" border-gray-400" />
            </div>
            <button className=" bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-md">
              <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Đăng nhập với Google
            </button>
            <p className="mt-4 text-xs border-b border-gray-400 py-4">Quên mật khẩu?</p>
            <div className="mt-3 text-xs flex justify-between items-center">
              <p>Bạn chưa có tài khoản? Tạo tài khoản mới</p>
              <Link href="/signup" className="py-2 px-5 bg-white border rounded-xl hover:bg-white-blue-30">
                Đăng ký
              </Link>
            </div>
          </div>
        </Transition>
        <Transition
          show={true}
          enter="transition-all ease-in-out duration-500"
          enterFrom="transform -translate-x-full"
          enterTo="transform translate-x-0"
          leave="transition-all ease-in-out duration-500"
          leaveFrom="transform translate-x-0"
          leaveTo="transform -translate-x-full"
        >
          <div className="image-container md:block hidden w-full p-4 right-0">
            <Image src="/roadbg.png" alt="login-image" width={400} height={600} className="align-middle rounded-2xl" />
          </div>
        </Transition>
      </div>
    </section>
  )
}
