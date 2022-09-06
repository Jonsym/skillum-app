import {Layout} from "../components";
import LogoBW from '../assets/Logo-BW.png'
import Image from "next/image";
const curso = () => {
    return (
        <Layout>
            <div className="max-w-5xl m-auto pt-16">
                <div className="folder-address wrapper flex mt-28 mb-5 border-b border-gray-400 pb-5">
                    <Image src={LogoBW} alt="Logo" width={16} height={16}/>
                    <i className="material-icons" id="plus-material">chevron_right</i><a href="cursos.php">Cursos</a><i
                    className="material-icons" id="plus-material">chevron_right</i><a href="">Principios y fundamentos de la
                    Medicina Regenerativa y la terapia Celular Medicina regenerativa y terapia celular</a>
                </div>
                <ul className="tags wrapper flex">
                    <li className="blue-tag flex bg-blue-200 text-blue-700 text-sm py-1 px-4 rounded-2xl mr-1">Seminario</li>
                    <li className="purple-tag flex bg-purple-200 text-purple-700 text-sm py-1 px-4 rounded-2xl mr-1">Especializado</li>
                    <li className="green-tag flex bg-green-300 text-green-700 text-sm py-1 px-4 rounded-2xl">Gratuito</li>
                </ul>
                <section className="descripcion-curso wrapper flex justify-between">
                    <section className="detalles-curso w-3/5">
                        <h1>Principios y fundamentos de la Medicina Regenerativa y la terapia Celular</h1>
                        <img className="w-full" src="https://skillum.mx/images/cursos-card11.png" alt="detalle-curso"/>
                        <div className="mini-cache drop-shadow">
                            <ul className="mini-info">
                                <li><i className="material-icons" id="plus-material">date_range</i> 24 y 25 de Noviembre
                                    del 2021
                                </li>
                                <li><i className="material-icons" id="plus-material">av_timer</i>Horario de 19:00 a
                                    20:00
                                </li>
                                <li><i className="material-icons" id="plus-material">public</i>Evento Online (Live
                                    Streaming)
                                </li>

                            </ul>
                            <p>Se revisarán los principios y fundamentos biológicos de la medicina regenerativa, en
                                particular de las células troncales mesenquimales y de la terapia celular.</p>
                        </div>
                        <div className="float-card drop-shadow" id="onlymobile">
                            <ul className="float-pricelist">
                                <li>$ 0 MXN</li>
                                <li>MXN</li>

                            </ul>

                            <ul className="float-desc">
                                <li className="participants"><i className="material-icons"
                                                                style={{fontSize: '1rem'}}>confirmation_number</i>Cupo
                                    limitado
                                </li>
                                <li className="participants"><i className="material-icons"
                                                                style={{fontSize: '1rem'}}>date_range</i> 24 y 25 de
                                    Noviembre.
                                </li>
                                <li className="participants"><i className="material-icons"
                                                                style={{fontSize: '1rem'}}>av_timer</i>Sesiones con tiempo
                                    variable
                                </li>
                                <li className="participants"><i className="material-icons"
                                                                style={{fontSize: '1rem'}}>public</i>Evento Online (Live
                                    Streaming)
                                </li>
                                <li className="participants"><i className="material-icons"
                                                                style={{fontSize: '1rem'}}>flag</i>Nivel avanzado
                                </li>
                                <li className="participants"><i className="material-icons"
                                                                style={{fontSize: '1rem'}}>timelapse</i>Duración 2 horas
                                </li>
                            </ul>

                            <div className="cart-add-button">
                                <button className="curso-button pure-material-button-contained" id="boton5"
                                        onClick="window.location.href='regen.php'"><i className="plus-material">add</i>AÑADIR
                                    A TUS CURSOS
                                </button>
                            </div>

                        </div>
                        <ul className="flexrow">
                            <li><img src="images/imr.png" alt="" style={{ marginRight: 16}}/></li>
                            <li><h4>Impartido por el Instituto de Medicina Regenerativa</h4></li>
                        </ul>
                        <div className="expert">
                            <div className="expert-header">
                                <img src="images/almanza.png" alt=""/>
                                <ul className="expert-text">
                                    <li>Arturo Mancera Almanza</li>
                                    <li>Máster en Medicina Regenerativa</li>
                                </ul>
                                <ul className="redes-person" style={{ display: 'none'}}>
                                    <li><a href="#" className="fab"></a></li>
                                    <li><a href="#" className="fab"></a></li>
                                    <li><a href="#" className="fab"></a></li>
                                </ul>
                            </div>

                            <p>Médico Cirujano por la Universidad de Guanajuato, especialista en Medicina Interna.
                                Cuenta con Master en Medicina Antienvejecimiento y Longevidad. </p>

                            <h1>Alianza con:</h1>
                            <ul className="avalado-img">
                                <img src="images/cerosalud.png" alt=""/>
                            </ul>
                            <p>CREOSALUD Un corporativo mexicano que ofrece al gremio médico productos y servicios de
                                Medicina Regenerativa de excelencia y está conformado por el Instituto de Medicina
                                Regenerativa, un Centro de Distribución de Servicio Integral y Logística Médica,
                                Laboratorio Certificado en Biotecnología, Una Asociación en Biotecnología Cosmeatrica ,
                                Clínica y Asociación Civil.</p>
                            <h1>¿A quién va dirigido?</h1>
                            <p>A médicos titulados y con cédula profesional que desean capacitarse en Medicina
                                Regenerativa y Terapia Celular para el tratamiento de enfermedades
                                crónico-degenerativas, medicina del deporte y medicina estética.</p>
                            <h1>¿Qué aprenderás?</h1>
                            <ul className="aprenderas-list">
                                <li><i className="plus-material">done</i>Aprenderás los principios y fundamentos de la
                                    medicina regenerativa y la terapia celular.
                                </li>
                                <li><i className="plus-material">done</i>Conocerás los campos de aplicación de la
                                    medicina regenerativa.
                                </li>
                                <li><i className="plus-material">done</i>Sobre la medicina basada en evidencias.</li>
                            </ul>

                            <h1>¿Cómo se realizará?</h1>
                            <p>El seminario se conforma de 2 sesiones de una hora cada día, programadas para los días 24
                                y 25 de noviembre del 2021. Se realizará en línea por live streaming, es gratuito por lo
                                que sólo tienes que registrarte para para participar y recibirás un correo electrónico
                                con tu acceso.</p>
                            <div className="card-links">
                                <button className="expert-button pure-material-button-contained"
                                        onClick="window.location.href='"><i className="material-icons">add</i>AÑADIR
                                    CURSO
                                </button>
                            </div>
                            <div className="expert-contenido">
                                <h1>Contenido</h1>
                                <ul className="cont-list">

                                    <li><i>1.1</i>Definición</li>
                                    <li><i>1.2</i>Generalidades e introducción</li>
                                    <li><i>1.3</i>Terapia celular</li>
                                    <li><i>1.4</i>Células troncales (madre)</li>
                                    <li><i>1.5</i>Clasificación</li>
                                    <li><i>1.6</i>Características</li>
                                    <li><i>1.7</i>Técnicas terapéuticas</li>
                                    <li><i>1.8</i>Fuentes de obtención</li>
                                    <li><i>1.9</i>Aplicaciones clínicas</li>
                                </ul>


                            </div>
                            <div className="intro-skillum">
                                <h1>Sobre el contenido Introductorio en Skillum</h1>
                                <p>En este programa de nivel introductorio, te adentrarás en el mundo de la Medicina
                                    Regenerativa y la Terapia Celular, perfeccionarás conocimientos en la materia, de la
                                    mano de nuestros expertos. Obtendrás contenido de valor que te ayudará a crecer
                                    profesionalmente.</p>
                                <div className="icons">
                                    <div className="expert-iconos">
                                        <ul className="expert-card">
                                            <li className="icon-card"></li>
                                            <li className="card-desc"><h4>Aprende de<br/> expertos</h4></li>
                                        </ul>
                                        <ul className="expert-card">
                                            <li className="icon-card"></li>
                                            <li className="card-desc"><h4>Para<br/>profesionales<br/>titulados</h4></li>
                                        </ul>
                                        <ul className="expert-card">
                                            <li className="icon-card"></li>
                                            <li className="card-desc"><h4>Aprende <br/> gratuitamente<br/>y en linea</h4>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="icons">
                                        <div className="expert-iconos">
                                            <ul className="expert-card">
                                                <li className="icon-card"></li>
                                                <li className="card-desc"><h4>Aplica tus<br/>aprendizajes</h4></li>
                                            </ul>
                                            <ul className="expert-card">
                                                <li className="icon-card"></li>
                                                <li className="card-desc"><h4>Atención<br/>personalizada</h4></li>
                                            </ul>
                                            <ul className="expert-card">
                                                <li className="icon-card"></li>
                                                <li className="card-desc"><h4>Contenido de Valor</h4></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div></section>

                    <div className="float-card drop-shadow">
                        <ul className="float-pricelist">
                            <li>$ 0 MXN</li>
                            <li>MXN</li>
                        </ul>

                        <ul className="float-desc">
                            <li className="participants"><i className="material-icons"
                                                            style={{ fontSize: '1rem' }}>confirmation_number</i>Cupo limitado
                            </li>
                            <li className="participants"><i className="material-icons"
                                                            style={{ fontSize: '1rem' }}>date_range</i>24 y 25 Noviembre del
                                2021.
                            </li>
                            <li className="participants"><i className="material-icons" style={{ fontSize: '1rem' }}>av_timer</i>Sesiones
                                con tiempo variable
                            </li>
                            <li className="participants"><i className="material-icons" style={{ fontSize: '1rem' }}>public</i>Evento
                                Online (Live Streaming)
                            </li>
                            <li className="participants"><i className="material-icons" style={{ fontSize: '1rem' }}>flag</i>Nivel
                                avanzado
                            </li>
                            <li className="participants"><i className="material-icons"
                                                            style={{ fontSize: '1rem' }}>timelapse</i>Duración 2 horas
                            </li>
                        </ul>

                        <div className="cart-add-button">
                            <button className="curso-button pure-material-button-contained" id="boton5"
                                    onClick="window.location.href='regen.php'"><i className="plus-material">add</i>AÑADIR A
                                TUS CURSOS
                            </button>
                        </div>

                    </div>
                </section>
                    <section className="cursos wrapper crumbs-curso">
                        <h3>Cursos que te pueden interesar</h3>
                        <div className="cursos-card drop-shadow">
                            <img src="images/cursos-card1.png" alt=""/>
                            <div className="cursos-dsc">
                                <ul className="tags">
                                    <li className="blue-tag">Curso</li>
                                    <li className="purple-tag">Introductorio</li>
                                </ul>
                                <h3>Técnicas de gestión efectiva del tiempo</h3>
                                <p>Aprende herramientas y técnicas de organización para una gestión eficaz de tu tiempo
                                    y puedas desarrollar tus objetivos y tus metas.</p>
                                <ul className="curso-price price-tag">100% dto. <span>$ 2599 MXN</span></ul>
                                <div className="card-links">
                                    <button className="curso-button pure-material-button-contained"><i
                                        className="plus-material">add</i>AÑADIR A MIS CURSOS
                                    </button>
                                    <button className=" pure-material-button-contained"><a href="curso3.php">CONOCE
                                        MÁS</a></button>
                                </div>
                            </div>
                        </div>
                        <div className="cursos-card drop-shadow">
                            <img src="images/cursos-card2.png" alt=""/>
                            <div className="cursos-dsc">
                                <ul className="tags">
                                    <li className="blue-tag">Curso</li>
                                    <li className="purple-tag">Introductorio</li>
                                </ul>
                                <h3>Técnicas de gestión efectiva del tiempo</h3>
                                <p>Aprende herramientas y técnicas de organización para una gestión eficaz de tu tiempo
                                    y puedas desarrollar tus objetivos y tus metas.</p>
                                <ul className="curso-price price-tag"></ul>
                                <div className="card-links">
                                    <button className="curso-button pure-material-button-contained"><i
                                        className="plus-material">add</i>AÑADIR A MIS CURSOS
                                    </button>
                                    <button className=" pure-material-button-contained"><a href="curso2.php">CONOCE
                                        MÁS</a></button>
                                </div>
                            </div>
                        </div>
                        <div className="cursos-card drop-shadow">
                            <img src="images/cursos-card4.png" alt=""/>
                            <div className="cursos-dsc">
                                <ul className="tags">
                                    <li className="blue-tag">Alineación</li>
                                    <li className="purple-tag">Avanzado</li>
                                    <li className="orange-tag">Con certificación</li>
                                </ul>
                                <h3>Aprende a diseñar e impartir cursos presenciales para grupos</h3>
                                <p>Aprende las bases teóricas y prácticas para certificarte como capacitador de cursos
                                    presenciales grupales bajo los estándares de Competencia EC0301 y EC0217.</p>
                                <ul className="curso-price price-tag"></ul>
                                <div className="card-links">
                                    <button className="curso-button  pure-material-button-contained"><i
                                        className="material-icons"
                                        style={{ fontSize: '1rem', marginRight: 4 }}>shopping_cart</i>3,850 MXN
                                    </button>
                                    <button className=" pure-material-button-contained"><a href="curso4.php">CONOCE
                                        MÁS</a></button>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        </Layout>
    )
}

export default curso;
