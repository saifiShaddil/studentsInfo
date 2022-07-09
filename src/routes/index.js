import Students from "../Pages/Students"
import Courses from "../Pages/Courses"
import Notifications from "../Pages/Notifications"
import Classes from "../Pages/Classes"
import NoticeBoard from "../Pages/NoticeBoard"
import Dashboard from "../Pages/Dashboard"

// Icons
import { GiAerialSignal, GiBookmarklet } from "react-icons/gi"
import { GoBook } from "react-icons/go"
import { TiGroupOutline } from "react-icons/ti"
import { BiChalkboard, BiBell } from "react-icons/bi"
import { MdOutlineDashboard, MdOutlineContactPage } from "react-icons/md"
import Exam from "../Pages/Exam"
import LiveClasses from "../Pages/LiveClasses"
import Results from "../Pages/Results"

const allRoutes = [
  { path: "/", element: Students },
  { path: "/courses", element: Courses },
  { path: "/notifications", element: Notifications },
  { path: "/classes", element: Classes },
  { path: "/exam", element: Exam },
  { path: "/dashboard", element: Dashboard },
  { path: "/live-classes", element: LiveClasses },
  { path: "/notice-board", element: NoticeBoard },
  { path: "/results", element: Results },
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
