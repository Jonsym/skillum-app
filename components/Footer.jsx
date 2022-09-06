import React from "react";

export const Footer = () => {
    return (
        <section className='footer bg-blue-900 pt-7 pr-0 pb-7 pl-0 mt-auto'>
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
    )
}
