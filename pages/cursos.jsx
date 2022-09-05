import React from 'react'
import Link from 'next/link';
import {CTA, Layout} from "../components";

const cursos = () => {
  return (
    <Layout>
        <div className="pt-44">
            <section className='cursos-wrapper max-w-5xl my-0 mx-auto'>
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
                                <Link href='/curso'><a>CONOCE MÁS</a></Link>
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
                                <Link href='/curso'><a>CONOCE MÁS</a></Link>
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
                                <Link href='/curso'><a>CONOCE MÁS</a></Link>
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
                                <Link href='/curso'><a>CONOCE MÁS</a></Link>
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
                                <Link href='/curso'><a>CONOCE MÁS</a></Link>
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
                                <Link href='/curso'><a>CONOCE MÁS</a></Link>
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
                                <Link href='/curso'><a>CONOCE MÁS</a></Link>
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
                                <Link href='/curso'><a>CONOCE MÁS</a></Link>
                            </button>
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
