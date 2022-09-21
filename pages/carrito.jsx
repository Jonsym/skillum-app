import React from 'react'
import {CTA, Layout} from "../components";

const carrito = () => {
  return (
    <Layout>
        <h1 className="cart-header wrapper">Tu carrito</h1>
        <form className='pb-11' action="create-checkout-session.php" method='POST'>
            <section className='cart-content wrapper'>
                <div className='item-card drop-shadow'>
                    <img className="mr-6 rounded-md" src="https://www.skillum.mx/images/item-cart9.png" alt="" />
                    <div className='item-desc'>
                        <ul class="tags flex justify-start leading-4 flex-wrap pb-2">
                            <li class="green-tag">Promo Lanzamiento</li>
                        </ul>
                        <ul class="float-pricelist flex items-baseline flex-wrap mt-2">
                                <li className='text-xs font-bold mr-1'>$ 0.00</li>
                                <li className='text-xs font-bold mr-2'>MXN</li>
                                <li className='text-xs font-normal mr-2 text-green-700 block '>100% dto.</li>
                                <span className='text-xs font-normal mr-2 text-green-700'>$ 2599 MXN</span>
                        </ul>
                        <div className='item-headline'>
                            <h3 className='cart-header'>Tecnicas de gestión efectiva del tiempo</h3>
                            <ul className="item-links">
                                <li className='text-violet-700 p-2 uppercase font-bold text-xs cursor-pointer leading-5 tracking-wide'>
                                    <a href="">VER DETALLE</a>
                                </li>
                                <li className='text-violet-700 p-2 uppercase font-bold text-xs cursor-pointer leading-5 tracking-wide'>
                                    <a href="">ELIMINAR</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="float-cart w-72 h-72 rounded-lg bg-white p-6 border border-solid border-slate-100 shadow">
                    <div className='second-float border-b-2 border-solid pb-16 border-slate-200'>
                        <h6>Tu compra:</h6>
                        <h2 className='text-2xl'>2 cursos</h2>
                        <div className='second-float py-2'>
                            <h6>Total:</h6>
                            <ul className='float-pricekist flex items-baseline flex-wrap mt-2'>
                                <li className='text-2xl font-bold mr-1'>$3,850</li>
                                <li className='text-xs font-bold mr-2'>MXN</li>
                            </ul>
                        </div>
                    </div>
                    <button className="purple-button pure-material-button-contained w-full text-center text-base">
                        COMPRAR
                    </button>
                </div>
            </section>
        </form>
    </Layout>
  )
}

export default carrito