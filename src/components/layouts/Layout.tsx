import { ReactNode } from "react"
import Footer from "../Footer"
import Header from "../Header"
import ScrollToTop from "../ux/ScrollToTop"
import WhatsApp from "../ux/WhatsApp"
import { Outlet } from "react-router-dom"

interface LayoutProps {
  readonly children?: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header></Header>
      <ScrollToTop></ScrollToTop>
      <main>
        {
          children || <Outlet />
        }
      </main>
      <WhatsApp></WhatsApp>
      <Footer></Footer>
    </>
  )
}

export default Layout