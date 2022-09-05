import React from 'react'
import Link from 'next/link';

const cursos = () => {
  return (
    <main>
        <div className='course-bg flex flex-col items-center relative bg-slate-100 overflow-hidden'>
            <img className='absolute min-w-full w-full -z-10' src="https://www.skillum.mx/images/course-bg/course-bg.png" alt="" />
        </div>

        <header className='relative'>
            <div className='absolute z-20 w-full py-5'>
                <nav className='relative max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6'>
                    <div className='flex items-center flex-1'>
                        <div className='flex items-center justify-between w-full md:w-auto'>
                            <a className='flex items-center' href=''>
                                <img className="h-8 w-auto sm:h-10" src="https://www.skillum.mx/images/Logo.png" alt="" />
                                <img className='h-2 w-auto sm:h-4 pl-3' src="https://www.skillum.mx/images/iso.png" alt="" />
                            </a>
                            <div class="-mr-2 flex items-center md:hidden">
                                <button class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                                    <span class="sr-only">Open main menu</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="hidden space-x-8 md:flex md:ml-10">
                            <a href="#" class="text-xs font-medium hover:text-gray-300">CURSOS</a>
                            <a href="#" class="text-xs font-medium hover:text-gray-300">CONTACTO</a>
                        </div>
                    </div>
                    <div class="hidden md:flex md:items-center md:space-x-6">
                        <a class="text-xs font-medium hover:text-gray-300" href=''>ENTRAR</a>
                        <a class="inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium text-purple-700" href='#'>
                            REGISTRATE GRATIS
                            <span class="icon-arrow-right"></span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>

        <section className='cursos-wrapper mt-44 max-w-4xl my-0 mx-auto'>
            <h1 className='text-2xl font-normal'>Descubre que tenemos para tí</h1>

            {/* Cursos cards */}
            <div className='cursos-card flex justify-start mt-6 p-6 bg-white rounded border border-solid shadow'>
                <img className='max-w-md mr-6 rounded' src="https://www.skillum.mx/images/cursos-card9.png" alt="" />
                <div className='cursos-dsc max-w-sm flex flex-col'>
                    <ul className='tags flex justify-start leading-4 flex-wrap'>
                        <li className='blue-tag bg-sky-200 text-sky-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Curso</li>
                        <li className='purple-tag bg-purple-200 text-purple-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Avanzado</li>
                    </ul>
                    <h3 className='mt-4 text-xl font-bold'>Fundamentos de Bellaza Facial</h3>
                    <p className='mt-2 text-sm font-normal text-slate-500'>
                        Aprende nuevas técnicas de diagnóstico diferenciado y el uso de la aparatología correcta para resolver problemas eficientemente con menos tiempo de tratamiento en ortopedia maxilar para pacientes pediátricos.
                    </p>
                    <ul className='price-tag mt-auto'></ul>

                    <div className='card-links flex justify-start items-center mt-2 text-sm font-bold'>
                        <button className='curso-button bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            AÑADIR A MIS CURSOS
                        </button>
                        <button className='plus-material-button-contained flex items-center text-violet-700 bg-transparent font-bold relative box-border border-none rounded py-0 px-4 h-9 cursor-pointer transition-shadow'>
                            <a href=''>CONOCE MÁS</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className='cursos-card flex justify-start mt-6 p-6 bg-white rounded border border-solid shadow'>
                <img className='max-w-md mr-6 rounded' src="https://www.skillum.mx/images/cursos-card6.png" alt="" />
                <div className='cursos-dsc max-w-sm flex flex-col'>
                    <ul className='tags flex justify-start leading-4 flex-wrap'>
                        <li className='blue-tag bg-sky-200 text-sky-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Curso</li>
                        <li className='purple-tag bg-purple-200 text-purple-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Introductorio</li>
                    </ul>
                    <h3 className='mt-4 text-xl font-bold'>Mejorando la seguridad industrial con un enfoque conductual - primera parte</h3>
                    <p className='mt-2 text-sm font-normal text-slate-500'>
                        Analiza cómo prevenir accidentes, identificar riesgos laborales y responder adecuadamente ante situaciones de emergencia para salvar vidas.
                    </p>
                    <ul className='price-tag mt-auto'></ul>

                    <div className='card-links flex justify-start items-center mt-2 text-sm font-bold'>
                        <button className='curso-button bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            SOLICITAR ACCESO
                        </button>
                        <button className='plus-material-button-contained flex items-center text-violet-700 bg-transparent font-bold relative box-border border-none rounded py-0 px-4 h-9 cursor-pointer transition-shadow'>
                            <a href=''>CONOCE MÁS</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className='cursos-card flex justify-start mt-6 p-6 bg-white rounded border border-solid shadow'>
                <img className='max-w-md mr-6 rounded' src="https://www.skillum.mx/images/cursos-card7.png" alt="" />
                <div className='cursos-dsc max-w-sm flex flex-col'>
                    <ul className='tags flex justify-start leading-4 flex-wrap'>
                        <li className='blue-tag bg-sky-200 text-sky-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Curso</li>
                        <li className='purple-tag bg-purple-200 text-purple-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Introductorio</li>
                    </ul>
                    <h3 className='mt-4 text-xl font-bold'>Mejorando la seguridad industrial con un enfoque conductual - segunda parte</h3>
                    <p className='mt-2 text-sm font-normal text-slate-500'>
                        Analiza cómo prevenir accidentes, identificar riesgos laborales y responder adecuadamente ante situaciones de emergencia para salvar vidas.
                    </p>
                    <ul className='price-tag mt-auto'></ul>

                    <div className='card-links flex justify-start items-center mt-2 text-sm font-bold'>
                        <button className='curso-button bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            SOLICITAR ACCESO
                        </button>
                        <button className='plus-material-button-contained flex items-center text-violet-700 bg-transparent font-bold relative box-border border-none rounded py-0 px-4 h-9 cursor-pointer transition-shadow'>
                            <a href=''>CONOCE MÁS</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className='cursos-card flex justify-start mt-6 p-6 bg-white rounded border border-solid shadow'>
                <img className='max-w-md mr-6 rounded' src="https://www.skillum.mx/images/cursos-card5.png" alt="" />
                <div className='cursos-dsc max-w-sm flex flex-col'>
                    <ul className='tags flex justify-start leading-4 flex-wrap'>
                        <li className='blue-tag bg-sky-200 text-sky-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Alineación</li>
                        <li className='purple-tag bg-purple-200 text-purple-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Avanzado</li>
                    </ul>
                    <h3 className='mt-4 text-xl font-bold'>Introduccion al simulador ELECTUDE</h3>
                    <p className='mt-2 text-sm font-normal text-slate-500'>
                        Aprende de un experto en el área automotriz y entrena con el simulador de ELECTUDE para obtener las certificaciones ASE A1 y A3.
                    </p>
                    <ul className='price-tag mt-auto'></ul>

                    <div className='card-links flex justify-start items-center mt-2 text-sm font-bold'>
                        <button className='curso-button bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            AÑADIR A MIS CURSOS
                        </button>
                        <button className='plus-material-button-contained flex items-center text-violet-700 bg-transparent font-bold relative box-border border-none rounded py-0 px-4 h-9 cursor-pointer transition-shadow'>
                            <a href=''>CONOCE MÁS</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className='cursos-card flex justify-start mt-6 p-6 bg-white rounded border border-solid shadow'>
                <img className='max-w-md mr-6 rounded' src="https://www.skillum.mx/images/cursos-card1.png" alt="" />
                <div className='cursos-dsc max-w-sm flex flex-col'>
                    <ul className='tags flex justify-start leading-4 flex-wrap'>
                        <li className='blue-tag bg-sky-200 text-sky-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Seminario</li>
                        <li className='purple-tag bg-purple-200 text-purple-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Introductorio</li>
                    </ul>
                    <h3 className='mt-4 text-xl font-bold'>Introducción a capacitación presencial o en línea.</h3>
                    <p className='mt-2 text-sm font-normal text-slate-500'>
                        Aprende cómo emprender en el mundo del desarrollo humano y capacitación desde cero. Si buscas dedicarte a capacitar a otros este seminario es para tí.
                    </p>
                    <ul className='price-tag block text-xs font-normal text-lime-600 mt-8'>
                        100% dto.
                        <span className='line-through'>$ 2599 MXN</span>
                    </ul>

                    <div className='card-links flex justify-start items-center mt-2 text-sm font-bold'>
                        <button className='curso-button bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            AÑADIR A MIS CURSOS
                        </button>
                        <button className='plus-material-button-contained flex items-center text-violet-700 bg-transparent font-bold relative box-border border-none rounded py-0 px-4 h-9 cursor-pointer transition-shadow'>
                            <a href=''>CONOCE MÁS</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className='cursos-card flex justify-start mt-6 p-6 bg-white rounded border border-solid shadow'>
                <img className='max-w-md mr-6 rounded' src="https://www.skillum.mx/images/cursos-card2.png" alt="" />
                <div className='cursos-dsc max-w-sm flex flex-col'>
                    <ul className='tags flex justify-start leading-4 flex-wrap'>
                        <li className='blue-tag bg-sky-200 text-sky-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Curso</li>
                        <li className='purple-tag bg-purple-200 text-purple-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Avanzado</li>
                    </ul>
                    <h3 className='mt-4 text-xl font-bold'>Técnicas de gestión efectiva del tiempo</h3>
                    <p className='mt-2 text-sm font-normal text-slate-500'>
                        Aprende herramientas y técnicas de organización para una gestión eficaz de tu tiempo y puedas desarrollar tus objetivos y tus metas.
                    </p>
                    <ul className='price-tag block text-xs font-normal text-lime-600 mt-8'>
                        100% dto.
                        <span className='line-through'>$ 2599 MXN</span>
                    </ul>

                    <div className='card-links flex justify-start items-center mt-2 text-sm font-bold'>
                        <button className='curso-button bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'>+</i>
                            AÑADIR A MIS CURSOS
                        </button>
                        <button className='plus-material-button-contained flex items-center text-violet-700 bg-transparent font-bold relative box-border border-none rounded py-0 px-4 h-9 cursor-pointer transition-shadow'>
                            <a href=''>CONOCE MÁS</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className='cursos-card flex justify-start mt-6 p-6 bg-white rounded border border-solid shadow'>
                <img className='max-w-md mr-6 rounded' src="https://www.skillum.mx/images/cursos-card3.png" alt="" />
                <div className='cursos-dsc max-w-sm flex flex-col'>
                    <ul className='tags flex justify-start leading-4 flex-wrap'>
                        <li className='blue-tag bg-sky-200 text-sky-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Alineación</li>
                        <li className='purple-tag bg-purple-200 text-purple-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Avanzado</li>
                        <li className='purple-tag bg-orange-200 text-amber-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Con certificación</li>
                    </ul>
                    <h3 className='mt-4 text-xl font-bold'>Diseño y lanzamiento de cursos online</h3>
                    <p className='mt-2 text-sm font-normal text-slate-500'>
                        Aprende desde cero a capacitar en línea bajo el estándar de competencia laboral EC0366. Completa nuestra alineación y obtén una certificación avalada por la Red Conocer.
                    </p>
                    <ul className='price-tag mt-auto'></ul>

                    <div className='card-links flex justify-start items-center mt-2 text-sm font-bold'>
                        <button className='curso-button bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'></i>
                            3,850 MXN
                        </button>
                        <button className='plus-material-button-contained flex items-center text-violet-700 bg-transparent font-bold relative box-border border-none rounded py-0 px-4 h-9 cursor-pointer transition-shadow'>
                            <a href=''>CONOCE MÁS</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className='cursos-card flex justify-start mt-6 p-6 bg-white rounded border border-solid shadow'>
                <img className='max-w-md mr-6 rounded' src="https://www.skillum.mx/images/cursos-card4.png" alt="" />
                <div className='cursos-dsc max-w-sm flex flex-col'>
                    <ul className='tags flex justify-start leading-4 flex-wrap'>
                        <li className='blue-tag bg-sky-200 text-sky-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Alineación</li>
                        <li className='purple-tag bg-purple-200 text-purple-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Avanzado</li>
                        <li className='purple-tag bg-orange-200 text-amber-500 flex mr-1 pt-1 pr-2.5 pb-1 pl-2.5 rounded-2xl text-sm font-semibold mb-1'>Con certificación</li>
                    </ul>
                    <h3 className='mt-4 text-xl font-bold'>Aprende a diseñar e impartir cursos presenciales para grupos</h3>
                    <p className='mt-2 text-sm font-normal text-slate-500'>
                        Aprende las bases teóricas y prácticas para certificarte como capacitador de cursos presenciales grupales bajo los estándares de Competencia EC0301 y EC0217.
                    </p>
                    <ul className='price-tag mt-auto'></ul>

                    <div className='card-links flex justify-start items-center mt-2 text-sm font-bold'>
                        <button className='curso-button bg-violet-700 py-2 px-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 cursor-pointer'>
                            <i className='text-xs mr-1'></i>
                            3,850 MXN
                        </button>
                        <button className='plus-material-button-contained flex items-center text-violet-700 bg-transparent font-bold relative box-border border-none rounded py-0 px-4 h-9 cursor-pointer transition-shadow'>
                            <a href=''>CONOCE MÁS</a>
                        </button>
                    </div>
                </div>
            </div>

        </section>

        {/* Community section */}
        <section className='wrapper max-w-4xl my-0 mx-auto'>
            <div className='e-academy bg-gradient-to-r from-indigo-800 to-blue-400 mt-24 mb-24 relative text-white pt-10 pr-12 pb-10 pl-12 rounded-md flex items-center justify-between'>
                <div className='e-academy-text'>
                    <h2 className='text-4xl font-bold leading-9'>
                        Únete a nuestra
                        <br />
                        comunidad académica
                    </h2>
                    <h4 className='text-xl font-medium leading-5 mt-6 mb-11'>
                        Obten novedades de nuestros
                        <br />
                        programas y cursos futuros.
                    </h4>
                    <button className='class="mt-10 block text-xs tracking-wider text-white py-3 px-4 rounded-md shadow bg-orange-400 font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"' type='button'>
                        REGISTRATE GRATIS
                    </button>
                </div>
                <img className='mr-16' src="https://www.skillum.mx/images/e-academy.png" alt="" />
            </div>

        </section>

        {/* Footer */}
        <section className='footer bg-blue-900 pt-7 pr-0 pb-7 pl-0 mt-auto'>
            <div className='foot-wrap flex justify-start items-center max-w-5xl mt-0 mr-auto mb-0 ml-auto'>
                <div className='foot-left flex flex-row items-center'>
                    <img className='w-8' src="https://www.skillum.mx/images/Logo(1).png" alt="" />
                    <img className='ml-3 h-4' src="https://www.skillum.mx/images/Skillum.png" alt="" />
                </div>
                <ul className='foot-social ml-auto flex justify-start text-base'>
                    <li className='ml-6'>
                        <a  className='text-white no-underline' href="https://api.whatsapp.com/send?phone=524771189134&amp;text=Me%20interesa%20conocer%20mas%20sobre%20Skillum"></a>
                    </li>
                    <li className='ml-6'>
                        <a className='text-white no-underline' href="https://www.instagram.com/skillummx/?hl=en"></a>
                    </li>
                    <li className='ml-6'>
                        <a className='text-white no-underline' href="https://www.facebook.com/SkillumMx"></a>
                    </li>
                    <li className='ml-6'>
                        <a className='text-white no-underline' href="https://twitter.com/joseabelarteaga"></a>
                    </li>
                </ul>
            </div>

            <div className='legal-wrapper border-t border-solid ring-offset-indigo-600 pt-6 mt-10 max-w-4xl my-0 mx-auto'>
                <ul className='legal-terms flex justify-end'>
                    <li className='ml-6'>
                        <a className='text-white no-underline' href='https://www.skillum.mx/terms.php'>
                        <span>Terminos y condiciones</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
  </main>

  )
}

export default cursos