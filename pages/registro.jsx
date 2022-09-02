import React from 'react'

const registro = () => {
  return (
    <main>
        <header class='fullw-head bg-white h-16 mb-3 drop-shadow shadow border-2'>
      <div className='wrapper-header flex justify-start items-center pt-4 z-10 h-min min-h-0 overflow-x-clip max-w-4xl my-0 mx-auto'>

        <a href="index.php">
          <img class='cursor-pointer h-8 w-auto sm:h-10' src="https://www.skillum.mx/images/Logo.png" alt="" />
        </a>

        <a href="index.php">
          <img class="cursor-pointer h-2 w-auto sm:h-4 pl-3" src="https://www.skillum.mx/images/iso.png" alt="" />
        </a>

        <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/login">
                <a className="text-sm font-normal hover:text-gray-300">
                    ¿Ya tienes una cuenta?
                </a>
            </Link>
                <a
                href="components/home/Hero#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium color-blue text-violet-700"
                >
                ENTRAR
                <span className="icon-arrow-right"/>
                </a>
        </div>
      </div>
    </header>

    {/* Waves Container */}
    <div></div>
    {/* Waves End */}

    {/* Esta seccion no tiene estilos */}
    {/* Registry Form */}
    <div class='registry-container'>
        <h3>Registrate en Skillum</h3>
        <div class='reg-body'>
            <ul class='campos-texst'>
                <li>¿Ya tienes una cuenta?</li>
                <li>
                    <a href='https://www.skillum.mx/login.php'>Entrar</a>
                </li>
            </ul>
            <h5>Registrate:</h5>
            <ul class='reg-socialbuttons'>
                <a href='#'>
                    <li>
                        <i class='ion-logo-google'></i>
                        <img class='' src="https://www.skillum.mx/images/google_png.png" alt="" />
                        Google
                    </li>
                </a>
                <a href='#'>
                    <li>
                        <i class='ion-social-facebook'></i>
                        Facebook
                    </li>
                </a>
            </ul>
            <p class='reg-div'>
                o
            </p>
            
            <div class='login-email'>
                <div class='reg-input'>
                    <div class='name-input'>
                        <div class='form-input'>
                            <input type="text" placeholder='Nombre' />
                            <label class='form-label'>Nombre</label>
                            <i class='plus-material'>person</i>
                            <div class='form-input-after'></div>
                        </div>
                        <div class='form-input'>
                            <input type="text" placeholder='Nombre'/>
                            <label class='form-label'>Apellido</label>
                            <div class='form-input-after'></div>
                        </div>
                    </div>
                </div>
                <div class="form-input">
                    <input type="telefono" placeholder="Teléfono" />
                    <label class="form-label">Teléfono</label>
                    <i class="plus-material">phone</i>
                    <div class="form-input-after"></div>     
                </div>
                <div class="form-input">
                    <input type="email" id="search-email" placeholder="email"/>
                    <label class="form-label">Email</label>
                    <i class="plus-material">email</i>
                    <div class="form-input-after"></div>             
                </div>
                <div class='alert-register'></div>
                <div class="reg-password">
                    <div class="form-input">
                        <input id="id_password" type="password" placeholder="Contraseña"/>
                        <label for="password" class="form-label">Contraseña</label>
                        <i class="plus-material">lock</i>
                        <div class="form-input-after"></div>
                    </div>
                    <i class="plus-material ojito" id="togglePassword">visibility</i>
                </div>
            </div>
            <p>Tu contraseña debe contener al menos seis caracteres, una mayúscula y un número</p>
            <div class='legal-checks'>
                <ul class='check-items'>
                    <li>
                        <input class='checkbox' type="ckeckbox" />
                        <p>
                            Acepto los
                            <span>terminos y condiciones</span>
                            de Skillum
                        </p>
                    </li>
                    <li>
                        <input class='checkbox' type="checkbox" />
                        Acepto recibir noticias y actualizaciones de Skillum
                    </li>
                </ul>
            </div>
            <button class='reg-button'>
                <p>COMIENZA AHORA</p>
            </button>
        </div>
    </div>

    <div class='modal-pop'>
        <div class='registry-sent'>
            <span class='close'>
                <i class='plus-material'>close</i>
            </span>
            <i class='icon-card'></i>
            <h3>Confirma tu correo</h3>
            <p>Enviamos un correo con las instrucciones para terminar tu registro. </p>
            <button onClick="window.location.href='login.php">ENTRAR</button>
        </div>
    </div>

    {/* Footer */}
    <section class='footer bg-indigo-800 pt-7 pr-0 pb-7 pl-0 mt-auto'>
      <div class='foot-wrap flex justify-start items-center max-w-5xl mt-0 mr-auto mb-0 ml-auto'>
        <div class='foot-left flex flex-row items-center'>
          <img class='w-8' src="https://www.skillum.mx/images/Logo(1).png" alt="" />
          <img class='ml-3 h-4' src="https://www.skillum.mx/images/Skillum.png" alt="" />
        </div>
        <ul class='foot-social ml-auto flex justify-start text-base'>
          <li class='ml-6'>
            <a  class='text-white no-underline' href="https://api.whatsapp.com/send?phone=524771189134&amp;text=Me%20interesa%20conocer%20mas%20sobre%20Skillum"></a>
          </li>
          <li class='ml-6'>
            <a class='text-white no-underline' href="https://www.instagram.com/skillummx/?hl=en"></a>
          </li>
          <li class='ml-6'>
            <a class='text-white no-underline' href="https://www.facebook.com/SkillumMx"></a>
          </li>
          <li class='ml-6'>
            <a class='text-white no-underline' href="https://twitter.com/joseabelarteaga"></a>
          </li>
        </ul>
      </div>

      <div class='legal-wrapper border-t border-solid ring-offset-indigo-600 pt-6 mt-10 max-w-4xl my-0 mx-auto'>
        <ul class='legal-terms flex justify-end'>
          <li class='ml-6'>
            <a class='text-white no-underline' href='https://www.skillum.mx/terms.php'>
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