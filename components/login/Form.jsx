import { Card }  from '../Card';

export const LoginForm = () => {
    return (
        <div className="w-2/5">
            <Card>
                <div className="px-2 py-2">
                    <h1 className="text-xl mb-5">Entra a Skillum</h1>
                    <div className="border border-b-gray-100 mb-5"/>
                    <p className="text-sm mb-5 mr-2">No tienes cuenta? <span class='text-indigo-700 cursor-pointer'>Registrate</span></p>
                    <input className="bg-gray-100 rounded w-full py-2 pl-3 box-border" placeholder="Correo electrónico" type="text"/>
                    <input className="bg-gray-100 rounded w-4/5 py-2 pl-3 mt-5 box-border" placeholder="Contraseña" type="text"/>
                    <div className="flex justify-between mt-5">
                        <p className="text-xs">Olvidaste la contraseña?</p>
                        <button
                            className="block text-white tracking-wider
                             text-xs py-3 px-4 rounded-md shadow bg-blue-700 font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                        >
                            VOLVER
                        </button>
                    </div>
                </div>
            </Card>

            <div>
                <img class='absolute -z-10 mt-16 ml-64 rounded-xl border' src="https://www.skillum.mx/images/login-girl.png" alt="" />
            </div>

            <div className="bg-blue-900 p-10">
            <div className="max-w-5xl flex justify-start items-center">
                <div className="flex justify-between flex-row items-center">
                    <img src="https://www.skillum.mx/images/Logo(1).png" alt="" />
                    <img class='ml-3' src="https://www.skillum.mx/images/Skillum.png" alt="" />
                </div>

                <div class='ml-auto flex justify-start text-base'>

                <li class='ml-6'>
                    <a class='text-white no-underline' href="https://api.whatsapp.com/send?phone=524771189134&amp;text=Me%20interesa%20conocer%20mas%20sobre%20Skillum"></a>
                </li>
                <li>
                    <a href='https://www.instagram.com/skillummx/?hl=en'></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/SkillumMx" class="fab"></a>
                </li>
                <li>
                    <a href="https://twitter.com/joseabelarteaga" class="ion-social-twitter"></a>
                </li>

                </div>
            </div>

            <div class="border border-indigo-800 pt-6 m-10">
                <ul class="flex justify-start">
                    <li>
                        <a class='text-white no-underline' href="terms.php"><span>Términos y condiciones</span></a>
                    </li>
                </ul>
            </div>
        </div>

        </div>
    )
}
