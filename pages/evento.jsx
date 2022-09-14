import {CTA, Layout} from "../components";
import LogoBW from '../assets/Logo-BW.png'
import Image from "next/image";
import React from "react";

const evento = () => {
  return (
    <Layout>
        
        <div className="max-w-5xl m-auto pt-16">
            <div className="folder-address wrapper flex mt-28 mb-5 border-b border-gray-400 pb-5">
                <Image src={LogoBW} alt="Logo" width={16} height={16}/>
                <i className="material-icons" id="plus-material">chevron_right</i><a href="cursos.php">Eventos</a><i
                className="material-icons" id="plus-material">chevron_right</i><a href="">Introducción a capacitación presencial
                o en línea.</a>
            </div>

            <section className="flex justify-between">
                <section className="w-3/5">
                    <ul className="tags wrapper flex">
                        <li className="blue-tag flex bg-blue-200 text-blue-700 text-sm py-1 px-4 rounded-2xl mr-1">Seminario</li>
                         <li className="purple-tag flex bg-purple-200 text-purple-700 text-sm py-1 px-4 rounded-2xl mr-1">Especializado</li>
                         <li className="green-tag flex bg-green-300 text-green-700 text-sm py-1 px-4 rounded-2xl">Gratuito</li>
                    </ul>
                    <div 
                        className='' 
                        style={{ background: `url(https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}/>
                    <h1>Este es el titulo del evento que se esta promocionando aquí.</h1>
                    <p>Aprende como aprender en el mundo del desarrollo humano y capacitación desde cero. 
                        Si buscas dedicarte a capacitar a otro este seminario es para ti.</p>


                    <div className="float-card drop-shadow" id="onlymobile">
                        <ul className="float-pricelist">
                            <li>$ 0 MXN</li>
                            <li>MXN</li>
                        </ul>
                        <ul className="float-desc">
                            <li className="participants"><i className="material-icons"
                                                            style={{fontSize: '1rem'}}>confirmation_number</i>Cupo
                                limitado
                            </li>
                            <li className="participants"><i className="material-icons"
                                                            style={{fontSize: '1rem'}}>date_range</i> 24 y 25 de
                                Noviembre.
                            </li>
                            <li className="participants"><i className="material-icons"
                                                            style={{fontSize: '1rem'}}>av_timer</i>Sesiones con tiempo
                                variable
                            </li>
                            <li className="participants"><i className="material-icons"
                                                            style={{fontSize: '1rem'}}>public</i>Evento Online (Live
                                Streaming)
                            </li>
                            <li className="participants"><i className="material-icons"
                                                            style={{fontSize: '1rem'}}>flag</i>Nivel avanzado
                            </li>
                            <li className="participants"><i className="material-icons"
                                                            style={{fontSize: '1rem'}}>timelapse</i>Duración 2 horas
                            </li>
                        </ul>

                        <div className="cart-add-button">
                            <button className="curso-button pure-material-button-contained" id="boton5"
                                    onClick="window.location.href='regen.php'"><i className="plus-material">add</i>AÑADIR
                                A TUS CURSOS
                            </button>
                        </div>
                    </div>
                
                    <div className="expert">
                        <h1 className="py-6 font-semibold">Presentadores:</h1>
                        <div className='expert relative p-3 h-70 max-w-lg border bg-white rounded-lg'>
                            <div className="expert-header">
                                <img src="https://www.skillum.mx/images/miniatura.png" alt="" />
                                <ul class="expert-text">
                                    <li>Abel Arteaga</li>
                                    <li>Master en Gestión de Proyectos</li>
                                </ul>
                                <ul class="redes-person">
                                    <li>
                                        <a href="http://linkedin.com/in/jose-abel-arteaga-sánchez-9a59ba97" class="fab"></a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/SkillumMx" class="fab"></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/joseabelarteaga" class="fab"></a>
                                    </li>
                                </ul>
                            </div>
                            <p>
                            Con una extensa experiencia profesional 
                            y académica, Abel Arteaga se ha especializado 
                            en el área de liderazgo y gestión de proyectos.
                            Graduado con una Maestría en Gestión de Proyectos por 
                            la Universidad Ramón Llull (de la Salle) Barcelona, España, 
                            Abel trabaja desde hace 20 años en el sector educativo.
                            <br />
                            <a className='text-violet-700 font-bold' href="http://linkedin.com/in/jose-abel-arteaga-sánchez-9a59ba97">CONOCER MÁS</a>
                            </p>        
                        </div>

                        {/* Carrousel section */}

                    
                        <h1 className="py-6">Avaldado por:</h1>
                        <ul className="avalado-img w-40 flex flex-wrap">
                            <img src="https://static.wixstatic.com/media/76e5f8_59086181f63142999bd51adf1f340d28.png/v1/fit/w_2500,h_1330,al_c/76e5f8_59086181f63142999bd51adf1f340d28.png" alt=""/>
                            <img src="https://static.wixstatic.com/media/2a25b5_8ff5819480d5459386387b6288cd4a04~mv2.png/v1/fill/w_440,h_254,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a25b5_8ff5819480d5459386387b6288cd4a04~mv2.png" alt="" />
                        </ul>

                        <h1>¿A quien va dirigido?</h1>
                        <p>Si tienes interes en dedicarse a la formacion y el desarrollo del capital humano.</p>

                        <h1>¿Qué aprenderás?</h1>
                        <ul className="aprenderas-list">
                            <li><i className="plus-material">done</i>Aprenderas qué es el Sistema Nacional de
                            Competencias y cómo opera.
                            </li>
                            <li><i className="plus-material">done</i>Aprenderás cómo incrementar tus ingresos y oportunidadades
                            profesionales diseñado  e impartido cursos alineados a los requerimientos de ls SEP y la Red Conocer.
                            </li>
                            <li><i className="plus-material">done</i>Conoceras la unica metodologia de enseñanza por competencias alineadas
                            a la SEP y la Red Conocer en México y América Latina.
                            </li>
                            <li><i className="plus-material">done</i>Sabrás cómo aplicar esta metodologia de enseñanza para diseñar cursos,
                            impartirlos y monetizar tus conocimientos.
                            </li>
                            <li><i className="plus-material">done</i>Conoceras los requerimientos y formatos para obtener una certificación oficial
                            como instructor de cursos con base en la normativa de la SEP y la Red Conocer.
                            </li>
                            <li><i className="plus-material">done</i>Aprenderás cómo incorporarten paso a paso en el Registro Nacional de personas 
                            con Competencias Certificadas. 
                            </li>
                        </ul>

                        <h1>¿Cómo se realizará?</h1>
                        <p>Se transmitira a travez de la plataforma de Zoom los dias 24, 25 y 26 de mayo. En horario
                            18:00 a 19:00 hrs (GMT-6: México). Para inscribirte, añade este seminario a tus cursos.
                        </p>
                        <div className="card-links pb-1 border-b-2">
                            <button className="expert-button pure-material-button-contained"
                                    onClick="window.location.href='"><i className="material-icons">add</i>AÑADIR
                                CURSO
                            </button>
                        </div>

                        <div className="Content pt-3 pb-8 border-b-2">
                            <h1 className="py-10">Contenido</h1>

                            <div className='contenido-section bg-white border border-solid rounded-lg'>
                                <ul className="flex p-1.5 h-15">
                                    <a href="#" className="">
                                        <li className='box w-72 rounded-lg border-t-2 border-solid border-slate-100 flex flex-row items-center'>
                                            <div class="cal-square flex flex-col h-16 w-16 bg-slate-300 rounded-lg items-center justify-center mr-4">
                                                <h4 className='text-2xl'>24</h4>
                                                <p className='text-xs'>de mayo</p>
                                            </div>
                                            <ul>
                                                <li>
                                                    <h2 className='font-bold text-lg text-black'>Primer dia</h2>
                                                </li>
                                                <li className='text-xs my-2 mx-0 flex items-center text-slate-500'>
                                                    <i className=''></i>
                                                    De 18:00 a 19:00 hrs
                                                </li>
                                            </ul>
                                        </li>
                                    </a>
                                </ul>
                                <div>
                                    <ul className='cont-list p-1.5'>
                                        <li><i>1.1</i>Definición</li>
                                        <li><i>1.2</i>Generalidades e introducción</li>
                                        <li><i>1.3</i>Terapia celular</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="intro-skillum pt-10 pb-8 border-b-2">
                            <h1>Sobre el contenido Introductorio en Skillum</h1>
                            <p>En este programa de nivel introductorio, te adentrarás en el mundo de la Medicina
                                Regenerativa y la Terapia Celular, perfeccionarás conocimientos en la materia, de la
                                mano de nuestros expertos. Obtendrás contenido de valor que te ayudará a crecer
                                profesionalmente.</p>
                            <div className="icons">
                                <div className="expert-iconos">
                                    <ul className="expert-card">
                                        <li className="icon-card"></li>
                                        <li className="card-desc"><h4>Aprende de<br/> expertos</h4></li>
                                    </ul>
                                    <ul className="expert-card">
                                        <li className="icon-card"></li>
                                        <li className="card-desc"><h4>Para<br/>profesionales<br/>titulados</h4></li>
                                    </ul>
                                    <ul className="expert-card">
                                        <li className="icon-card"></li>
                                        <li className="card-desc"><h4>Aprende <br/> gratuitamente<br/>y en linea</h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Valoraciones section */}
                        <div className='pt-8 border-b-2'>
                            <h1 className='font-bold pb-8'>Valoraciones</h1>
                            <article>
                                <div class="flex items-center mb-4 space-x-4">
                                    <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""/>
                                    <div class="space-y-1 font-medium dark:text-white">
                                        <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">11 de junio de 2021</time>
                                        <p className="font-bold">Brenda Ambriz</p>
                                    </div>
                                </div>
                                <div class="flex items-center mb-1">
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <p class="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                                <p class="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                            </article>

                            <article>
                                <div class="flex items-center mb-4 space-x-4">
                                    <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""/>
                                    <div class="space-y-1 font-medium dark:text-white">
                                        <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">11 de junio de 2021</time>
                                        <p className="font-bold">Brenda Ambriz</p>
                                    </div>
                                </div>
                                <div class="flex items-center mb-1">
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <p class="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                                <p class="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                            </article>

                            <article>
                                <div class="flex items-center mb-4 space-x-4">
                                    <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""/>
                                    <div class="space-y-1 font-medium dark:text-white">
                                        <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">11 de junio de 2021</time>
                                        <p className="font-bold">Brenda Ambriz</p>
                                    </div>
                                </div>
                                <div class="flex items-center mb-1">
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <p class="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                                <p class="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                            </article>
                        </div>
                    </div>
                </section>

                    <div className="float-card drop-shadow">
                        <ul className="float-pricelist">
                            <li>$ 0 MXN</li>
                            <li>MXN</li>
                        </ul>

                        <ul className="float-desc">
                            <li className="participants"><i className="material-icons"
                                                            style={{ fontSize: '1rem' }}>confirmation_number</i>Cupo limitado
                            </li>
                            <li className="participants"><i className="material-icons"
                                                            style={{ fontSize: '1rem' }}>date_range</i>24 y 25 Noviembre del
                                2021.
                            </li>
                            <li className="participants"><i className="material-icons" style={{ fontSize: '1rem' }}>av_timer</i>Sesiones
                                con tiempo variable
                            </li>
                            <li className="participants"><i className="material-icons" style={{ fontSize: '1rem' }}>public</i>Evento
                                Online (Live Streaming)
                            </li>
                            <li className="participants"><i className="material-icons" style={{ fontSize: '1rem' }}>flag</i>Nivel
                                avanzado
                            </li>
                            <li className="participants"><i className="material-icons"
                                                            style={{ fontSize: '1rem' }}>timelapse</i>Duración 2 horas
                            </li>
                        </ul>

                        <div className="cart-add-button">
                            <button className="curso-button pure-material-button-contained" id="boton5"
                                    onClick="window.location.href='regen.php'"><i className="plus-material">add</i>AÑADIR A
                                TUS CURSOS
                            </button>
                        </div>

                    </div>
            </section>
                <section className="py-12">
                    <h3 className='text-3xl pb-8'>Conoce mas de Skillum</h3>
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

export default evento