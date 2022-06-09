module.exports.signUpErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit contenir 6 caractères minimum";

  if (err.code === 11000) errors.email = "Cet email est déjà utilisé";
  return errors;
};

module.exports.signInErrors = (err) => {
    let errors = { email: '', password:'' }

    if (err.message.includes('email')) errors.email = 'Email inconnu';

    if (err.message.includes('password')) errors.password = 'Le mot de passe ne correspond pas'
    return errors
}


