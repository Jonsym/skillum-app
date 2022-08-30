import {Popover, Transition} from "@headlessui/react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import {Fragment} from "react";
import {Logo} from './Logo';

const navigation = [
    { name: 'CURSOS', href: '/cursos' },
    { name: 'CONTACTO', href: '/contacto' },
]

export const Header = () => {
    return (
        <Popover as="header" className="relative">
            <div className="absolute z-20 w-full py-5">
                <nav
                    className="relative max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6"
                    aria-label="Global"
                >
                    <div className="flex items-center flex-1">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <Logo />
                            <div className="-mr-2 flex items-center md:hidden">
                                <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="hidden space-x-8 md:flex md:ml-10">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-xs font-medium hover:text-gray-300">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <a href="components/home/Hero#" className="text-xs font-medium hover:text-gray-300">
                            ENTRAR
                        </a>
                        <a
                            href="components/home/Hero#"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium color-blue"
                        >
                            REGISTRATE GRATIS
                            <span className="icon-arrow-right"/>
                        </a>
                    </div>
                </nav>
            </div>

            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                                <img
                                    className="h-8 w-auto"
                                    src="https://www.skillum.mx/images/Logo.png"
                                    alt=""
                                />
                            </div>
                            <div className="-mr-2">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="pt-5 pb-6">
                            <div className="px-2 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="mt-6 px-5">
                                <a
                                    href="components/home/Hero#"
                                    className="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                                >
                                    REGISTRATE GRATIS
                                </a>
                            </div>
                            <div className="mt-6 px-5">
                                <p className="text-center text-base font-medium text-gray-500">
                                    {' '}
                                    <a href="components/home/Hero#" className="text-gray-900 hover:underline">
                                        ENTRAR
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}