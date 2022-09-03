import React from 'react'
import Link from 'next/link'

const registro = () => {
  return (
    <main>
        <header className='fullw-head bg-white h-16 mb-3 drop-shadow shadow border-2'>
      <div classNameName='wrapper-header flex justify-start items-center pt-4 z-10 h-min min-h-0 overflow-x-clip max-w-4xl my-0 mx-auto'>

        <a href="index.php">
          <img className='cursor-pointer h-8 w-auto sm:h-10' src="https://www.skillum.mx/images/Logo.png" alt="" />
        </a>

        <a href="index.php">
          <img className="cursor-pointer h-2 w-auto sm:h-4 pl-3" src="https://www.skillum.mx/images/iso.png" alt="" />
        </a>

        <div classNameName="hidden md:flex md:items-center md:space-x-6">
            <Link href="/login">
                <a classNameName="text-sm font-normal hover:text-gray-300">
                    ¿Ya tienes una cuenta?
                </a>
            </Link>
                <a
                href="components/home/Hero#"
                classNameName="inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium color-blue text-violet-700"
                >
                ENTRAR
                <span classNameName="icon-arrow-right"/>
                </a>
        </div>
      </div>
    </header>

    {/* Waves Container */}
    <div></div>
    {/* Waves End */}

    {/* Esta seccion no tiene estilos */}
    {/* Registry Form */}
    <div className='registry-container'>
        <h3>Registrate en Skillum</h3>
        <div className='reg-body'>
            <ul className='campos-texst'>
                <li>¿Ya tienes una cuenta?</li>
                <li>
                    <a href='https://www.skillum.mx/login.php'>Entrar</a>
                </li>
            </ul>
            <h5>Registrate:</h5>
            <ul className='reg-socialbuttons'>
                <a href='#'>
                    <li>
                        <i className='ion-logo-google'></i>
                        <img className='' src="https://www.skillum.mx/images/google_png.png" alt="" />
                        Google
                    </li>
                </a>
                <a href='#'>
                    <li>
                        <i className='ion-social-facebook'></i>
                        Facebook
                    </li>
                </a>
            </ul>
            <p className='reg-div'>
                o
            </p>

            <div className='login-email'>
                <div className='reg-input'>
                    <div className='name-input'>
                        <div className='form-input'>
                            <input type="text" placeholder='Nombre' />
                            <label className='form-label'>Nombre</label>
                            <i className='plus-material'>person</i>
                            <div className='form-input-after'></div>
                        </div>
                        <div className='form-input'>
                            <input type="text" placeholder='Nombre'/>
                            <label className='form-label'>Apellido</label>
                            <div className='form-input-after'></div>
                        </div>
                    </div>
                </div>
                <div className="form-input">
                    <input type="telefono" placeholder="Teléfono" />
                    <label className="form-label">Teléfono</label>
                    <i className="plus-material">phone</i>
                    <div className="form-input-after"></div>
                </div>
                <div className="form-input">
                    <input type="email" id="search-email" placeholder="email"/>
                    <label className="form-label">Email</label>
                    <i className="plus-material">email</i>
                    <div className="form-input-after"></div>
                </div>
                <div className='alert-register'></div>
                <div className="reg-password">
                    <div className="form-input">
                        <input id="id_password" type="password" placeholder="Contraseña"/>
                        <label for="password" className="form-label">Contraseña</label>
                        <i className="plus-material">lock</i>
                        <div className="form-input-after"></div>
                    </div>
                    <i className="plus-material ojito" id="togglePassword">visibility</i>
                </div>
            </div>
            <p>Tu contraseña debe contener al menos seis caracteres, una mayúscula y un número</p>
            <div className='legal-checks'>
                <ul className='check-items'>
                    <li>
                        <input className='checkbox' type="ckeckbox" />
                        <p>
                            Acepto los
                            <span>terminos y condiciones</span>
                            de Skillum
                        </p>
                    </li>
                    <li>
                        <input className='checkbox' type="checkbox" />
                        Acepto recibir noticias y actualizaciones de Skillum
                    </li>
                </ul>
            </div>
            <button className='reg-button'>
                <p>COMIENZA AHORA</p>
            </button>
        </div>
    </div>

    <div className='modal-pop'>
        <div className='registry-sent'>
            <span className='close'>
                <i className='plus-material'>close</i>
            </span>
            <i className='icon-card'></i>
            <h3>Confirma tu correo</h3>
            <p>Enviamos un correo con las instrucciones para terminar tu registro. </p>
            <button onClick="window.location.href='login.php">ENTRAR</button>
        </div>
    </div>

    {/* Footer */}
    <section className='footer bg-indigo-800 pt-7 pr-0 pb-7 pl-0 mt-auto'>
      <div className='foot-wrap flex justify-start items-center max-w-5xl mt-0 mr-auto mb-0 ml-auto'>
        <div className='foot-left flex flex-row items-center'>
          <img className='w-8' src="https://www.skillum.mx/images/Logo(1).png" alt="" />
          <img className='ml-3 h-4' src="https://www.skillum.mx/images/Skillum.png" alt="" />
        </div>
        <ul className='foot-social ml-auto flex justify-start text-base'>
          <li className='ml-6'>
            <a  className='text-white no-underline' href="https://api.whatsapp.com/send?phone=524771189134&amp;text=Me%20interesa%20conocer%20mas%20sobre%20Skillum"></a>
          </li>
          <li className='ml-6'>
            <a className='text-white no-underline' href="https://www.instagram.com/skillummx/?hl=en"></a>
          </li>
          <li className='ml-6'>
            <a className='text-white no-underline' href="https://www.facebook.com/SkillumMx"></a>
          </li>
          <li className='ml-6'>
            <a className='text-white no-underline' href="https://twitter.com/joseabelarteaga"></a>
          </li>
        </ul>
      </div>

      <div className='legal-wrapper border-t border-solid ring-offset-indigo-600 pt-6 mt-10 max-w-4xl my-0 mx-auto'>
        <ul className='legal-terms flex justify-end'>
          <li className='ml-6'>
            <a className='text-white no-underline' href='https://www.skillum.mx/terms.php'>
              <span>Terminos y condiciones</span>
            </a>
          </li>
        </ul>
      </div>

    </section>

    </main>
  )
}

export default registro
