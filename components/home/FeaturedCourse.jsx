import Image from "next/image";
import Link from 'next/link';

export const FeaturedCourse = ({ title, tags, description, price, discount, id, image }) => {
    return (
        <div className="max-w-5xl m-auto pt-16">
            <h1 className='text-sm max-w-lg leading-10 mt-4 font-normal sm:mt-5 sm:text-3xl lg:mt-6 xl:text-3xl'>Eventos exclusivos</h1>
            <p className="mt-3 text-base sm:mt-5 sm:text-xl lg:text-base xl:text-base max-w-md">
                Participa eventos que te cambiaran la vida y te daran las
                herramientas que necesitas para lograr tu metas profesionales
                y eficazmente
            </p>
            <Link href="/registro">
                <a className="inline-flex items-center px-0 py-5 border border-transparent text-xs font-bold text-violet-700">
                    VER EVENTOS
                    <span className="icon-arrow-right"/>
                </a>
            </Link>

            {/* Cards-eventos */}
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
    )
}
