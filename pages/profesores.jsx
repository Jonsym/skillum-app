import React from 'react'
import { CTA, Layout } from '../components'


const people = [
    {
      name: 'Marcela Palomino',
      title: 'Master en Administración y Economia Pública',
      role: '12 cursos . 1 evento',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
  ]
  
const profesores = () => {
  return (
    <Layout>
        <div className="relative text-darkBlue overflow-hidden bg-transparent" style={{ backgroundColor: '#E0F3FF' }}>

            <div className='w-full h-full absolute flex flex-row justify-between -top-1.5 -left-5'>

                <div className='layer relative block left-0 top-0 w-3/5 h-3/5' data-depth="0.35">
                    <img className='w-full h-full ml-9' src="https://www.skillum.mx/images/hero-bg/S1.png" alt="" />
                </div>
                <div className='layer absolute block left-0 top-0 w-3/5 h-3/5' data-depth="0.15">
                    <img className='w-full h-full ml-9' src="https://www.skillum.mx/images/hero-bg/S2.png" alt="" />
                </div>
                <div className='layer absolute block left-0 top-0 w-3/5 h-3/5' data-depth="0.5">
                    <img className='w-full h-full ml-9' src="https://www.skillum.mx/images/hero-bg/S3.png" alt="" />
                </div>
                <div className='layer absolute block left-0 top-0 w-3/5 h-3/5' data-depth="0.35">
                    <img className='w-full h-full ml-9' src="https://www.skillum.mx/images/hero-bg/S4.png" alt="" />
                </div>
                <div className='layer absolute block left-0 top-0 w-3/5 h-3/5' data-depth="0.5">
                    <img className='w-full h-full ml-9' src="https://www.skillum.mx/images/hero-bg/S5.png" alt="" />
                </div>

            </div>


           <main>
                <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden" style={{ backgroundColor: '#E0F3FF' }}>
                    <div className="mx-auto max-w-5xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                <div className="lg:py-24">
                                    <h1 className="mt-4 text-4xl tracking-wide font-bold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl">
                                        <span className="block pb-2">Aprende con nuestros expertos certificado</span>
                                    </h1>
                                    <p className="mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        Aprende de la mano de expertos y profesionales en cada campo en especifico. Estaras aprendiendo de los referentes en cada diciplina.
                                    </p> 
                                </div>
                            </div>
                            <div className="mt-10 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover"
                                        src="https://www.skillum.mx/images/hero-image3.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main> 
        </div>

        <section className='cursos-wrapper max-w-5xl my-24 mx-auto'>
        
            <section className='pb-3 border-b-2 flex'>
                <h1 className='font-medium text-2xl mr-auto'>Profesores</h1>
                <div>
                    <select
                        className="mr-5 w-52 rounded-md border-gray-300 bg-gray-200 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm flex-row-reverse"
                        defaultValue="Canada">
                        <option>Educación</option>
                        <option>Especializado</option>
                        <option>Gratuito</option>
                    </select>
                </div>
                <div>
                    <select
                        className="mr-10 w-52 rounded-md border-gray-30 bg-gray-200 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm flex-row-reverse"
                        defaultValue="Canada">
                        <option>Orden alfabético</option>
                    </select>
                </div>
            </section>


            {/* Profesores section */}
            <section className='pt-10'>
                <ul role="list" className="grid grid-cols-4 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))}

                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))} 

                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))}

                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))} 
                </ul> 

                <ul role="list" className="grid grid-cols-4 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-6">
                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))}

                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))} 

                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))}

                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))} 
                </ul> 

                <ul role="list" className="grid grid-cols-4 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-6">
                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))}

                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))} 

                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))}

                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))} 
                </ul> 

                <ul role="list" className="grid grid-cols-4 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-6">
                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))}

                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))} 

                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))}

                    {people.map((person) => (
                        <li key={person.email} className="col-span-1 flex flex-row divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-60">
                            <div className="flex flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <div className='border-t-2 border-solid border-slate-200 pt-3 mt-2'></div>
                                <dd className="text-sm text-gray-500">{person.title}</dd>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium">
                                    {person.role}
                                    </span>
                                </dd>
                                </dl>
                            </div>
                        </li>
                    ))} 
                </ul>            
            </section>

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

                {/* Community section */}
                <CTA/>

        </section>
        
        
    </Layout>
  )
}

export default profesores