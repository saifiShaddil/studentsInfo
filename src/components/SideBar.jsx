import React, { useContext } from "react"
import { SidebarItems } from "../routes"
import { NavLink } from "react-router-dom"
import { ContextOne } from "../store/reducer"

const default1 = "flex transition duration-300 ease-in-out items-center p-2 text-base font-normal  rounded-lg";

const SideBar = () => {
  const { state } = useContext(ContextOne)
  const { activeLink } = state
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto flex flex-col py-4 shadow px-3 bg-white rounded h-screen">
        <a
          href="https://flowbite.com/"
          className="flex items-center text-center w-full justify-center  mb-5"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="mr-3 h-16 rounded-full w-16 xs:w-8 xs:h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Flowbite
          </span>
        </a>
        <hr className="my-2 font-semibold text-xs bg-gray-300" />
        <ul className="space-y-2 mt-4">
          {SidebarItems.map((item, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className={`${default1} ${activeLink === item.name ? "text-blue-600 bg-blue-50" : "hover:text-blue-600 hover:bg-blue-50 text-gray-900"}`}
                >
                  <item.icon className="w-6 h-6 " />
                  <span className="ml-3">{item.name}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
        <div className="flex-1 h-full w-full flex items-end justify-center">
          <div className="flex flex-col w-full p-2 cursor-pointer">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="mr-3 h-12 rounded-full w-12 xs:w-8 xs:h-8"
              alt="Profole Image"
            />
            <h4 className="tracking-tight text-[#242424] text-md font-semibold whitespace-nowrap">
              Andy Samberg
            </h4>
            <p className="inline-block text-gray-400 text-sm font-semibold mt-0">
              andy.samberg@gmail.com
            </p>
            <button className="mt-1 hover:text-white hover:bg-[#2CA4D8] transition ease-in-out text-[#2CA4D8] border border-[#2CA4D8] text-xs font-semibold bg-transparent rounded-lg py-2">
              VIEW PROFILE
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideBar
