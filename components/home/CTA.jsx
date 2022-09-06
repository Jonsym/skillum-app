import React from "react";

export const CTA = () => {
    return (
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
    )
}
