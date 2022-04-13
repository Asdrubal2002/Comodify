CREATE DATABASE comodifyBD;

USE comodifyBD;

-- Base de datos: `comodifybd`
--
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`id`, `idUser`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conductores`
--

CREATE TABLE `conductores` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `edad` varchar(150) NOT NULL,
  `identificacion` varchar(150) NOT NULL,
  `celular` varchar(150) NOT NULL,
  `departamento` varchar(150) NOT NULL,
  `municipio` varchar(150) NOT NULL,
  `placa` varchar(100) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `responsabilidad` varchar(100) NOT NULL,
  `disponible` varchar(100) NOT NULL,
  `estrellas` int(11) NOT NULL,
  `votantes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pasajeros`
--

CREATE TABLE `pasajeros` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `edad` varchar(150) NOT NULL,
  `identificacion` varchar(150) NOT NULL,
  `celular` varchar(150) NOT NULL,
  `departamento` varchar(150) NOT NULL,
  `municipio` varchar(150) NOT NULL,
  `responsabilidad` varchar(5) NOT NULL,
  `estrellas` int(11) NOT NULL,
  `votantes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ruta`
--

CREATE TABLE `ruta` (
  `id` int(11) NOT NULL,
  `idConductor` int(11) NOT NULL,
  `dias` varchar(100) NOT NULL,
  `hora` varchar(10) NOT NULL,
  `asientos` varchar(150) NOT NULL,
  `lugarInicial` varchar(150) NOT NULL,
  `localidad` varchar(100) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `lugarFinal` varchar(150) NOT NULL,
  `comentario` varchar(10000) NOT NULL,
  `parada1` varchar(150) NOT NULL,
  `precioParada1` int(11) NOT NULL,
  `parada2` varchar(100) NOT NULL,
  `precioParada2` int(11) NOT NULL,
  `parada3` varchar(100) NOT NULL,
  `precioParada3` int(11) NOT NULL,
  `parada4` varchar(100) NOT NULL,
  `precioParada4` int(11) NOT NULL,
  `fechaCreacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fechaInicial` varchar(100) NOT NULL,
  `ocupacion` varchar(100) NOT NULL,
  `precioPagar` int(100) NOT NULL,
  `linkCobro` varchar(500) DEFAULT NULL,
  `ponderado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE `solicitudes` (
  `id` int(11) NOT NULL,
  `idRuta` int(11) NOT NULL,
  `idPasajero` int(11) NOT NULL,
  `parada` varchar(100) NOT NULL,
  `precio` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `puntuacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(16) NOT NULL,
  `pass` varchar(60) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `pass`, `email`) VALUES
(1, 'admin0001', '$2a$10$LLYfeTKy/Hk4ukgGbRXBp.p5J5MJ.7qY53WwPmXssTL5d/9aGGKkS', 'henryasdrubalrodriguezmorales@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viajes`
--

CREATE TABLE `viajes` (
  `id` int(11) NOT NULL,
  `idRuta` int(11) NOT NULL,
  `idPasajero` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `parada` varchar(100) NOT NULL,
  `precio` int(11) NOT NULL,
  `comentario` varchar(500) NOT NULL,
  `acciones` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `conductores`
--
ALTER TABLE `conductores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idUser` (`idUser`);

--
-- Indices de la tabla `pasajeros`
--
ALTER TABLE `pasajeros`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idUser` (`idUser`),
  ADD KEY `idUser_2` (`idUser`),
  ADD KEY `idUser_3` (`idUser`);

--
-- Indices de la tabla `ruta`
--
ALTER TABLE `ruta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `condu-ruta` (`idConductor`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indices de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idRuta` (`idRuta`),
  ADD KEY `pasa-soli` (`idPasajero`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `viajes`
--
ALTER TABLE `viajes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ruta-viaje` (`idRuta`),
  ADD KEY `idPasajero` (`idPasajero`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `conductores`
--
ALTER TABLE `conductores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `pasajeros`
--
ALTER TABLE `pasajeros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `ruta`
--
ALTER TABLE `ruta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `viajes`
--
ALTER TABLE `viajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `conductores`
--
ALTER TABLE `conductores`
  ADD CONSTRAINT `conductor-user` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pasajeros`
--
ALTER TABLE `pasajeros`
  ADD CONSTRAINT `Users` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ruta`
--
ALTER TABLE `ruta`
  ADD CONSTRAINT `condu-ruta` FOREIGN KEY (`idConductor`) REFERENCES `conductores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD CONSTRAINT `pasa-soli` FOREIGN KEY (`idPasajero`) REFERENCES `pasajeros` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ruata-soli` FOREIGN KEY (`idRuta`) REFERENCES `ruta` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `viajes`
--
ALTER TABLE `viajes`
  ADD CONSTRAINT `ruta-viaje` FOREIGN KEY (`idRuta`) REFERENCES `ruta` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `viaje-pasajero` FOREIGN KEY (`idPasajero`) REFERENCES `pasajeros` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

