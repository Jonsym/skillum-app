const posts = [
    {
        title: 'Introduccion a capacitacion presencial o en línea.',
        href: '#',
        category: { name: 'Seminario', href: '#' },
        description:
            'Aprende como emprender en el mundo de desarrollo humano y capacitacion desde cero.',
        imageUrl:
            'https://www.skillum.mx/images/desk.png',
    },
    {
        title: 'Introduccion a capacitacion presencial o en línea.',
        href: '#',
        category: { name: 'Seminario', href: '#' },
        description:
            'Aprende como emprender en el mundo de desarrollo humano y capacitacion desde cero.',
        imageUrl:
            'https://www.skillum.mx/images/desk.png',
    },
]

export const Cursos = () => {
    return (
        <>
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">Cursos únicos</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Obten información y materiales especializados para que puedas obtener nuevas habilidades y mejorar tu curriculum profesional.
                    </p>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-violet-500 sm:mt-4">VER CURSOS</p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        <a href={post.category.href} className="hover:underline">
                                            {post.category.name}
                                        </a>
                                    </p>
                                    <a href={post.href} className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="ml-3">
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">Eventos exclusivos</h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    Participa eventos que te cambiarán la vida y te darán las herramientas que necesitas para lograr tus metas profesionales eficázmente
                </p>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-violet-500 sm:mt-4">VER EVENTOS</p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-1 lg:max-w-none">
                {posts.map((post) => (
                    <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600">
                                    <a href={post.category.href} className="hover:underline">
                                        {post.category.name}
                                    </a>
                                </p>
                                <a href={post.href} className="block mt-2">
                                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="ml-3">
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
    )
}
