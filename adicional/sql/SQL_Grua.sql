-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.32-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla gestion_grua.log
CREATE TABLE IF NOT EXISTS `log` (
  `id` bigint(20) NOT NULL,
  `usuario_id` bigint(20) NOT NULL,
  `accion` varchar(500) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `log_usuario_id_fk` (`usuario_id`),
  CONSTRAINT `log_usuario_id_fk` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla gestion_grua.log: ~0 rows (aproximadamente)
DELETE FROM `log`;

-- Insertar datos en la tabla gestion_grua.log
INSERT INTO `log` (`id`, `usuario_id`, `accion`, `descripcion`, `fecha`) VALUES
(1, 1, 'Accion1', 'Descripcion1', '2023-01-01 10:00:00'),
(2, 2, 'Accion2', 'Descripcion2', '2023-01-02 11:00:00'),
(3, 3, 'Accion3', 'Descripcion3', '2023-01-03 12:00:00');

-- Volcando estructura para tabla gestion_grua.retiradas
CREATE TABLE IF NOT EXISTS `retiradas` (
  `id` int(11) NOT NULL,
  `id_vehiculos` varchar(500) NOT NULL,
  `id_tarifa` bigint(20) DEFAULT NULL,
  `nombre` varchar(500) DEFAULT NULL,
  `nif` varchar(500) DEFAULT NULL,
  `domicilio` varchar(500) DEFAULT NULL,
  `poblacion` varchar(500) DEFAULT NULL,
  `provincia` varchar(500) DEFAULT NULL,
  `permiso` varchar(500) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `agente` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `retiradas_id_tarifa_fk` (`id_tarifa`),
  KEY `retiradas_idvehiculos_fk` (`id_vehiculos`),
  CONSTRAINT `retiradas_id_tarifa_fk` FOREIGN KEY (`id_tarifa`) REFERENCES `tarifa` (`id`),
  CONSTRAINT `retiradas_idvehiculos_fk` FOREIGN KEY (`id_vehiculos`) REFERENCES `vehiculos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla gestion_grua.retiradas: ~0 rows (aproximadamente)
DELETE FROM `retiradas`;

-- Insertar datos en la tabla gestion_grua.retiradas
INSERT INTO `retiradas` (`id`, `id_vehiculos`, `id_tarifa`, `nombre`, `nif`, `domicilio`, `poblacion`, `provincia`, `permiso`, `fecha`, `agente`) VALUES
(1, 'V1', 1, 'Nombre1', 'NIF1', 'Domicilio1', 'Poblacion1', 'Provincia1', 'Permiso1', '2023-01-01 10:00:00', 'Agente1'),
(2, 'V2', 2, 'Nombre2', 'NIF2', 'Domicilio2', 'Poblacion2', 'Provincia2', 'Permiso2', '2023-01-02 11:00:00', 'Agente2'),
(3, 'V3', 3, 'Nombre3', 'NIF3', 'Domicilio3', 'Poblacion3', 'Provincia3', 'Permiso3', '2023-01-03 12:00:00', 'Agente3');

-- Volcando estructura para tabla gestion_grua.tarifa
CREATE TABLE IF NOT EXISTS `tarifa` (
  `id` bigint(20) NOT NULL,
  `opcion_pago` varchar(500) DEFAULT NULL,
  `importe_retirada` float DEFAULT NULL,
  `importe_deposito` float DEFAULT NULL,
  `horas_gratis` float DEFAULT NULL,
  `costo_por_hora` float DEFAULT NULL,
  `total` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla gestion_grua.tarifa: ~0 rows (aproximadamente)
DELETE FROM `tarifa`;

-- Insertar datos en la tabla gestion_grua.tarifa
INSERT INTO `tarifa` (`id`, `opcion_pago`, `importe_retirada`, `importe_deposito`, `horas_gratis`, `costo_por_hora`, `total`) VALUES
(1, 'Opcion1', 100.0, 50.0, 2.0, 10.0, 200.0),
(2, 'Opcion2', 200.0, 100.0, 3.0, 20.0, 400.0),
(3, 'Opcion3', 300.0, 150.0, 4.0, 30.0, 600.0);

-- Volcando estructura para tabla gestion_grua.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` bigint(20) NOT NULL,
  `email` varchar(500) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `rol` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla gestion_grua.usuario: ~0 rows (aproximadamente)
DELETE FROM `usuario`;

-- Insertar datos en la tabla gestion_grua.usuario
INSERT INTO `usuario` (`id`, `email`, `password`, `deleted_at`, `rol`) VALUES
(1, 'user1@example.com', 'password1', NULL, 'admin'),
(2, 'user2@example.com', 'password2', NULL, 'user'),
(3, 'user3@example.com', 'password3', NULL, 'guest');

-- Volcando estructura para tabla gestion_grua.vehiculos
CREATE TABLE IF NOT EXISTS `vehiculos` (
  `id` varchar(500) NOT NULL DEFAULT '',
  `fecha_entrada` datetime DEFAULT NULL,
  `fecha_salida` datetime DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `lugar` varchar(500) DEFAULT NULL,
  `direccion` varchar(500) DEFAULT NULL,
  `agente` varchar(500) DEFAULT NULL,
  `matricula` varchar(500) DEFAULT NULL,
  `marca` varchar(500) DEFAULT NULL,
  `modelo` varchar(500) DEFAULT NULL,
  `color` varchar(500) DEFAULT NULL,
  `motivo` varchar(500) DEFAULT '',
  `tipo_vehiculo` varchar(500) DEFAULT '',
  `grua` varchar(500) DEFAULT NULL,
  `estado` varchar(500) DEFAULT 'En depósito',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla gestion_grua.vehiculos: ~0 rows (aproximadamente)
DELETE FROM `vehiculos`;

-- Insertar datos en la tabla gestion_grua.vehiculos
INSERT INTO `vehiculos` (`id`, `fecha_entrada`, `fecha_salida`, `fecha`, `lugar`, `direccion`, `agente`, `matricula`, `marca`, `modelo`, `color`, `motivo`, `tipo_vehiculo`, `grua`, `estado`) VALUES
('V1', '2023-01-01 10:00:00', '2023-01-02 10:00:00', '2023-01-01 10:00:00', 'Lugar1', 'Direccion1', 'Agente1', 'Matricula1', 'Marca1', 'Modelo1', 'Color1', 'Motivo1', 'Tipo1', 'Grua1', 'En depósito'),
('V2', '2023-01-02 11:00:00', '2023-01-03 11:00:00', '2023-01-02 11:00:00', 'Lugar2', 'Direccion2', 'Agente2', 'Matricula2', 'Marca2', 'Modelo2', 'Color2', 'Motivo2', 'Tipo2', 'Grua2', 'En depósito'),
('V3', '2023-01-03 12:00:00', '2023-01-04 12:00:00', '2023-01-03 12:00:00', 'Lugar3', 'Direccion3', 'Agente3', 'Matricula3', 'Marca3', 'Modelo3', 'Color3', 'Motivo3', 'Tipo3', 'Grua3', 'En depósito');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;