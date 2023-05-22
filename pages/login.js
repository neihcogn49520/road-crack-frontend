import React from "react"
import Seo from "../components/Customs/Seo"
import { Login as LoginComponent } from "../components"

const Login = () => {
  return (
    <Seo title="Đăng nhập" description="">
      <LoginComponent />
    </Seo>
  )
}

export default Login
