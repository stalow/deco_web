import React, { useState } from 'react';

const Page_login = () => {
 

  return (
    <div className='login-wrapper'>
      <div className="login-container">
          <h2>Connexion</h2>
          <form className="login-form">
              <div className="form-group">
                  <label htmlFor="email">Email :</label>
                  <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Mot de passe :</label>
                  <input type="password" id="password" name="password" />
              </div>
              <button type="submit">Se connecter</button>
          </form>
          <div className="additional-options">
              <p><a href="#">Mot de passe oublié ?</a></p>
              <p><a href="#">Créer un compte</a></p>
          </div>
      </div>
    </div>
    );
}

export default Page_login;
