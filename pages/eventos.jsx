import React from 'react'
import {CTA, Layout} from "../components";
import LogoBW from '../assets/Logo-BW.png'
import Image from "next/image";
import Link from 'next/link';

const eventos = () => {
  return (
    <Layout>
        <div className="max-w-5xl m-auto pt-16">
            <div className="folder-address wrapper flex mt-28 mb-5 border-b border-gray-400 pb-5">
                <Image src={LogoBW} alt="Logo" width={16} height={16}/>
                <i className="material-icons" id="plus-material">chevron_right</i>
                <a href="cursos.php">Eventos</a>
            </div>

            <h1 className='text-2xl font-medium'>Eventos por venir</h1>
            <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>

            {/* Cards-eventos */}
            
            <div className="cursos-card drop-shadow flex justify-start p-6 rounded">
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
                    
                    <div class="flex items-center relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
                        <div class="w-12 h-12 rounded-2xl bg-gray-100">24 de mayo</div>
                        <div class="ml-3">
                            <p class="font-medium text-gray-800">De 18:00 a 19:00 hrs</p>
	                        <p class="text-sm text-gray-600">Videollamada</p>
                        </div>
                    </div>
                </div>   
            </div>

            {/* Community section */}
            <CTA/>
        </div>

    </Layout>

  )
}

export default eventos

