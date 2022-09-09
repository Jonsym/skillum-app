import React from 'react'
import { Layout} from '../components';

const login = () => {
  return (
    <Layout>


    <div className='login-container flex justify-start max-w-4xl m-auto'>
      <div className="login-form drop-shadow">
        <h2>Entra a Skillum</h2>

        <div className="login-body">
          <ul className="campos-text">
            <li>¿No tienes una cuenta?</li>
            <li><a href="register.php">Regístrate</a></li>
          </ul>
          <form id="loginform" action="form.php" method="POST" className="login-email">
            <div className="login-input">

              <div className="form-input">
                <input type="email" placeholder="Correo Electronico" name="email"/>
                  <label htmlFor="username" className="form-label">Correo Electrónico</label>
                  <i className="plus-material">email</i>
              <div className="form-input-after"></div>

              </div>
              <div className="form-input">
                <input type="password" placeholder="Contraseña" name="password"/>
                  <label htmlFor="username" className="form-label">Contraseña</label>
                  <i className="plus-material">lock</i>
                  <div className="form-input-after"></div>
              </div>
            </div>

            <ul className="login-buttons">
              <li id="passbutton">¿Olvidaste la contraseña?</li>
              <li>
                <button name="login">ENTRAR</button>
              </li>
            </ul>
            <p className="reg-div">ó</p>
            <ul className="log-socialbuttons">
              <a href="#" id="google-login">
                <li><i className="ion-logo-google"></i><img className="google-png" src="images/google_png.png"
                                                            alt=""/> Google</li>
              </a>
              <a href="#" id="facebook-login">
                <li><i className="ion-social-facebook" style={{ color: "#3B5998"}}/> Facebook</li>
              </a>
            </ul>

          </form>
          <div id="modal-pop">
            <div className="passform drop-shadow">
              <span className="close"><i className="plus-material" id="reg-close">close</i></span>

              <h3>Recuperar contraseña</h3>
              <div className="dividerform"></div>
              <p>Enviamos un correo con las instrucciones para terminar tu registro. </p>
              <form id="searchform" method="POST">

                <div className="form-input">
                  <input type="email" placeholder="Correo Electronico" name="email"/>
                    <label htmlFor="username" className="form-label">Correo Electrónico</label>
                    <i className="plus-material">email</i>
                    <div className="form-input-after"></div>
                </div>
                <ul className="passbuttons">
                  <li>
                    <button name="submit" className="curso-button" id="boton5">BUSCAR</button>
                  </li>
                  <li><a className="botondos cancel">CANCELAR</a></li>
                </ul>
              </form>
            </div>
          </div>
          <div id="change-pop">
            <div className="passform drop-shadow">
              <span className="close"><i className="plus-material" id="reg-close">close</i></span>

              <h3>Recuperar contraseña</h3>
              <div className="dividerform"></div>
              <p>Crea una nueva contraseña </p>
              <form id="changeform" method="POST">
                <ul className="input-field">
                  <li><input type="password" name="newpass" id="id_password" placeholder="Clave Nueva"
                             pattern="^(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$" value="" required=""/></li>
                  <li><i className="plus-material" id="togglePassword">visibility</i></li>
                </ul>
                <p>Tu contraseña debe contener al menos seis caracteres, una mayúscula y un número</p>
                <ul className="passbuttons">
                  <li>
                    <button className="curso-button" id="boton5" >CAMBIAR</button>
                  </li>
                  <li><a className="botondos cancel">CANCELAR</a></li>
                </ul>
              </form>
            </div>
          </div>
          <div id="final-pop">
            <div className="registry-sent popup drop-shadow">
              <span className="close"><i className="plus-material" id="reg-close">close</i></span>
              <i className="icon-card" ></i>
              <h1>Contraseña actualizada</h1>
              <h2>Entra en Skillum</h2>
              <button onClick="window.location.href='login.php'">ENTRAR</button>
            </div>
          </div>
        </div>
      </div>      <img className='absolute -z-10 mt-16 ml-64 rounded-xl border' src="https://www.skillum.mx/images/login-girl.png" alt=''/>
    </div>

    
    </Layout>

  )
}

export default login
