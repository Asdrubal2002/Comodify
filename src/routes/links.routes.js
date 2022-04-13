import { Router } from "express";
import { isLoggedIn } from "../lib/auth";
import {


  tableasAdmin,
  renderUsers,
  Deleteuser,
  renderPassagers,
  DeletePassagerAdmin,
  renderDrivers,
  liquidarMulta,

  driverDisponibilidad,
  autorizoD,
  DeleteDriverAdmin,
  renderAdmins,
  addManager,
  adminDelete,
  renderRutas,
  deleteRuta,
  rutasActuales,
  rutasCobro,
  cobrarLink,
  enviarCobro,
  rutasLiquidaciones,
  liquidarLink,
  enviarLiquidacion,
  adeudados,
  enviarLiquidacionNueva,
  actividadFechas,
  rutaInictiva,
  enviarLiquidacinRutaInactiva,
  deleteRutaInactiva,
  rutasSolicitads,
  deleteRutasSolicitads,
  rutaInactivas,
  dRutaInactiva,

  badDrivers,

  badDriver,

  badPass,


  badDp,

  
  

  renderDatesProfileDriver,
  renderCreateProfileDriver,
  addDriver,
  renderEditProfileDriver,
  editProfileDriver,

  renderDatesProfilePassager,
  renderCreateProfilePassager,
  addPassager,
  renderEditProfilePassager,
  editProfilePassager,
  renderUpload,
  renderProfiles,
  renderCreateRoute,
  rendervalitionRoutes,
  createRoute,
  renderRoutesCreated,
  editCreateRoute,
  editRouteCreated,
  deleteRou,
  renderSearchRoutes,
  renderAddViaje,
  renderRoutes,
  renderRoutesSelected,
  renderPassager,
  deleteViaje,
  ValidationRenderRoutesSelected,
  enCamino,
  enEspera,
  enMarcha,
  finalRuta,
  indisponibilidad,
  solicitudes,
  addSolicitud,
  addViaje,
  addNoTViaje,
  solicitudesPasajero,
  eliminarSol,
  caliPasa,
  stairsPasa,
  caliCondu,
  stairsCondu,
  renderSearchCedula,
  successLink,
  pendingLink,
  unsuccessfull,

} from "../controllers/links.controller";

const router = Router();
// Authorization
router.use(isLoggedIn);


//Admin
//Tablas de administrador
router.get("/admin", tableasAdmin);
//usuarios
router.get("/users", renderUsers);
//Eliminar Usuario
router.get("/usersDelete/:id", Deleteuser);
//pasajeros
router.get("/passagers", renderPassagers);
//Eliminar Usuario
router.get("/PassagerDelete/:id", DeletePassagerAdmin);
//Conductores
router.get("/drivers", renderDrivers);
//Liquidar link multa
router.post("/liquidarMulta/:id", liquidarMulta);


//disponibilidad conductores
router.get("/disponibilidad/:id", driverDisponibilidad);
router.post("/autorizarDriver/:id", autorizoD);
//Eliminar conductores
router.get("/driverDelete/:id", DeleteDriverAdmin);
//Administradores
router.post("/admins", renderAdmins);
//Añadir administrador
router.post("/addManager", addManager);
//Eliminar un administrador
router.get("/adminDelete/:id", adminDelete);
//Rutas
router.get("/rutas", renderRutas);
//Eliminar Rutas
router.get("/deleteRuta/:id", deleteRuta);
//Rutas accionadas
router.get("/rutasActuales", rutasActuales);
//rutas para cobrar
router.get("/rutasCobro", rutasCobro);
//Vista para cobrar
router.get("/cobrarLink/:id", cobrarLink);
//Enviar cobro
router.post("/enviarCobro/:id", enviarCobro);
//rutas para liquidar
router.get("/rutasLiquidaciones", rutasLiquidaciones);
//Vista para liquidar
router.get("/liquidarLink/:id", liquidarLink);
//Enviar liquidación
router.post("/enviarLiquidacion/:id", enviarLiquidacion);
//Adeudados
router.get("/adeudados", adeudados);
//Denunciar Ruta
router.get("/enviarLiquidacionNueva/:id", enviarLiquidacionNueva);
//Actividad de rutas
router.get("/actividadFechas", actividadFechas);
//Selección ruta sin actividad
router.get("/rutaInictiva/:id", rutaInictiva);
//Inactivar ruta
router.post("/enviarLiquidacinRutaInactiva/:id", enviarLiquidacinRutaInactiva);
//Eliminar inactiva
router.get("/deleteRutaInactiva/:id", deleteRutaInactiva);
//Rutas solicitadas
router.get("/rutasSolicitads", rutasSolicitads);
//Eliminar solicitudes de rutas
router.get("/deleteRutasSolicitads/:id", deleteRutasSolicitads);
//Rutas inactivas
router.get("/rutaInactivas", rutaInactivas);
//Eliminar inactiva de largo plazo
router.get("/dRutaInactiva/:id", dRutaInactiva)

