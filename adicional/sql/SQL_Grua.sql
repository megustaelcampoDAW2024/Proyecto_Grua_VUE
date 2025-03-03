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

-- Volcando estructura para tabla gestion_grua.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(500) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `rol` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla gestion_grua.usuario: ~6 rows (aproximadamente)
DELETE FROM `usuario`;
INSERT INTO `usuario` (`id`, `email`, `password`, `deleted_at`, `rol`) VALUES
	(1, 'user1@example.es', '12345678', '2025-02-26 16:40:31', 'user'),
	(2, 'user2@example.com', '123456', NULL, 'user'),
	(3, 'user3@example.com', 'pwd3', NULL, 'user'),
	(4, 'admin@admin.com', 'pwd', NULL, 'admin'),
	(5, 'q', 'q', NULL, 'admin'),
	(6, 'merequetengue@gmail.com', '123456', '2025-02-21 17:10:23', 'user');

-- Volcando estructura para tabla gestion_grua.log
CREATE TABLE IF NOT EXISTS `log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `usuario_id` bigint(20) NOT NULL,
  `accion` varchar(500) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `log_usuario_id_fk` (`usuario_id`),
  CONSTRAINT `log_usuario_id_fk` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla gestion_grua.log: ~31 rows (aproximadamente)
DELETE FROM `log`;
INSERT INTO `log` (`id`, `usuario_id`, `accion`, `fecha`) VALUES
	(26, 5, 'edit usuario. Id: 6', '2025-02-21 18:10:20'),
	(27, 5, 'delete usuario. Id: 6', '2025-02-21 18:10:23'),
	(28, 5, 'edit vehiculo. Id: 8', '2025-02-21 18:10:46'),
	(29, 5, 'delete vehiculo. Id: 8', '2025-02-21 18:10:50'),
	(30, 5, 'edit usuario. Id: 1', '2025-02-24 09:01:57'),
	(31, 5, 'create retirada', '2025-02-24 16:33:58'),
	(32, 5, 'create retirada', '2025-02-24 16:35:18'),
	(33, 5, 'create retirada', '2025-02-24 16:38:38'),
	(34, 5, 'edit vehiculo. Id: 2', '2025-02-24 21:45:15'),
	(35, 5, 'edit vehiculo. Id: 1', '2025-02-24 21:45:25'),
	(36, 5, 'edit vehiculo. Id: 1', '2025-02-24 21:46:34'),
	(37, 5, 'edit vehiculo. Id: 1', '2025-02-24 21:47:16'),
	(38, 5, 'edit vehiculo. Id: 2', '2025-02-24 22:20:19'),
	(39, 5, 'create retirada', '2025-02-25 09:00:54'),
	(40, 5, 'create retirada', '2025-02-25 09:03:01'),
	(41, 5, 'create retirada', '2025-02-25 09:04:09'),
	(42, 5, 'create retirada', '2025-02-25 09:08:26'),
	(43, 5, 'create retirada', '2025-02-26 16:32:08'),
	(44, 5, 'create retirada', '2025-02-26 17:19:59'),
	(45, 5, 'delete usuario. Id: 1', '2025-02-26 17:35:30'),
	(46, 5, 'delete usuario. Id: 1', '2025-02-26 17:36:52'),
	(47, 5, 'delete usuario. Id: 1', '2025-02-26 17:37:52'),
	(48, 5, 'edit usuario. Id: 2', '2025-02-26 17:38:05'),
	(49, 5, 'delete usuario. Id: 1', '2025-02-26 17:39:17'),
	(50, 4, 'delete usuario. Id: 1', '2025-02-26 17:40:05'),
	(51, 5, 'delete usuario. Id: 1', '2025-02-26 17:40:31'),
	(52, 5, 'edit vehiculo. Id: 1', '2025-02-26 17:41:13'),
	(53, 5, 'edit vehiculo. Id: 2', '2025-02-26 17:48:30'),
	(54, 5, 'edit vehiculo. Id: 1', '2025-02-26 17:48:57'),
	(55, 5, 'edit vehiculo. Id: 2', '2025-02-26 17:49:35'),
	(56, 5, 'edit vehiculo. Id: 3', '2025-02-26 17:49:56'),
	(57, 5, 'edit usuario. Id: 2', '2025-02-26 18:24:03'),
	(58, 5, 'edit usuario. Id: 2', '2025-02-26 18:24:11'),
	(59, 5, 'create retirada', '2025-02-27 07:22:33');

-- Volcando estructura para tabla gestion_grua.tarifa
CREATE TABLE IF NOT EXISTS `tarifa` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `opcion_pago` varchar(500) DEFAULT NULL,
  `importe_retirada` float DEFAULT NULL,
  `importe_deposito` float DEFAULT NULL,
  `horas_gratis` float DEFAULT NULL,
  `costo_por_hora` float DEFAULT NULL,
  `total` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla gestion_grua.tarifa: ~1 rows (aproximadamente)
DELETE FROM `tarifa`;
INSERT INTO `tarifa` (`id`, `opcion_pago`, `importe_retirada`, `importe_deposito`, `horas_gratis`, `costo_por_hora`, `total`) VALUES
	(6, 'metalico', 25, 129.5, 26, 2, 154.5),
	(7, 'tarjeta', 130, 18822.3, 24, 1, 18952.3),
	(8, 'metalico', 150, 165.34, 24, 1, 315.34);

-- Volcando estructura para tabla gestion_grua.vehiculos
CREATE TABLE IF NOT EXISTS `vehiculos` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fecha_entrada` datetime DEFAULT NULL,
  `fecha_salida` datetime DEFAULT NULL,
  `lugar` varchar(500) DEFAULT NULL,
  `direccion` varchar(500) DEFAULT NULL,
  `agente` varchar(500) DEFAULT NULL,
  `matricula` varchar(500) DEFAULT NULL,
  `marca` varchar(500) DEFAULT NULL,
  `modelo` varchar(500) DEFAULT NULL,
  `color` varchar(500) DEFAULT NULL,
  `motivo` varchar(500) DEFAULT NULL,
  `tipo_vehiculo` enum('A','B','C','D','E','F') DEFAULT NULL,
  `grua` varchar(500) DEFAULT NULL,
  `estado` varchar(500) DEFAULT 'En deposito',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla gestion_grua.vehiculos: ~3 rows (aproximadamente)
