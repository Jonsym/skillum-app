import React from 'react'
import Link from 'next/link'
import {Header, Footer, Layout} from '../components';

const registro = () => {
  return (
    <Layout>
        <div className={'pb-24 pt-24'}>
            <div
                className='registry-container p-8 max-w-md bg-white rounded-lg h-min flex flex-col mr-auto ml-auto border border-solid shadow'>
                <h3 className='text-xl font-normal'>Regístrate en Skillum</h3>
                <div className='reg-body border-t-2 border-solid border-slate-100 mt-6'>
                    <ul className='campos-texst flex flex-row justify-start text-sm mt-6'>
                        <li className='mr-2 text-black'>¿Ya tienes una cuenta?</li>
                        <li className='text-indigo-700 cursor-pointer'>
                            <a href='https://www.skillum.mx/login.php'>Entrar</a>
                        </li>
                    </ul>
                    <h5 className='text-sm mt-8'>Registrate:</h5>
                    <ul className='reg-socialbuttons flex flex-row justify-between mt-4 text-black'>
                        <a href='#'>
                            <li className='p-3 border border-solid rounded-lg w-48 flex flex-row items-center justify-center cursor-pointer'>
                                <i className='ion-logo-google mr-4'></i>
                                <img className='w-5 mr-2' src="https://www.skillum.mx/images/google_png.png" alt=""/>
                                Google
                            </li>
                        </a>
                        <a href='#'>
                            <li className='p-3 border border-solid rounded-lg w-48 flex flex-row items-center justify-center cursor-pointer'>
                                <i className='ion-social-facebook text-sky-700 mr-4'></i>
                                Facebook
                            </li>
                        </a>
                    </ul>
                    <p className='reg-div text-center relative mt-6 bg-white'>
                        ó
                    </p>

                    <div className='login-email'>
                        <div className='reg-input flex flex-col justify-center'>
                            <div className='name-input flex flex-row justify-between'>
                                <div className='form-input w-2/5 relative mt-6'>
                                    <input
                                        className='text-black font-normal pt-3.5 pl-8 h-12 bg-slate-100 border-none rounded-lg'
                                        type="text" placeholder="Nombre"/>
                                    <label
                                        className='form-label absolute top-4 left-9 text-sm transition-all text-slate-700 flex items-center'>Nombre</label>
                                    <i className='plus-material absolute top-3.5 left-3.5 text-slate-700'>person</i>
                                    <div
                                        className='form-input-after absolute content-none w-0 h-0.5 z-0 left-1 bottom-0 transition-all'></div>
                                </div>
                                <div className='form-input w-2/5 relative mt-6'>
                                    <input
                                        className='text-black font-normal pt-3.5 pl-8 h-12 bg-slate-100 border-none rounded-lg'
                                        type="text" placeholder='Nombre'/>
                                    <label
                                        className='form-label absolute top-4 left-9 text-sm transition-all text-black flex items-center'>Apellido</label>
                                    <div
                                        className='form-input-after absolute content-none w-0 h-0.5 z-0 left-1 bottom-0 transition-all'></div>
                                </div>
                            </div>
                        </div>
                        <div className="form-input relative mt-6">
                            <input
                                className='text-black font-normal pt-3.5 pl-8 h-12 bg-slate-100 border-none rounded-lg'
                                type="telefono" placeholder="Teléfono"/>
                            <label
                                className="form-label absolute top-4 left-9 text-sm transition-all ease-linear text-black flex items-center">Teléfono</label>
                            <i className="plus-material absolute top-3.5 left-3.5 text-slate-600">phone</i>
                            <div
                                className="form-input-after absolute content-none w-0 h-0.5 z-10 left-1 bottom-0 transition-all"></div>
                        </div>
                        <div className='form-input relative mt-6'>
                            <input
                                className='text-black font-normal pt-3.5 pl-8 h-12 bg-slate-100 border-none rounded-lg'
                                type="email" placeholder="email"/>
                            <label
                                className='form-label abosolute top-4 left-9 text-sm transition-all text-black flex items-center'>Email</label>
                            <i className='plus-material absolute top-3.5 left-3.5 text-black'>email</i>
                            <div
                                className='form-input-after absolute content-none w-0 h-0.5 z-10 left-1 bottom-0 transition-all'></div>
                        </div>

                        <div className='alert-register mt-1 flex flex-row text-xs items-center'></div>

                        <div className="reg-password flex flex-row justify-center">
                            <div className="form-input relative mt-6">
                                <input
                                    className='text-black font-normal pt-3.5 pl-8 h-12 bg-slate-100 border-none rounded-lg'
                                    type="password" placeholder="Contraseña"/>
                                <label
                                    className='form-label abosolute top-4 left-9 text-sm transition-all text-black flex items-center'
                                    htmlFor="password">Contraseña</label>
                                <i className="plus-material absolute top-3.5 left-3.5 text-black">lock</i>
                                <div
                                    className="form-input-after absolute content-none w-0 h-0.5 z-10 left-1 bottom-0 transition-all"></div>
                            </div>
                            <i className="plus-material ojito text-indigo-700 cursor-pointer mt-6 pt-3"
                               id="togglePassword">visibility</i>
                        </div>
                    </div>

                    <p className='mt-4 text-sm tracking-wide text-black'>Tu contraseña debe contener al menos seis
                        caracteres, una mayúscula y un número</p>

                    <div className='legal-checks mt-10 mb-10'>
                        <ul className='check-items'>
                            <li className='text-black text-sm flex flex-row items-center mt-6'>
                                <input
                                    className='checkbox border-2 rounded w-4 h-4 mr-2 cursor-pointer text-black font-normal pt-3.5 pl-8'
                                    type="checkbox"/>
                                <p>
                                    Acepto los
                                    <span className='text-indigo-700 mt-0 mr-1 mb-0 ml-1 cursor-pointer'>terminos y condiciones</span>
                                    de Skillum
                                </p>
                            </li>
                            <li className='text-black text-sm flex flex-row items-center mt-6'>
                                <input
                                    className='checkbox border-2 rounded w-4 h-4 mr-2 cursor-pointer text-black font-normal pt-3.5 pl-8'
                                    type="checkbox"/>
                                Acepto recibir noticias y actualizaciones de Skillum
                            </li>
                        </ul>
                    </div>
                    <button
                        className='reg-button w-full h-10 grid justify-center items-center col-auto bg-slate-400 rounded-md text-white font-bold text-xs tracking-normal cursor-pointer transition-all'>
                        <p>COMIENZA AHORA</p>
                    </button>
                </div>
            </div>

            <div
                className='modal-pop hidden fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-slate-300 justify-items-center items-center'>
                <div
                    className='registry-sent max-w-md h-96 bg-white rounded-lg p-12 absolute box-border flex flex-col items-center text-center justify-between border border-solid shadow'>
            <span className='close'>
                <i className='plus-material absolute top-0 right-1 text-xl text-violet-700 font-semibold'>close</i>
            </span>
                    <i className='icon-card w-16 h-16 text-violet-700 rounded-3xl gird place-items-center mb-4 text-3xl'></i>
                    <h3 className='text-2xl font-normal'>Confirma tu correo</h3>
                    <p>Enviamos un correo con las instrucciones para terminar tu registro. </p>
                    <button
                        className='text-xs font-bold tracking-normal bg-violet-700 text-white p-3.5 rounded transition-all'
                        onClick="window.location.href='login.php">ENTRAR
                    </button>
                </div>
            </div>
        </div>

    </Layout>
  )
}

export default registro
