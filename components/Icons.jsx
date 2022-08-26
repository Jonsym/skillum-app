import React from 'react'

const Icons = () => {
  return (
    <section className='icons-wrapper max-w-5xl m-0'>
        <div className='iconos mt-16 flex justify-between'>
            <ul className='card'>
                <li className='icon card w-16 h-16 decoration-violet-600 bg-linear-gradient rounded-3xl grid place-items-center mb-4 text-2xl font-sans'>Diamond</li>
                <li className='icon-header no-underline border-none'>
                    <h3 className='text-base'>
                        Aumenta
                        <br />
                        tu potencial
                    </h3>
                </li>
                <li className='divider w-20 h-1 bg-violet-600 rounded m-3'></li>
                <li className='card-desk no-underline border-none'>
                    <p>Desarrolla técnicas profesionales que te ayudan a posicionarte en el mercado laboral.</p>
                </li>
            </ul>
            
        </div>
    </section>
    
    
  )
}

export default Icons