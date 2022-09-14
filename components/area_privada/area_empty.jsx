import React from 'react'
import { Layout } from '../Layout'

const area_empty = () => {
  return (
    <Layout>
        <div className="max-w-5xl m-auto pt-16">
            <h1 className='text-2xl font-medium pt-10'>Eventos por venir</h1>

            <section className='cart-content wrapper flex mt-4 flex-row justify-between max-w-4xl my-0 mx-auto'>
                <div class="empty-state-card drop-shadow bg-white w-full min-h-full rounded-lg mt-6 mb-16 p-12 flex flex-col items-center content-center justify-between text-center font-normal">
                    <div class="icon-card text-4xl w-20 h-20 rounded-3xl text-purple-700 grid place-items-center mb-4"></div>
                    <div className='headings text-center font-normal'>
                        <h1>Estas a un paso de comenzar</h1>
                        <h4>Visita nuestra tienda y descubre todo lo que tenemos para tí</h4>
                    </div>
                    <button
                        type="submit"
                        className="block w-full text-white py-3 px-4 rounded-md shadow bg-violet-700 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                        Ver cursos
                    </button>
                </div>
            </section>

            <h1 className='text-2xl font-medium pt-10'>Todos tus cursos</h1>

            <section className='cart-content wrapper flex mt-4 flex-row justify-between max-w-4xl my-0 mx-auto'>
                <div class="empty-state-card drop-shadow bg-white w-full min-h-full rounded-lg mt-6 mb-16 p-12 flex flex-col items-center content-center justify-between text-center font-normal">
                    <div class="icon-card text-4xl w-20 h-20 rounded-3xl text-purple-700 grid place-items-center mb-4"></div>
                    <div className='headings text-center font-normal'>
                        <h1>Estas a un paso de comenzar</h1>
                        <h4>Visita nuestra tienda y descubre todo lo que tenemos para tí</h4>
                    </div>
                    <button
                        type="submit"
                        className="block w-full text-white py-3 px-4 rounded-md shadow bg-violet-700 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                        Ver cursos
                    </button>
                </div>
            </section>

            {/* Community section */}
            <CTA/>
        </div>
    </Layout>
  )
}

export default area_empty