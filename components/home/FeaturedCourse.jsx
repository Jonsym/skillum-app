import Image from "next/image";

export const FeaturedCourse = ({ title, tags, description, price, discount, id, image }) => {
    return (
        <div className="flex max-w-3xl m-auto py-20 items-center">
            <div className="w-1/2 h-96 bg-gray-100 mr-5">
                <Image src={''} />
            </div>
            <div className="w-1/2">
                <div className="flex mb-3">
                    <div className="bg-blue-300 rounded-full py-2 px-4 text-sm leading-1 mr-3">Seminario</div>
                    <div className="bg-purple-300 rounded-full py-2 px-4 text-sm leading-1 text-blue-800">Introductorio</div>
                </div>
                <h4 className="text-3xl">Introducción a capacitación presencial o en línea</h4>
                <p  className="text-lg mt-4">Aprende cómo emprender en el mundo del desarrollo humano y capacitación desde cero.</p>
                <div className="mt-10 mb-3">
                    <span className="text-3xl font-bold mr-1">$0.00</span><span className="text-xs font-medium">MXN</span>
                </div>
                <button
                    className="tracking-wider text-xs block text-white py-3 px-4 rounded-md shadow bg-blue-300 font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                >
                    RESERVA TU CUPO
                </button>
            </div>
        </div>
    )
}