//Malos conductores
router.get("/badDrivers", badDrivers);


//Malos conductores
router.get("/badDriver/:id", badDriver);

//Malos pasajeros
router.get("/badPass", badPass);

//Malos conductores
router.get("/badDp/:id", badDp);











// Rutas
// EMPIEZA LOS PASOS DE CONDUCTOR -------------------------------------------------------------------------------------
router.get("/datesProfileDriver", renderDatesProfileDriver);
router.get("/createProfileDriver", renderCreateProfileDriver);
// Creación de conductor
router.post("/addDriver", addDriver);
// Edición de conductor
router.get("/editDatesDriver/:id", renderEditProfileDriver);
// Edición base de datos de conductor
router.post("/editProfileDriver/:id", editProfileDriver);
// TERMINA LOS PASOS DE CONDUCTOR -------------------------------------------------------------------------------------

// EMPIEZA LOS PASOS DE PASAJERO -------------------------------------------------------------------------------------
router.get("/datesProfilePassager", renderDatesProfilePassager);
router.get("/createProfilePassager", renderCreateProfilePassager);
// Creación de Pasajero
router.post("/addPassager", addPassager);
// Edición de Pasajero
router.get("/editProfilePassager/:id", renderEditProfilePassager);
router.post("/editProfilePassager/:id", editProfilePassager);
// TERMINA LOS PASOS DE PASAJERO -------------------------------------------------------------------------------------

//SUBIR LOS DOCUMENTOS ----------------------------------------------------------------------------------------------
router.get("/uploadDocuments", renderUpload);
// TERMINA SUBIDA DE DOCUMENTOS -------------------------------------------------------------------------------------

//ESCOGER CUAL CAMINO ----------------------------------------------------------------------------------------------
router.get("/profiles", renderProfiles);
//TERMINA ESCOGER CUAL CAMINO ----------------------------------------------------------------------------------------------

//EMPIEZA LISTA DE RUTAS CREADAS ----------------------------------------------------------------------------------------------
router.get("/createRoute", renderCreateRoute);
// validar conductor para crea rutas
router.get("/validation", rendervalitionRoutes);
// Creación de ruta nueva
router.post("/addRoute", createRoute);
//Cargar las rutas hechas
router.get("/routesCreated", renderRoutesCreated);
//Cargar vista para editar ruta
router.get("/editRoute/:id", editCreateRoute);
router.post("/editRouteCreated/:id", editRouteCreated);
//Eliminar ruta
router.get("/deleteRoute/:id", deleteRou);
//Busqueda de rutas
router.post("/busqueRutas", renderSearchRoutes);
//Selección de viajes
router.get("/addViaje/:id", renderAddViaje);

//ESCOGER CUAL CAMINO PARA MOSTRAR----------------------------------------------------------------------------------
router.get("/routes", renderRoutes);

router.get("/routesSelected", renderRoutesSelected);
//Observar los pasajeros
router.get("/pasajeros/:id", renderPassager);
//Eliminar ruta
router.get("/DeleteTravel/:id", deleteViaje);
//Validar si esta todo bien en crear rutas
router.get("/validationCreateRoute", ValidationRenderRoutesSelected);
////En camino haci el lugar de encuentro
router.get("/enCamino/:id", enCamino);
//En espera de pasajeros
router.get("/enEspera/:id", enEspera);
//En espera de pasajeros
router.get("/enMarcha/:id", enMarcha);
//Finalización de ruta
router.get("/finalRuta/:id", finalRuta);
//Indisponibilidad
router.get("/indisponibilidad/:id", indisponibilidad);

// EMPIEZA LAS SOLICITUDES -------------------------------------------------------------------------------------
router.get("/solicitudes/:id", solicitudes);
//Añadir a solicitudes
router.post("/addSolicitud/:id", addSolicitud);
//Añadir viajes
router.post("/ViajeSelect/:id", addViaje);
//negar viajes
router.get("/ViajeSelectNo/:id", addNoTViaje);
//Observar las solicitudes desde el pasajero
router.get("/solicitudesPas/:id", solicitudesPasajero);
//Eliminar solicitud
router.get("/eliminarSol/:id", eliminarSol);
//Vista para denuncia al pasajero
router.get("/reportPasa/:id", caliPasa);
//Denuncias pasajeros
router.post("/stairsPasa/:id", stairsPasa);
//Vista para denuncia al pasajero
router.get("/reportCondu/:id", caliCondu);
//Denuncias pasajeros
router.post("/stairCondu/:id", stairsCondu);

//Busqueda de rutas
router.post("/bCedula", renderSearchCedula);

//Busqueda de rutas
router.get("/successLink", successLink);

//Busqueda de rutas
router.get("/pendingLink", pendingLink);

//Busqueda de rutas
router.get("/unsuccessfull", unsuccessfull);











export default router;
