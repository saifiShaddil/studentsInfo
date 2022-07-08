import Students from "../Pages/Students"
import Courses from "../Pages/Courses"
import Notifications from "../Pages/Notifications"
import Classes from "../Pages/Classes"
import Category from "../Pages/LiveClasses"
import Dashboard from "../Pages/Dashboard"

// Icons
import { GiAerialSignal, GiBookmarklet } from "react-icons/gi"
import { GoBook } from "react-icons/go"
import { TiGroupOutline } from "react-icons/ti"
import { BiChalkboard, BiBell } from "react-icons/bi"
import { MdOutlineDashboard, MdOutlineContactPage } from "react-icons/md"

const allRoutes = [
  { path: "/", element: Students },
  { path: "/courses", element: Courses },
  { path: "/notifications", element: Notifications },
  { path: "/classes", element: Classes },
  { path: "/category", element: Category },
  { path: "/dashboard", element: Dashboard },
]

const SidebarItems = [
  { path: "/dashboard", name: "Dashboard", icon: MdOutlineDashboard },
  { path: "/courses", name: "Courses", icon: GoBook },
  { path: "/", name: "Students", icon: TiGroupOutline },
  { path: "/exam", name: "Exam", icon: GiBookmarklet },
  { path: "/results", name: "Results", icon: MdOutlineContactPage },
  { path: "/notice-board", name: "Notice Board", icon: BiChalkboard },
  { path: "/live-classes", name: "Live Classes", icon: GiAerialSignal },
  { path: "/notifications", name: "Notifications", icon: BiBell },
]

export { allRoutes, SidebarItems }
