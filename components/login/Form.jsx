import { Card }  from '../Card';

export const LoginForm = () => {
    return (
        <div className="w-2/5">
            <Card>
                <div className="px-2 py-2">
                    <h1 className="text-xl mb-5">Entra a Skillum</h1>
                    <div className="border border-b-gray-100 mb-5"/>
                    <p className="text-sm mb-5">No tienes cuenta? <span>Registrate</span></p>
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
        </div>
    )
}
