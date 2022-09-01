import React from 'react'
import Link from 'next/link';

const login = () => {
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
                            ¿No tienes una cuenta?
                        </a>
                        </Link>
                        <a
                            href="components/home/Hero#"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium color-blue text-violet-700"
                        >
                            REGISTRATE GRATIS
                            <span className="icon-arrow-right"/>
                        </a>
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

          <div class='change-pop hidden fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black justify-items-center items-center'>
            <div class='plassform relative max-w-md h-min bg-white rounded-lg p-8 flex flex-col border shadow-black'>
              <span>
                <i class='plus-material absolute top-0 right-1 text-base text-indigo-700 font-semibold'>close</i>
              </span>
              <h3 class='font-normal text-xl'>Recuperar contraseña</h3>
              <div class='divider-form w-full border-t border-solid border-white mt-8 mb-8'></div>
              <p class='text-sm font-normal'>Crea una nueva contraseña</p>

              <form class="changeform">
                <ul class='input-fild mt-6 flex items-center flex-row'>
                  <li class='w-4/5 mr-6'>
                    <input type="password h-12 bg-white border-none rounded-lg p-3.5 w-full" placeholder='Clave Nueva' />
                  </li>
                  <li class='mr-6'>
                    <i class='plus-material text-indigo-700 cursor-pointer'>visibility</i>
                  </li>
                  <p class='mt-2 text-black text-xs font-normal'>Tu contraseña debe contener al menos seis caracteres, una mayúscula y un número</p>
                  <ul class='passbuttoms flex flex-row justify-start items-center mt-10'>
                    <li>
                      <button class='cursor-pointer bg-indigo-700 pt-2 pr-3 pb-2 pl-3 border-0 rounded text-white text-xs font-bold flex items-center tracking-normal mr-6 transition-all duration-75 ease-linear'>CAMBIAR</button>
                    </li>
                    <li>
                      <a class='botondos cancel text-indigo-700 text-xs font-bold cursor-pointer'>CANCELAR</a>
                    </li>
                  </ul>
                </ul>
              </form>
            </div>
          </div>

          <div class='final-pop hidden fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black justify-items-center items-center'>
            <div class='registry-sent max-w-md h-96 bg-white rounded-lg p-12 absolute box-border flex flex-col items-center text-center justify-between border shadow-black'>
              <span>
                <i class='plus-material absolute top-0 right-1 text-xl text-indigo-700 font-semibold'>close</i>
              </span>
              <i class='icon-card not-italic w-16 h-16 rounded-br-3xl grid place-items-center mb-4 text-3xl'></i>
              <h1 class='text-2xl font-normal'>Contraseña actualizada</h1>
              <h2 class='text-xl font-normal'>Entra en Skillum</h2>
              <button class='text-xs font-bold tracking-normal bg-indigo-700 text-white p-3.5 rounded transition-all duration-75 ease-linear delay-75'>Entrar</button>
            </div>
          </div>
        </div>
      </div>
      <img class='absolute -z-10 mt-16 ml-64 rounded-xl border' src="https://www.skillum.mx/images/login-girl.png" alt=''/>
    </div>

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

export default login