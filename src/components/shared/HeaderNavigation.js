import React from 'react';
import {NavLink, Link} from "react-router-dom";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const HeaderNavigation = () => {
    const userName = localStorage.getItem('user-info')
    console.log(userName)
    return (
        <>
            <Disclosure as="nav" className="bg-white border-b-2 border-blue-400">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                            <div className="flex h-16 justify-between">
                                <div className="flex px-2 lg:px-0">
                                    <div className="flex flex-shrink-0 items-center">
                                        <NavLink to="/" className="font-bold text-blue-400">VenueFinder</NavLink>
                                    </div>
                                    <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                                        <NavLink
                                            to="/"
                                            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                        >
                                            Home
                                        </NavLink>
                                        <NavLink
                                            to="/createvenue"
                                            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                        >
                                            Create Venue
                                        </NavLink>
                                        <NavLink
                                            to="/profilepage"
                                            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                        >
                                            Hey👋🏼 {userName}
                                        </NavLink>
                                        <NavLink
                                            to="/signin"
                                            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-red-500 hover:text-red-500 hover:border-red-500"
                                        >
                                            Logout
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                                </div>
                                <div className="flex items-center lg:hidden">
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                                    <button
                                        type="button"
                                        className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                    </button>
                                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                                        <div>
                                            <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                <span className="sr-only">Open user menu</span>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                        <Disclosure.Panel className="lg:hidden">
                            <div className="space-y-1 pb-3 pt-2 absolute w-full bg-gray-50 z-50">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block border-l-4 hover:border-gray-300 border-transparent  py-2 pl-3 pr-4 text-base font-medium text-gray-600"
                                ><NavLink to="/">Home</NavLink>
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                                ><NavLink to="/createvenue">Create Venue</NavLink>
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                                >
                                    <NavLink to="/">Projects</NavLink>
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                                >
                                    <NavLink to="/profilepage">Hey👋🏼 {userName}</NavLink>
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-red-600 hover:text-red-700 hover:border-gray-300 hover:bg-red-100"
                                >
                                    <NavLink to="/signin" className="hover:text-red-500">Logout</NavLink>
                                </Disclosure.Button>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
};

export default HeaderNavigation;
