import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
//Registro de usuario e inicio de sesion
import pool from "../database";
import * as helpers from "./helpers";

//Se usan dos campos, 
passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'pass',
      passReqToCallback: true,
    },
    //Busqueda de un usuario ya registrado.
    async (req, username, pass, done) => {
      const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
      if (rows.length > 0) {
        const user = rows[0];
        //Alerta para hacerle sabes a ese usuario que ya existe su usuario al que quiere registrar.
        return done(null, false, req.flash('message', 'El usuario ya existe, Intenta con otro'));
      }
      const { email } = req.body;
      const rowsEmail = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
      if (rowsEmail.length > 0) {
        const user = rows[0];
        //Alerta para hacerle sabes a ese usuario que ya existe su usuario al que quiere registrar.
        return done(null, false, req.flash('message', 'Este correo ya existe'));
      }
      let newUser = {
        username,
        pass,
        email
      };
      newUser.pass = await helpers.encryptPassword(pass);
      // Guardando en la base de datos registrados
      const result = await pool.query("INSERT INTO users SET ? ", newUser);
      newUser.id = result.insertId;
      return done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
//Seleccionar en la base de datos registrados
passport.deserializeUser(async (id, done) => {
  const rows = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
  done(null, rows[0]);
});
//Inicar Sesion o dar las alertas de error
passport.use('local.signin', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'pass',
  passReqToCallback: true
}, async (req, username, pass, done) => {
  const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
  if (rows.length > 0) {
    const user = rows[0];
    const validPass = await helpers.matchPassword(pass, user.pass);
    if (validPass) {
      done(null, user, req.flash());
    } else {
      done(null, false, req.flash('message', 'Clave Incorrecta'));
    }
  } else {
    return done(null, false, req.flash('message', 'El usuario no existe'));
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});
//Seleccionar en la base de datos registrados
passport.deserializeUser(async (id, done) => {
  const rows = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
  done(null, rows[0]);
});
//Inicar Sesion o dar las alertas de error
passport.use('local.change', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'pass',
  passReqToCallback: true
}, async (req, username, pass, done) => {
  const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
  if (rows.length > 0) {
    const user = rows[0];
    const validPass = await helpers.matchPassword(pass, user.pass);
    if (validPass) {
      const { pass2 } = req.body;
      const nueva = await helpers.encryptPassword(pass2);
      console.log(nueva)
      // Guardando en la base de datos registrados
      const result = await pool.query("UPDATE users SET pass = ? WHERE username = ?", [nueva, username]);
      done(null, user, req.flash('success', "Has cambiado tu clave"));
    } else {
      done(null, false, req.flash('message', 'Clave Incorrecta'));
    }
  } else {
    return done(null, false, req.flash('message', 'El usuario no existe'));
  }
}));




passport.serializeUser((user, done) => {
  done(null, user.id);
});
//Seleccionar en la base de datos registrados
passport.deserializeUser(async (id, done) => {
  const rows = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
  done(null, rows[0]);
});
//Inicar Sesion o dar las alertas de error
passport.use('local.recover', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'email',
  passReqToCallback: true
}, async (req, username, email, done) => {
  const rows = await pool.query('SELECT id FROM users WHERE username = ? AND email = ?', [username, email]);
  if (rows.length > 0) {
    const user = rows[0];
    var aleatorio = Math.round(Math.random() * 10000);
    var clave = aleatorio.toString();
    const nueva = await helpers.encryptPassword(clave);
    console.log(nueva)
    const result = await pool.query("UPDATE users SET pass = ? WHERE username = ?", [nueva, username]);
    done(null, user, req.flash('success', "Se te generó ", [clave], " Como clave, cámbiala por tu seguridad"));
  } else {
    return done(null, false, req.flash('message', 'El usuario no existe'));
  }
}));


