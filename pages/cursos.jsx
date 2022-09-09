import React from 'react'
import Link from 'next/link';
import {CTA, Layout} from "../components";

const cursos = () => {
  return (
    <Layout>
        <div className="pt-44">
            <section className='cursos-wrapper max-w-5xl my-0 mx-auto'>

                {/* Sidebar */}
                    <div className='w-full sm:w-3/12 lg:w-2/12 tex-left absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out z-40'>
                        <div class="block overflow-y-auto pt-5 pb-4 h-screen sticky top-0  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 ">
                            <div class="mb-6">
                                <div class="flex justify-between ">
                                    <p class="text-blueGray-700 hover:text-blueGray-800 text-xs uppercase font-bold block py-1 px-4 mb-2">Cursos</p>
                                </div>
                                <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                                    <li class="mb-0 mt-0">
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Educación</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Seguridad industrial</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Salud y medicina</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Crecimiento</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Softkills</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Esta es otra categoria</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Esta es una categoria</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Nueva categoria</a>
                                    </li>
                                    <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                </ul>
                            </div>
                            <div class="mb-6">
                                <div class="flex justify-between ">
                                    <p class="text-blueGray-700 hover:text-blueGray-800 text-xs uppercase font-bold block py-1 px-4 mb-2">Destacados</p>
                                </div>
                                <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                                    <li class="mb-0 mt-0">
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Con promociones</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Cursos nuevos</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Cursos populares</a>
                                    </li>
                                    <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                </ul>
                            </div>
                            <div class="mb-6">
                                <div class="flex justify-between ">
                                    <p class="text-blueGray-700 hover:text-blueGray-800 text-xs uppercase font-bold block py-1 px-4 mb-2">Tipo de contenido</p>
                                </div>
                                <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                                    <li class="mb-0 mt-0">
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Cursos</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Seminarios</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Alineaciones</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Certificaciones</a>
                                    </li>
                                    <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                </ul>
                            </div>
                            <div class="mb-6">
                                <div class="flex justify-between ">
                                    <p class="text-blueGray-700 hover:text-blueGray-800 text-xs uppercase font-bold block py-1 px-4 mb-2">Nivel</p>
                                </div>
                                <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                                    <li class="mb-0 mt-0">
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Introductorio</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Intermedio</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Avanzado</a>
                                        <a href='' class="hover:text-blue-700 text-sm block leading-relaxed mx-4 no-underline">Especializado</a>
                                    </li>
                                    <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                </ul>
                            </div>
                        </div>
                    </div> 
                
                {/* Card-cursos */}
                <h1 className='text-2xl font-medium'>Cursos</h1>
                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                <h2 className='text-xl font-medium pt-7 pb-7'>Cursos de educación</h2>

                <div className='grid grid-cols-4 gap-32'>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card2.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card3.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card4.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>
                      
                </div>

                <h2 className='text-xl font-medium pt-7 pb-7'>Cursos de seguridad industrial</h2>

                <div className='grid grid-cols-4 gap-32'>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card7.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card6.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card5.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>
                      
                </div>

                <h2 className='text-xl font-medium pt-7 pb-7'>Cursos de salud y medicina</h2>

                <div className='grid grid-cols-4 gap-32'>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card9.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card1.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card1.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>
                      
                </div>

                <h2 className='text-xl font-medium pt-7 pb-7'>Cursos de crecimiento</h2>

                <div className='grid grid-cols-4 gap-32'>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card1.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card1.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card1.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>
                      
                </div>

                <h2 className='text-xl font-medium pt-7 pb-7'>Cursos de softskills</h2>

                <div className='grid grid-cols-4 gap-32'>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card1.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card1.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>
                    <div className='w-64 rounded overflow-hidden shadow-lg'>
                        <img className='w-56 mx-4 my-5 rounded' src="https://www.skillum.mx/images/cursos-card1.png" alt="" />
                        <p className='mx-4 my-5'>Por Abel Arteaga</p>
                        <h3 className='mx-4 my-5 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                        <p className='mx-4 my-5 text-sm font-normal text-slate-500'>
                            Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                        </p>
                        <ul className='price-tag mx-4 my-5 mt-auto block text-xs font-normal text-emerald-600'>
                        100% dto.  
                        <span className='line-through'>$ 2599 MXN</span>
                        </ul>
                        <button className='curso-button mx-4 my-5 bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            3,850 MXN
                        </button>
                    </div>     
                </div>

                <h1 className='text-5xl pt-32 pb-8'>Conoce más de Skillum</h1>

                <div className='grid grid-cols-3 gap-4'>
                    <div class="w-80 p-px rounded overflow-hidden shadow-lg">
                        <img class="w-full" src="https://www.skillum.mx/images/cursos-card2.png" alt="" />
                        <div className='mx-4 my-5 flex'>
                            <img className='flex pb-4 mr-1' src="https://www.skillum.mx/images/miniatura.png" alt="" />
                            <p className='mt-2 font-normal text-slate-400 items-center'>Por Abel Arteaga</p>
                            <ul className="tags flex justify-start leading-4 flex-col">
                                <li className="green-tag bg-green-300 text-green-700 flex py-1 px-2.5 rounded-2xl text-sm font-semibold">Gratuito</li>
                            </ul>
                        </div>
                        <div class="px-3">
                            <div class="mx-4 my-5 text-xl font-normal mb-2">Descubre tu potencial de forma metodica</div>
                            <p class="mx-4 my-5 text-sm font-normal text-slate-500">
                            Consultor de adopción tecnológica en etornos educativos. Crea innovación en metodologías, ambientes y recursos de educación. 
                            </p>
                        </div>
                    </div>

                    <div class="w-80 p-px rounded overflow-hidden shadow-lg">
                        <img class="w-full" src="https://www.skillum.mx/images/cursos-card2.png" alt="" />
                        <div className='mx-4 my-5 flex'>
                            <img className='flex pb-4 mr-1' src="https://www.skillum.mx/images/miniatura.png" alt="" />
                            <p className='mt-2 font-normal text-slate-400 items-center'>Por Abel Arteaga</p>
                            <ul className="tags flex justify-start leading-4 flex-col">
                                <li className="green-tag bg-green-300 text-green-700 flex py-1 px-2.5 rounded-2xl text-sm font-semibold">Gratuito</li>
                            </ul>
                        </div>
                        <div class="px-3">
                            <div class="mx-4 my-5 text-xl font-normal mb-2">Descubre tu potencial de forma metodica</div>
                            <p class="mx-4 my-5 text-sm font-normal text-slate-500">
                            Consultor de adopción tecnológica en etornos educativos. Crea innovación en metodologías, ambientes y recursos de educación. 
                            </p>
                        </div>
                    </div>

                    <div class="w-80 p-px rounded overflow-hidden shadow-lg">
                        <img class="w-full" src="https://www.skillum.mx/images/cursos-card2.png" alt="" />
                        <div className='mx-4 my-5 flex'>
                            <img className='flex pb-4 mr-1' src="https://www.skillum.mx/images/miniatura.png" alt="" />
                            <p className='mt-2 font-normal text-slate-400 items-center'>Por Abel Arteaga</p>
                            <ul className="tags flex justify-start leading-4 flex-col">
                                <li className="green-tag bg-green-300 text-green-700 flex py-1 px-2.5 rounded-2xl text-sm font-semibold">Gratuito</li>
                            </ul>
                        </div>
                        <div class="px-3">
                            <div class="mx-4 my-5 text-xl font-normal mb-2">Descubre tu potencial de forma metodica</div>
                            <p class="mx-4 my-5 text-sm font-normal text-slate-500">
                            Consultor de adopción tecnológica en etornos educativos. Crea innovación en metodologías, ambientes y recursos de educación. 
                            </p>
                        </div>
                    </div>
                </div>
                  
            </section>

            {/* Community section */}
            <CTA/>
        </div>
    </Layout>
  )
}

export default cursos