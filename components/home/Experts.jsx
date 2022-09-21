import Link from 'next/link';

export const Experts = ({ experts }) => {
    return (
        <div className="max-w-5xl m-auto py-20">
            <h2 className="text-sm max-w-lg leading-10 mt-4 font-normal sm:mt-5 sm:text-3xl lg:mt-6 xl:text-3xl">Expertos certificados</h2>
            <p className='mt-3 text-base sm:mt-5 sm:text-xl lg:text-base xl:text-base max-w-md'>
                Aprende de la mano de expertos profesionales
                en cada campo en especifico. Estaras aprendiendo
                de los referentes en cada diciplina.
            </p>
            <Link href="/registro">
                <a className="inline-flex items-center px-0 py-5 border border-transparent text-xs font-bold text-violet-700">
                    VER PROFESORES
                    <span className="icon-arrow-right"/>
                </a>
            </Link>

            <section className='max-w-4xl my-0 mx-auto'>
                <div className="main relative h-60 pt-20">
                    <div className="viewport h-60 touch-pan-y cursor-grab overflow-hidden relative">
                        <div className="slider absolute w-full h-full">
                            <div className="carousel absolute left-0 h-60 mr-4">
                                <div className="border border-solid border-slate-100 shadow bg-white rounded-lg max-w-lg flex p-4">
                                    <div className="flex justify-center items-center overflow-hidden w-52 h-48 mr-6 rounded">
                                        <img src="https://www.skillum.mx/images/abel.png" alt="" />
                                    </div>
                                    <ul className="flex flex-col w-6/12">
                                        <li className="text-xl mt-4">Abel Arteaga</li>
                                        <li className="text-sm mt-0.5">Master en Gestion de Proyectos</li>
                                        <li className="w-5 h-1 mt-4 bg-violet-700 rounded-sm"></li>
                                        <li className="text-xs mt-3 leading-5">
                                            <p>
                                            Consultor de adopción tecnológica en entornos educativos. 
                                            Crea innovacion en metodologias, ambientes y recursos de educación.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="carousel absolute left-0 h-60 mr-4">
                                <div className="border border-solid border-slate-100 shadow bg-white rounded-lg max-w-lg flex p-4">
                                    <div className="flex justify-center items-center overflow-hidden w-52 h-48 mr-6 rounded">
                                        <img src="https://www.skillum.mx/images/hilda.png" alt="" />
                                    </div>
                                    <ul className="flex flex-col w-6/12">
                                        <li className="text-xl mt-4">Hilda Ortiz</li>
                                        <li className="text-sm mt-0.5">Especialista en finanzas</li>
                                        <li className="w-5 h-1 mt-4 bg-violet-700 rounded-sm"></li>
                                        <li className="text-xs mt-3 leading-5">
                                            <p>
                                            Experta en administración y coordinación de herramientas
                                            financieras de instituciones públicas y privadas.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="carousel absolute left-0 h-60 mr-4">
                                <div className="border border-solid border-slate-100 shadow bg-white rounded-lg max-w-lg flex p-4">
                                    <div className="flex justify-center items-center overflow-hidden w-52 h-48 mr-6 rounded">
                                        <img src="https://www.skillum.mx/images/marcela.png" alt="" />
                                    </div>
                                    <ul className="flex flex-col w-6/12">
                                        <li className="text-xl mt-4">Marcela Palomino </li>
                                        <li className="text-sm mt-0.5">Master en Administración y Economía Pública </li>
                                        <li className="w-5 h-1 mt-4 bg-violet-700 rounded-sm"></li>
                                        <li className="text-xs mt-3 leading-5">
                                            <p>
                                                Experta en la administración y gestión de políticas públicas, 
                                                con Másters en Administración y Economía Pública  
                                                y en Habilidades Directivas.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="carousel absolute left-0 h-60 mr-4">
                                <div className="border border-solid border-slate-100 shadow bg-white rounded-lg max-w-lg flex p-4">
                                    <div className="flex justify-center items-center overflow-hidden w-52 h-48 mr-6 rounded">
                                        <img src="https://www.skillum.mx/images/jose.png" alt="" />
                                    </div>
                                    <ul className="flex flex-col w-6/12">
                                        <li className="text-xl mt-4">José Peláez </li>
                                        <li className="text-sm mt-0.5">Emprendedor e Ingeniero mecánico</li>
                                        <li className="w-5 h-1 mt-4 bg-violet-700 rounded-sm"></li>
                                        <li className="text-xs mt-3 leading-5">
                                            <p>
                                                Experto en consultoría, administración de empresas y entrenamiento técnico. 
                                                Graduado en Ingeniería Mecánica y titulado en Mecánica Automotriz.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
