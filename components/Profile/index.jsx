import React from "react"

import { Section, PageBanner } from "../"
import DownLeftSide from "./DownLeftSide"
import DownRightSide from "./DownRightSide"

const Profile = () => {
  return (
    <div>
      <PageBanner title="Hồ sơ" description="Chỉnh sửa và xem thông tin tài khoản của bạn." path="Hồ sơ" />
      <Section>
        <div className="flex flex-wrap">
          <DownLeftSide />
          <DownRightSide />
        </div>
      </Section>
    </div>
  )
}

export default Profile
