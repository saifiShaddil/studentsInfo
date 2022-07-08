import React from "react"
import { SidebarItems } from "../routes"

const SideBar = () => {
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto flex flex-col py-4 shadow px-3 bg-white rounded h-screen">
        <a
          href="https://flowbite.com/"
          className="flex items-center text-center w-full justify-center   mb-10"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="mr-3 h-16 rounded-full w-16 xs:w-8 xs:h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Flowbite
          </span>
        </a>
        <hr className="my-2 font-semibold text-xs bg-gray-300" />
        <ul className="space-y-2 mt-4">
          {SidebarItems.map((item, i) => {
            return (
              <li>
                <a
                  href={item.path}
                  className="flex hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white"
                >
                  <item.icon className="w-6 h-6 " />
                  <span className="ml-3">{item.name}</span>
                </a>
              </li>
            )
          })}
        </ul>
        <div className="flex-1 h-full w-full flex items-end justify-center">
          <div className="flex hover:bg-gray-100 transition delay-100 w-full justify-center p-2 cursor-pointer">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="mr-3 h-12 rounded-full w-12 xs:w-8 xs:h-8"
              alt="Profole Image"
            />
            <span className="self-center flex flex-col tracking-tight text-lg font-bold whitespace-nowrap">
              Profile Name
              <p className="inline-block text-sm font-semibold mt-0">
                View Profile
              </p>
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideBar
