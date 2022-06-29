import { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../action/AuthAction";

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setIsSignUp] = useState(true);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [confirmPass, SetConfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmPass
        ? dispatch(signUp(data))
        : SetConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    SetConfirmPass(true);
    setData({ username: "", email: "", password: "", confirmpassword: "" });
  };
  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <div className="Webname">
          <img src={Logo} alt="" />
          <h6>Travaillez plus efficacement, ensemble !</h6>
        </div>
      </div>
      {/* Right Side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Inscription" : "Connexion"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                className="infoInput"
                placeholder="Nom d'utilisateur"
                name="username"
                onChange={handleChange}
                value={data.username}
              />
            </div>
          )}

          <div>
            <input
              type="email"
              placeholder="Adresse e-mail"
              className="infoInput"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
          </div>

          <div>
            <input
              required
              type="password"
              className="infoInput"
              name="password"
              placeholder="Mot de passe"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmPass"
                placeholder="Confirmation du mot de passe"
                onChange={handleChange}
                value={data.confirmPass}
              />
            )}
          </div>
          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Les mots de passe doivent être identique
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Vous avez déjà un compte ? Se connecter !"
                : "Créer un nouveau compte"}
            </span>
          </div>
          <button className="button infoButton" type="submit" disabled={loading}>
            {loading ? "Loading..." : isSignUp ? "Inscription" : "Connexion"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
