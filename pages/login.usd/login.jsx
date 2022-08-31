import React from 'react'

const login = () => {
  return (
    <main>
      <header class='fullw-head bg-white h-16 mb-3 drop-shadow shadow border-2'>
      <div className='wrapper-header flex justify-start items-center pt-4 z-10 h-min min-h-0 overflow-x-clip max-w-4xl my-0 mx-auto'>

        <a href="index.php">
          <img class='h-8 w-auto sm:h-10' src="https://www.skillum.mx/images/Logo.png" alt="" />
        </a>

        <a href="index.php">
          <img class="h-2 w-auto sm:h-4 pl-3" src="https://www.skillum.mx/images/iso.png" alt="" />
        </a>

        <div class='menu z-10 flex justify-between'>
          <div id='opacity'></div>
            <input  class='hidden text-black font-normal pt-3.5 pl-8 h-12 bg-white border-none rounded-lg' type="text" />
            

            <ul class='nav-container z-10 flex justify-between'>
              <ul class='nav-link left mx-5'></ul>
              <ul class='nav-link right mx-auto'>
                <li class='text-xs font-medium hover:text-gray-300'>¿No tienes una cuenta?</li>
                <li class='flex items-center px-2.5 font-bold text-xs tracking-normal mb-px'>
                  <a  class='inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium color-blue' href='https://www.skillum.mx/register.php'>
                    "REGISTRATE GRATIS"
                    <span class='icon-arrow-right'>
                      :before
                    </span>
                  </a>
                </li>
              </ul>
            </ul>
        </div>
      </div>
    </header>

    {/* Waves Container */}
    <div></div>
    {/* Waves End */}
  
    <div class='login-container flex justify-start max-w-4xl'>
      <div class='login-form mt-32 bg-white rounded-lg max-w-md p-8 border-2 shadow-black'>
        <h2 class='text-sm font-normal'>Entra a Skillum</h2>
        <div class='login-body border-y-2 my-6'>
          <ul class='campos-text flex flex-row justify-start text-sm mt-6'>
            <li class='mr-2 text-black'>¿No tiene una cuenta?</li>
            <li>
              <a class='text-indigo-700 cursor-pointer mr-2' href='https://www.skillum.mx/register.php'>Registrate</a>
            </li>
          </ul>
          <form class='login-form' action="form.php">
            <div class='login-imput'>
                <div class='form-imput relative mt-6'>
                  <input class='text-black font-normal pt-3.5 pl-8 h-12 bg-white border-none rounded-lg' type="email" placeholder='Correo Electronico' />
                  <label class='absolute top-4 left-9 text-sm transition-all duration-100 ease-in text-black flex items-center'>Correo Electronico</label>
                  <i class='absolute top-3.5 left-3.5 text-black not-italic font-normal text-base p-px'>email</i>
                  <div class='form-imput-after bg-indigo-800 w-4/5 absolute h-0.5 z-1 left-1 bottom-0 duration-75 ease-out'></div>
                </div>

                <div class='form-imput relative mt-6'>
                  <input class='text-black font-normal pt-3.5 pl-8 h-12 bg-white border-none rounded-lg' type="password" placeholder='Contraseña' />
                  <label class='absolute top-4 left-9 text-sm transition-all duration-100 ease-in text-black flex items-center'>Contraseña</label>
                  <i class='absolute top-3.5 left-3.5 text-black not-italic font-normal text-base p-px'>lock</i>
                  <div class='bg-indigo-800 w-4/5 h-0.5 z-10 left-1 bottom-0 transition-all duration-75 ease-linear delay-75'></div>
                </div>

                <ul class='login-buttons flex flex-row justify-between mt-10 items-center'>
                  <li class='text-sm text-indigo-700 cursor-pointer'>Olvidaste tu contraseña</li>
                  <li>
                    <button class='text-xs font-bold tracking-normal bg-violet-800 text-white p-3.5 rounded cursor-pointer'>Entrar</button>
                  </li>
                </ul>
                <p class='text-center relative mt-6 bg-white'>
                  ó
                </p>

              <ul class='social-buttoms flex flex-row justify-between my-4 text-black'>
                  <a class='w-6/12 h-12' href='#'>
                    <li class='p-3 border-2 rounded-lg flex flex-row items-center justify-center cursor-pointer'>
                      <i class='logo-google mr-4'></i>
                      <img class='w-5 mr-2' src='https://www.skillum.mx/images/google_png.png' alt/>
                      Google
                    </li>
                  </a>
              
                <a class='w-6/12 h-12' href='#'>
                  <li class='p-3 border-2 rounded-lg flex flex-row items-center justify-center cursor-pointer'>
                    <i class='logo-facebook mr-4 text-sky-800 '></i>
                    <img class='w-5 mr-4' src='' alt/>
                    Facebook
                  </li>
                </a>
              </ul>
            </div>
          </form>

          {/* Desde aqui deje de poner estilos */}
          
          <div class='model-pop hidden fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-transparent justify-items-center items-center'>
            <div class='passform relative max-w-md h-min bg-white rounded-lg p-8 flex flex-col'>
              <span>
                <i class='absolute top-0 right-1 text-base text-indigo-700 font-semibold'>close</i>
              </span>
              <h3 class='font-normal text-xl'>Recuperar contraseña</h3>
              <div class=' divide-form w-full border-t-2 border-solid border-white mt-8 mb-8'></div>
              <p class='text-sm font-normal'>Enviamos un correo con las instrucciones para terminar tu registro. </p>

              <form method='POST'>
                <div class='form-input relative mt-6'>
                  <input class='text-black font-normal pt-3.5 pl-8 h-12 bg-white border-none rounded-lg' type="email" placeholder="Correo Electronico" />
                  <label class="absolute top-4 left-9 text-sm transition-all duration-75 ease-linear text-black flex items-center">Correo Electronico</label>
                  <i class='absolute top-3.5 left-3.5 text-black'>email</i>
                  <div class='form-imput-after bg-violet-800 w-4/5 absolute h-0.5 z-10 left-1 bottom-0 transition-all duration-75 ease-linear'></div>
                </div>
                <ul class='passbuttoms flex flex-row justify-start items-center mt-10'>
                  <li>
                    <button class='cursor-pointer bg-violet-700 pt-2 pr-3 pb-2 pl-3 rounded-t rounded-tr rounded-br rounded-bl text-white text-xs font-bold flex items-center tracking-normal mr-6 transition-all duration-75 ease-linear'>BUSCAR</button>
                  </li>
                  <li>
                    <a class='boton cancel text-indigo-700 text-xs font-bold'>Cancelar</a>
                  </li>
                </ul>
              </form>

            </div>
          </div>

          <div class='change-pop'>
            <div class='plassform drop-shadow'>
              <span class='close'>
                <i class='plus-material'></i>
              </span>
              <h3>Recuperar contraseña</h3>
              <div class='divider-form'></div>
              <p>Crea una nueva contraseña</p>

              <form class="changeform">
                <ul class='input-fild'>
                  <li>
                    <input type="password" placeholder='Clave Nueva' />
                  </li>
                  <li>
                    <i class='plus-material'>visibility</i>
                  </li>
                  <p>Tu contraseña debe contener al menos seis caracteres, una mayúscula y un número</p>
                  <ul class='passbuttoms'>
                    <li>
                      <button>Cambiar</button>
                    </li>
                    <li>
                      <a class='botondos cancel'>CANCELAR</a>
                    </li>
                  </ul>
                </ul>
              </form>
            </div>
          </div>

          <div class='final-pop'>
            <div class='registry-sent'>
              <span class='close'>
                <i class='plus-material'>close</i>
              </span>
              <i class='icon-card'></i>
              <h1>Contraseña actualizada</h1>
              <h2>Entra en Skillum</h2>
              <button>Entrar</button>
            </div>
          </div>
        </div>
      </div>
      <img class='drop-shadow' src="https://www.skillum.mx/images/login-girl.png" alt=''/>
    </div>

    <section class='footer'>
      <div class='foot-wrap'>
        <div class='foot-left'>
          <img src="https://www.skillum.mx/images/Skillum.png" alt="" />
          <img src="https://www.skillum.mx/images/Skillum.png" alt="" />
        </div>
        <ul class='foot-social'>

        <li>
          <a href="https://api.whatsapp.com/send?phone=524771189134&amp;text=Me%20interesa%20conocer%20mas%20sobre%20Skillum" class="ion-social-whatsapp"></a>
        </li>
        <li>
          <a href="https://www.instagram.com/skillummx/?hl=en" class="fab"></a>
        </li>
        <li>
          <a href="https://www.facebook.com/SkillumMx" class="fab"></a>
        </li>
        <li>
          <a href="https://twitter.com/joseabelarteaga" class="ion-social-twitter"></a>
        </li>

        </ul>
      </div>

      <div class='legal-wrapper'>
        <ul class='legal-terms'>
          <li>
            <a href='https://www.skillum.mx/terms.php'>
              <span>Terminos y condiciones</span>
            </a>
          </li>
        </ul>
      </div>

    </section>

    </main>

  )
}

export default login