import React from "react"

const Qualification = () => {
  return (
    <>
      <div className="flex flex-wrap px-4">
        <div className="flex-[50%]">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-wider !leading-tight">
            <span className="uppercase text-primary-main font-bold">Tin tức</span> tổng hợp
          </h3>
          <div className="h-[6px] bg-primary-main w-[100px] my-4" />
        </div>
      </div>
      <div className="flex flex-wrap px-4">
        <div className="flex-[100%] md:flex-[50%] mb-4 mb-lg-0">
          <div className="mb-4 md:pr-8 pr-0 py-4">
            <span className="text-base md:text-lg !font-medium text-gray-500">Thứ 2, 15/05/2023 </span>
            <h4 className="mt-2 mb-3 text-lg md:text-xl">Đường nối 2 khu di tích nứt gãy kinh hoàng</h4>
            <p className="text-sm md:text-base opacity-90 md:opacity-90 !leading-relaxed">
              Được xem là dự án trọng điểm có ý nghĩa hết sức quan trọng với bộ mặt kinh tế, văn hóa - xã hội của địa
              phương, tuy nhiên, chỉ một thời gian ngắn thông xe, tuyến đường đã hư hại nghiêm trọng sau những trận mưa
              lớn đầu tháng 10 vừa qua.
            </p>
          </div>
          <div className="md:pr-8 pr-0 py-4">
            <span className="text-base md:text-lg !font-medium text-gray-500">Thứ 4, 04/05/2023 </span>
            <h4 className="mt-2 mb-3 text-lg md:text-xl">
              Lâm Đồng: Thót tim lái xe qua trận địa "ổ gà, ổ voi" trên Quốc lộ 27
            </h4>
            <p className="text-sm md:text-base opacity-90 md:opacity-90 !leading-relaxed">
              Chi chít “ổ voi, ổ gà” trên tuyến Quốc lộ 27 (đoạn qua địa phận tỉnh Lâm Đồng dài gần 90km) khiến những
              người di chuyển qua đây gặp nhiều khó khăn, tiềm ẩn nguy cơ ngã xe, tai nạn.
            </p>
          </div>
        </div>
        <div className="flex-[100%] md:flex-[50%]">
          <div className="md:pr-8 pr-0 py-4">
            <span className="text-base md:text-lg !font-medium text-gray-500">Thứ 5, 30/04/2023 </span>
            <h4 className="mt-2 mb-3 text-lg md:text-xl">
              Bộ trưởng Giao thông: Chất lượng đường không tốt có thể phải ra tòa
            </h4>
            <p className="text-sm md:text-base opacity-90 md:opacity-90 !leading-relaxed">
              TP - “Nếu đường bộ xuống cấp sửa chữa không kịp thời, có ổ gà, ổ voi nếu xảy ra tai nạn có thể phải ra
              toà, bài học vẫn còn đó”, Bộ trưởng Giao thông Nguyễn Văn Thể lưu ý.
            </p>
          </div>
          <div className="md:pr-8 pr-0 py-4">
            <span className="text-base md:text-lg !font-medium text-gray-500">Thứ 2, 07/11/2022</span>
            <h4 className="mt-2 mb-3 text-lg md:text-xl">TP.HCM: Sụp 'ổ gà', người đàn ông chạy xe máy tử vong</h4>
            <p className="text-sm md:text-base opacity-90 md:opacity-90 !leading-relaxed">
              Trong lúc chạy xe máy trên đường, người đàn ông không may sụp 'ổ gà' té ngã, cả người lẫn phương tiện
              trượt dài trên đường.
            </p>
          </div>
        </div>
        <nav aria-label="Page navigation example" className="border-t-2 ">
          <ul className="list-style-none flex">
            <li>
              <a className="pointer-events-none relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-main transition-all duration-300 dark:text-main">
                Previous
              </a>
            </li>
            <li>
              <a
                className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-main transition-all duration-300 hover:bg-primary-main  dark:text-main dark:hover:bg-text-main dark:hover:text-main"
                href="#!"
              >
                1
              </a>
            </li>
            <li aria-current="page">
              <a
                className="relative block rounded-full bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-main transition-all duration-300"
                href="#!"
              >
                2
                <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                  (current)
                </span>
              </a>
            </li>
            <li>
              <a
                className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-main transition-all duration-300 hover:bg-primary-main dark:text-main dark:hover:bg-text-main dark:hover:text-main"
                href="#!"
              >
                3
              </a>
            </li>
            <li>
              <a
                className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-maintransition-all duration-300 hover:bg-primary-main dark:text-main dark:hover:bg-text-main dark:hover:text-main"
                href="#!"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Qualification
