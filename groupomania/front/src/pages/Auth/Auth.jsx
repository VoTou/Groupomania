import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <div className="Webname">
          <img src={Logo} alt="" />
          <h6>Travaillez plus efficacement, ensemble !</h6>
        </div>
      </div>

      <SignUp />
    </div>
  );
};

function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Connexion</h3>

        <div>
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            className="infoInput"
            name="email"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Créer un nouveau compte
          </span>
          <button className="button infoButton">Se connecter</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Inscription</h3>

        <div>
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            className="infoInput"
            name="email"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Votre nom d'utilisateur"
            name="username"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Mot de passe"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpassword"
            placeholder="Confirmation du mot de passe"
          />
        </div>
        <div>
          <span style={{ fontSize: "13px" }}>
            Vous avez déjà un compte ? Se connecter !
          </span>
        </div>
        <button className="button infoButton" type="submit">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Auth;
