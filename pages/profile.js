import React from "react"
import Seo from "../components/Customs/Seo"
import { Profile as ProfileComponent } from "../components"

const Profile = () => {
  return (
    <Seo title="Profile" description="">
      <ProfileComponent />
    </Seo>
  )
}

export default Profile
