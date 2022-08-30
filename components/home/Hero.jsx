import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

export const Hero = () => {
    return (
        <div className="relative text-darkBlue overflow-hidden bg-transparent" style={{ backgroundColor: '#E0F3FF' }}>
            <main>
                <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden" style={{ backgroundColor: '#E0F3FF' }}>
                    <div className="mx-auto max-w-5xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                <div className="lg:py-24">
                                    <div
                                        className="sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                                    >
                                        <span className="py-0.5 leading-5 tracking-widest">
                                          TU ACADEMIA EN LINEA
                                        </span>
                                    </div>
                                    <h1 className="mt-4 text-4xl tracking-wide font-bold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl">
                                        <span className="block pb-2">Potencia</span>
                                        <span>tus habilidades</span>
                                    </h1>
                                    <p className="mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        En Skillum desarrolla tus habilidades con nuestros cursos y programas. Aprende en un espacio flexible con expertos.
                                    </p>
                                    <div className="mt-10 sm:mt-12">
                                        <form action="components/home/Hero#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                                            <div className="sm:flex">
                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="block w-full text-white py-3 px-4 rounded-md shadow bg-blue-300 font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                                                    >
                                                        Ver los cursos
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover"
                                        src="https://www.skillum.mx/images/hero-image1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
