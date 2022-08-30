import React from 'react'

const Container = () => {
  return (
    <section className='container relative bg-sky-200 truncate'>
        <div className='scene transform rotate-1 invisible pointer-events-none w-28 max-h-screen absolute flex flex-row justify-between pt-1.5 px-5'>
            <div className='layer transfor invisible relative block px-0 py-0 w-3/4 h-3/5'>
                {/*<img src='https://www.skillum.mx/images/hero-bg/S1.png' className='w-full h-full mx-9' alt='' />*/}
            </div>
        </div>


        <header className=' Navbar-code flex justify-start items-center py-4 z-10 min-h-min overflow-x-clip'>
        <a hrer="https://www.skillum.mx/index.php">
            {/*<img className='cursor-pointer w-12' src="https://www.skillum.mx/images/Logo.png" alt="Logo" />*/}
        </a>
        <a hrer="https://www.skillum.mx/index.php">
            {/*<img className='cursor-pointer mx-5 h-4' src="https://www.skillum.mx/images/iso.png" alt="" />*/}
        </a>

        <div className='nav-menu z-20 flex justify-between'>
        <div id='opacity'>
            <div></div>
            <input type="checkbox" className='hidden' />
            <span></span>
            <span></span>
            <span></span>

            <ul className="nav-container z-20 flex justify-between">
                <ul className='nav-left mx-5'>
                    <li className='flex items-center px-2.5 font-bold text-xs tracking-widest mb-px'>
                        <a hrer="https://www.skillum.mx/index.php" className='text-neutral-700'>CURSOS</a>
                    </li>
                </ul>
                <ul className='mx-5'>
                    <li className='flex items-center px-2.5 font-bold text-xs tracking-widest mb-px'>
                        <a hrer="https://www.skillum.mx/index.php" className='text-neutral-700'>EVENTOS</a>
                    </li>
                </ul>
                <ul className='mx-5'>
                    <li className='flex items-center px-2.5 font-bold text-xs tracking-widest mb-px'>
                        <a hrer="https://www.skillum.mx/index.php" className='text-neutral-700'>PROFESORES</a>
                    </li>
                </ul>
                <ul className='mx-5'>
                    <li className='flex items-center px-2.5 font-bold text-xs tracking-widest mb-px'>
                        <a hrer="https://www.skillum.mx/index.php" className='text-neutral-700'>BLOG</a>
                    </li>
                </ul>
                <ul className='mx-5'>
                    <li className='flex items-center px-2.5 font-bold text-xs tracking-widest mb-px'>
                        <a hrer="https://www.skillum.mx/index.php" className='text-neutral-700'>CONTACTO</a>
                    </li>
                </ul>
            </ul>

            <ul className='nav-right'>
                <li className='flex items-center px-2.5 font-bold text-xs tracking-widest mb-px'>
                    <a hrer="https://www.skillum.mx/cart.php" className='text-neutral-700'></a>
                </li>
                <li className='bg-black w-0.5 h-6 cursor-default px-0'></li>
                <li className='flex items-center px-2.5 font-bold text-xs tracking-widest mb-px'>
                    <a href="login.php">ENTRAR</a>
                </li>
                <li className='flex items-center px-2.5 font-bold text-xs tracking-widest mb-px'>
                <a href="register.php" className='text-violet-700 flex items-center'>REGISTRATE GRATIS</a>
                </li>
            </ul>
        </div>
        </div>
    </header>



    <section className='Hero-section'>
        <div>
            <p>TU ACADEMIA</p>
        </div>
    </section>




    <div className='olas'>

    </div>

    </section>
  )
}

export default Container
