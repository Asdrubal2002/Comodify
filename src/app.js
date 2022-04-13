import express from "express";
import morgan from "morgan";
import path from "path";
import exphbs from "express-handlebars";
import session from "express-session";
import passport from "passport";
import flash from "connect-flash";
import expressMySQLSession from "express-mysql-session";
import config from "./config";
import routes from "./routes";
import "./lib/passport";

// Intializations
const MySQLStore = expressMySQLSession(session);
const { database, port } = config;
const app = express();

// Settings
app.set("port", port);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars"),
  })
);
app.set("view engine", ".hbs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "faztmysqlnodemysql",
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database),
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Global variables
app.use((req, res, next) => {
  app.locals.message = req.flash("message");
  app.locals.success = req.flash("success");
  app.locals.user = req.user;
  next();
});

// Multer
const multer = require('multer');
const mimeTypes = require('mime-types');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function(req, file, cb){
      cb("", file.originalname + "." + mimeTypes.extension(file.mimetype));
  }
})
const upload = multer ({
  storage: storage
})

app.post('/files', upload.single('licencia'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Verifica tu conexión a Internet, please choose files')
    error.httpStatusCode = 400
    return next(error)
  }
  res.render('soat')
})

app.post('/soat', upload.single('soat'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Verifica tu conexión a Internet, please choose files')
    error.httpStatusCode = 400
    return next(error)
  }
  res.render('antecedentes')
})

app.post('/antecedentes', upload.single('antecedentes'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Verifica tu conexión a Internet, please choose files')
    error.httpStatusCode = 400
    return next(error)
  }
  res.render('vehicle')
})

app.post('/vehiculo', upload.single('vehiculo'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Verifica tu conexión a Internet, please choose files')
    error.httpStatusCode = 400
    return next(error)
  }
  res.render('uploadSuccessFull')
})


// Routes
app.use(routes);

// Public
app.use(express.static(path.join(__dirname, "public")));

export default app;
