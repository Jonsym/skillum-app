import { Card } from '../Card';
import Image from 'next/image'

export const Experts = ({ experts }) => {
    return (
        <div className="max-w-5xl m-auto py-20">
            <h2 className="text-4xl max-w-lg leading-10">Aprende con nuestros expertos certificados</h2>
            <div className="py-10 flex justify-between">
                <Card>
                    <div className="flex max-w-md">
                        <div className="w-1/2">
                            <Image src={''} />
                        </div>
                        <div className="w-1/2">
                            <h3 className="text-xl">Abel Arteaga</h3>
                            <p className="text-sm">Master en Gestión de Proyectos</p>
                            <div className="w-5 h-1 bg-blue-600 my-4 rounded-3xl"></div>
                            <p className="text-xs">Consultor de adopción tecnológica en entornos educativos. Crea innovación en metodologías, ambientes y recursos de educación.</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex max-w-md">
                        <div className="w-1/2">
                            <Image src={''} />
                        </div>
                        <div className="w-1/2">
                            <h3 className="text-xl">Hilda Ortíz</h3>
                            <p className="text-sm">Especialista en finanzas</p>
                            <div className="w-5 h-1 bg-blue-600 my-4 rounded-3xl"></div>
                            <p className="text-xs">Experta en administración y coordinación de herramientas financieras de instituciones públicas y privadas.</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