DELETE FROM `vehiculos`;
INSERT INTO `vehiculos` (`id`, `fecha_entrada`, `fecha_salida`, `lugar`, `direccion`, `agente`, `matricula`, `marca`, `modelo`, `color`, `motivo`, `tipo_vehiculo`, `grua`, `estado`) VALUES
	(1, '2025-02-22 22:47:00', '2025-02-26 16:32:07', 'Lugar1', 'Direccion1', 'Agente1', '1234HHH', 'Marca1', 'Modelo1', 'Color1', 'Motivo1', 'B', 'Grua1', 'Liquidado'),
	(2, '2025-02-19 11:00:00', '2025-02-27 07:22:33', 'Lugar2', 'Direccion2', 'Agente2', '5678KKK', 'Marca2', 'Modelo2', 'Color2', 'Motivo2', 'D', 'Grua2', 'Liquidado'),
	(3, '2023-01-03 12:00:00', '2025-02-26 17:19:59', 'Lugar3', 'Direccion3', 'Agente3', '4365BMX', 'Marca3', 'Modelo3', 'Color3', 'Motivo3', 'C', 'Grua3', 'Liquidado');

-- Volcando estructura para tabla gestion_grua.retiradas
CREATE TABLE IF NOT EXISTS `retiradas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_vehiculos` bigint(20) DEFAULT NULL,
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
  KEY `id_vehiculos` (`id_vehiculos`),
  CONSTRAINT `FK_retiradas_vehiculos` FOREIGN KEY (`id_vehiculos`) REFERENCES `vehiculos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `retiradas_id_tarifa_fk` FOREIGN KEY (`id_tarifa`) REFERENCES `tarifa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla gestion_grua.retiradas: ~2 rows (aproximadamente)
DELETE FROM `retiradas`;
INSERT INTO `retiradas` (`id`, `id_vehiculos`, `id_tarifa`, `nombre`, `nif`, `domicilio`, `poblacion`, `provincia`, `permiso`, `fecha`, `agente`) VALUES
	(7, 1, 6, 'Pablo Bejarano', '44247955A', 'Blas Infante, 41', 'Almonte', 'Huelva', 'B', '2025-02-26 00:00:00', 'Agente 1'),
	(8, 3, 7, 'awdad', 'awdad', 'awdad', 'awdad', 'awdad', 'awdad', '2025-01-27 00:00:00', 'awdad'),
	(9, 2, 8, 'awdad', '12345678Z', 'awdad', 'awdad', 'awdad', 'b', '2025-02-27 00:00:00', 'aawdawd');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
