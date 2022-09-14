import React from 'react'
import { CTA, Layout } from '../components';
import Link from 'next/link';
import Image from "next/image";
import LogoBW from '../assets/Logo-BW.png'

const profesor = () => {
  return (
    <Layout>
        <div className="folder-address wrapper flex pt-10 mt-28 mb-5 border-b border-gray-400 pb-5">
            <Image src={LogoBW} alt="Logo" width={16} height={16}/>
            <i className="material-icons" id="plus-material">chevron_right</i>
            <a href="cursos.php">Profesores</a>
            <i className="material-icons" id="plus-material">chevron_right</i>
            <a href="cursos.php">Abel Arteaga</a>   
        </div>

            <div className='bg-gradient-to-r from-indigo-900 to-violet-900 h-56'>
                <div className="w-full grid grid-cols-6 p-5 gap-y-2">
                    <div>
                        <img className='h-full' src="https://www.skillum.mx/images/miniatura.png" alt="" />
                    </div>
                    <div class="col-span-5 md:col-span-4 ml-4">
                        <div className='flex flex-row py-3'>
                            <p class="rounded-lg text-orange-700 font-bold bg-orange-300  py-1 px-3 text-sm w-fit h-fit mr-2"> Profesor </p> 
                            <p class="rounded-lg text-green-700 font-bold bg-green-300  py-1 px-3 text-sm w-fit h-fit"> Educación </p>
                        </div>
                        <ul className="text-white">
                            <li className='text-3xl font-semibold'>Abel Arteaga</li>
                            <li className='text-lg'>Master en Gestión de Proyectos</li>
                        </ul>
                        <ul className="redes-person">
                            <li>
                                <a className='text-white' href="http://linkedin.com/in/jose-abel-arteaga-sánchez-9a59ba97" class="fab"></a>
                            </li>
                            <li>
                                <a className='text-white' href="https://www.facebook.com/SkillumMx" class="fab"></a>
                            </li>
                            <li>
                                <a className='text-white' href="https://twitter.com/joseabelarteaga" class="fab"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        
        <div className="max-w-5xl m-auto pt-16">
            <section className='profesor'>

                <div className="max-w-2xl text-gray-700 sm:mt-4">
                    <h1>Conoce más</h1>
                    <p>
                        Con una extensa experiencia profesional y academica, Abel Arteaga se ha 
                        especializado en el area de liderazgo y gestion de proyectos. Graduado
                        con una Maestria en Gestión de Proyectos para la Universidad Ramon Llull
                        (de la Salle) Barcelona, España, Abel trabaja desde hace 20 años en el 
                        sector educativo.
                        <br />
                        <br />
                        Actualmente es fundador y CEO de la Startup Tecnología Educativa 
                        Digital, miembro del Consejo de Administración del Instituto 
                        Latinoamericano de Ciencias y Humanidades.
                    </p>

                    <h1>Titulos y maestrías</h1>
                    <div className="icons">
                        <div className="expert-iconos">
                            <ul className="expert-card">
                                <li className="icon-card"></li>
                                <li className="card-desc"><h4>Master de gestion de<br/>proyectos</h4></li>
                                <p>Tecnologico de monterrey</p>
                            </ul>
                            <ul className="expert-card">
                                <li className="icon-card"></li>
                                <li className="card-desc"><h4>Master de gestion de<br/>proyectos</h4></li>
                                <p>Tecnologico de monterrey</p>
                            </ul>
                            <ul className="expert-card">
                                <li className="icon-card"></li>
                                <li className="card-desc"><h4>Master en gestion de <br/> proyectos</h4>
                                <p>Tecnologico de monterrey</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <h2 className='text-2xl font-normal pt-10 pb-5'>Sus cursos</h2>

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

                <h1 className='text-2xl font-normal pt-10 pb-2'>Sus eventos</h1>

                <div className='max-w-full my-0 mx-auto'>
                    <div className="cursos-card drop-shadow flex flex-col justify-start p-6 rounded">
                        <div className='invetory-desc flex flex-row pb-6 border-b-2 border-solid border-slate-200'>
                            <img className='w-72 mr-6 rounded' src="https://www.skillum.mx/images/cursos-card1.png" alt="" />
                            <div class="cursos-dsc max-w-sm flex flex-col">
                                <ul class="tags flex justify-start leading-4 flex-wrap">
                                    <li class="blue-tag">Seminario</li>
                                    <li class="purple-tag">Introductorio</li>
                                    <li class="green-tag">Eduación</li>
                                </ul>
                                <div class="flex items-center pt-3">
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <a href="#" class="text-xs font-normal text-slate-800">148 reseñas</a>
                                </div>

                                <ul class="float-pricelist flex items-baseline flex-wrap mt-2">
                                    <li className='text-xs font-bold mr-1'>$ 0.00</li>
                                    <li className='text-xs font-bold mr-2'>MXN</li>
                                    <li className='text-xs font-normal mr-2 text-green-700 block '>100% dto.</li>
                                    <span className='text-xs font-normal mr-2 text-green-700 line-through'>$ 2599 MXN</span>
                                </ul>
                                <h3 className='mt-4 text-xl font-bold'>Introducción a la capacitación presencial o en línea</h3>
                                <p className='mt-2 text-sm font-normal text-slate-300'>Aprende cómo emprender en el mundo del desarrollo humano y capacitación desde cero. Si buscas dedicarte a capacitar a otros este seminario es para tí.</p>
                                <Link href="/registro">
                                    <a className="inline-flex items-center px-0 py-5 border border-transparent text-xs font-bold text-violet-700">
                                        CONOCER MÁS
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
                                        <div class="cal-square flex flex-col h-16 w-16 bg-slate-300 rounded-lg items-center justify-center mr-4">
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
                    </div>
                </div>


                <h1 className='text-2xl font-normal pt-10 pb-5'>Sus articulos</h1>

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


                {/* Community section */}
                <CTA/>
            </section>
            
        </div>
        
    </Layout>
  )
}

export default profesor