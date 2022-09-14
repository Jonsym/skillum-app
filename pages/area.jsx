import React from 'react'
import {CTA, Layout} from "../components";
import Link from 'next/link';


const area = () => {
  return (
    <Layout>
        <div className="max-w-5xl m-auto pt-16">
            <h1 className='text-2xl font-medium pt-10'>Eventos por venir</h1>

            {/* Cards-eventos */}
                <div className="cursos-card flex flex-col justify-start rounded">
                    <div className='invetory-desc flex flex-row'>
                        <img className='w-72 mr-6 rounded' src="https://www.skillum.mx/images/cursos-card1.png" alt="" />
                        <div class="cursos-dsc max-w-sm flex flex-col">
                            <ul class="tags flex justify-start leading-4 flex-wrap">
                                <li class="blue-tag">Seminario</li>
                                <li class="purple-tag">Introductorio</li>
                            </ul>
                            <h3 className='mt-4 text-xl font-bold'>Introducción a la capacitación presencial o en línea</h3>
                            <p className='mt-2 text-sm font-normal text-slate-300'>Aprende cómo emprender en el mundo del desarrollo humano y capacitación desde cero. Si buscas dedicarte a capacitar a otros este seminario es para tí.</p>
                            <Link href="/registro">
                                <a className="inline-flex items-center px-0 py-5 border border-transparent text-xs font-bold text-violet-700">
                                    VER DETALLE
                                    <span className="icon-arrow-right"/>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className='calendar-section pt-6'>
                        <ul className='calendar-items flex flex-row justify-evenly'>
                            <a href="#" className="no-underline">
                                <li className='box w-72 rounded-lg border-t-2 border-solid border-slate-100 flex flex-row items-center'>
                                    <div class="cal-square flex flex-col h-16 w-16 bg-slate-300 rounded-lg items-center justify-center mr-4">
                                        <h4 className='text-2xl'>24</h4>
                                        <p className='text-xs'>de mayo</p>
                                    </div>
                                    <ul>
                                        <li className='text-xs my-2 mx-0 flex items-center text-slate-500'>
                                            <i className=''></i>
                                            De 18:00 a 19:00 hrs
                                        </li>
                                        <li className='text-xs my-2 mx-0 flex items-center text-slate-500'>
                                            <i className=''></i>
                                            Videollamada
                                        </li>
                                    </ul>
                                </li>
                            </a>
                            <a href="#" className="no-underline">
                                <li className='box w-72 rounded-lg border-t-2 border-solid border-slate-100 flex flex-row items-center'>
                                    <div class="flex flex-col h-16 w-16 bg-purple-100 rounded-lg items-center justify-center mr-4">
                                        <h4 className='text-2xl'>25</h4>
                                        <p className='text-xs'>de mayo</p>
                                    </div>
                                    <ul>
                                        <li className='text-xs my-2 mx-0 flex items-center text-slate-500'>
                                            <i className=''></i>
                                            De 18:00 a 19:00 hrs
                                        </li>
                                        <li className='text-xs my-2 mx-0 flex items-center text-slate-500'>
                                            <i className=''></i>
                                            Videollamada
                                        </li>
                                    </ul>
                                </li>
                            </a>
                            <a href="#" className="no-underline">
                                <li className='box w-72 rounded-lg border-t-2 border-solid border-slate-100 flex flex-row items-center'>
                                    <div class="cal-square flex flex-col h-16 w-16 bg-slate-300 rounded-lg items-center justify-center mr-4">
                                        <h4 className='text-2xl'>26</h4>
                                        <p className='text-xs'>de mayo</p>
                                    </div>
                                    <ul>
                                        <li className='text-xs my-2 mx-0 flex items-center text-slate-500'>
                                            <i className=''></i>
                                            De 18:00 a 19:00 hrs
                                        </li>
                                        <li className='text-xs my-2 mx-0 flex items-center text-slate-500'>
                                            <i className=''></i>
                                            Videollamada
                                        </li>
                                    </ul>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div>
                        <p className='font-light text-xs m-auto pt-5'>Se habilitarán las sesiones 30 minutos antes de la hora de iniciar sesion</p>
                    </div>
                </div>

            <section className="cursos wrapper pb-10">
                <h3 className='text-2xl font-medium'>Todos tus cursos</h3>

                <div className="cursos-card drop-shadow">
                    <img src="https://www.skillum.mx/images/cursos-card2.png" alt=""/>
                    <div className="cursos-dsc">
                        <ul className="tags">
                            <li className="blue-tag">Curso</li>
                            <li className="purple-tag">Introductorio</li>
                        </ul>
                        <h3>Técnicas de gestión efectiva del tiempo</h3>
                        <p>Aprende herramientas y técnicas de organización para una gestión eficaz de tu tiempo
                             y puedas desarrollar tus objetivos y tus metas.</p>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-blue-700 dark:text-black">50%</span>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-300 h-2.5 rounded-full"></div>
                        </div>
                            
                        </div>
                        <Link href="/registro">
                            <a className="inline-flex items-center px-0 py-5 border border-transparent text-xs font-bold text-violet-700">
                                CONTINUAR CON LA CLASE 3.1
                                <span className="icon-arrow-right"/>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="cursos-card drop-shadow">
                    <img src="https://www.skillum.mx/images/cursos-card3.png" alt=""/>
                    <div className="cursos-dsc">
                        <ul className="tags">
                            <li className="blue-tag">Curso</li>
                            <li className="purple-tag">Introductorio</li>
                        </ul>
                        <h3>Técnicas de gestión efectiva del tiempo</h3>
                        <p>Aprende herramientas y técnicas de organización para una gestión eficaz de tu tiempo
                             y puedas desarrollar tus objetivos y tus metas.</p>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-blue-700 dark:text-black">50%</span>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-300 h-2.5 rounded-full"></div>
                        </div>
                            
                        </div>
                        <Link href="/registro">
                            <a className="inline-flex items-center px-0 py-5 border border-transparent text-xs font-bold text-violet-700">
                                CONTINUAR CON LA CLASE 3.1
                                <span className="icon-arrow-right"/>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Community section */}
            <CTA/>
        </div>

    </Layout>
  )
}

export default area