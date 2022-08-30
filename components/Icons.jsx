import React from 'react'

const Icons = () => {
  return (
    <section className='icons-wrapper max-w-5xl my-0 mx-auto'>
        <div className='iconos mt-14 flex justify-between'>
            <ul className='card w-56'>
                <li className='icon-card w-16 h-16 rounded-3xl grid place-items-center mb-4 text-2xl'><span className='icon-diamond'/></li>
                <li className='icon-header no-underline border-none'>
                    <h3 className='text-xl font-bold'>
                        Aumenta
                        <br/>
                        tu potencial
                    </h3>
                </li>
                <li className='divider w-20 h-1 bg-violet-600 rounded m-3 mx-0'></li>
                <li className='card-desk no-underline border-none text-sm block '>
                    <p>Desarrolla técnicas profesionales que te ayudan a posicionarte en el mercado laboral.</p>
                </li>
            </ul>

            <ul className='card w-56'>
                <li className='icon-card w-16 h-16 rounded-3xl grid place-items-center mb-4 text-2xl'><span className='icon-rocket'/></li>
                <li className='icon-header no-underline border-none'>
                    <h3 className='text-xl font-bold'>
                        Identifica tus áreas
                        <br/>
                        de oportunidad
                    </h3>
                </li>
                <li className='divider w-20 h-1 bg-violet-600 rounded m-3 mx-0'></li>
                <li className='card-desk no-underline border-none text-sm block '>
                    <p>Selecciona las experiencias de aprendizaje que te ayudarán a alcanzar tus metas.</p>
                </li>
            </ul>

            <ul className='card w-56'>
                <li className='icon-card w-16 h-16 rounded-3xl grid place-items-center mb-4 text-2xl'><span className='icon-award'/></li>
                <li className='icon-header no-underline border-none'>
                    <h3 className='text-xl font-bold'>
                        Certifica
                        <br/>
                        tus conocimientos
                    </h3>
                </li>
                <li className='divider w-20 h-1 bg-violet-600 rounded m-3 mx-0'><span className='icon-lightning'/></li>
                <li className='card-desk no-underline border-none text-sm block '>
                    <p>Contamos con programas avalados por instituciones nacionales e internacionales.</p>
                </li>
            </ul>

            <ul className='card w-56'>
                <li className='icon-card w-16 h-16 rounded-3xl grid place-items-center mb-4 text-2xl'></li>
                <li className='icon-header no-underline border-none'>
                    <h3 className='text-xl font-bold'>
                        Diseña tu
                        <br/>
                        aprendizaje
                    </h3>
                </li>
                <li className='divider w-20 h-1 bg-violet-600 rounded m-3 mx-0'></li>
                <li className='card-desk no-underline border-none text-sm block '>
                    <p>Elige entre tus mejores opciones de horario. Aprende en cualquier dispositivo.</p>
                </li>
            </ul>

        </div>
    </section>


  )
}

export default Icons
