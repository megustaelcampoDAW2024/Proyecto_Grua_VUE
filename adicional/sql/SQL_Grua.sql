CREATE SCHEMA IF NOT EXISTS gestion_grua;

CREATE TABLE IF NOT EXISTS gestion_grua.vehiculos (
  `id` varchar(500) NOT NULL PRIMARY KEY,
  `fecha_entrada` datetime,
  `fecha_salida` datetime,
  `lugar` varchar(500),
  `direccion` varchar(500),
  `agente` varchar(500),
  `matricula` varchar(500),
  `marca` varchar(500),
  `modelo` varchar(500),
  `color` varchar(500),
  `motivo` varchar(500),
  `tipo_vehiculo` varchar(500),
  `grua` varchar(500),
  `estado` varchar(500) DEFAULT 'En depósito',
  `fecha` datetime
);

CREATE TABLE IF NOT EXISTS usuario (
  `id` bigint NOT NULL PRIMARY KEY,
  `email` varchar(500),
  `password` varchar(500),
  `borrado` TINYINT(1),
  `rol` varchar(500)
);

CREATE TABLE IF NOT EXISTS log (
  `id` bigint NOT NULL PRIMARY KEY,
  `usuario_id` bigint NOT NULL,
  `accion` varchar(500),
  `descripcion` varchar(500),
  `fecha` datetime
);

CREATE TABLE IF NOT EXISTS gestion_grua.retiradas (
  `id` int NOT NULL PRIMARY KEY,
  `id_vehiculos` varchar(500) NOT NULL,
  `id_tarifa` bigint,
  `nombre` varchar(500),
  `nif` varchar(500),
  `domicilio` varchar(500),
  `poblacion` varchar(500),
  `provincia` varchar(500),
  `permiso` varchar(500),
  `fecha` datetime,
  `agente` varchar(500)
);

CREATE TABLE IF NOT EXISTS tarrifa (
  `id` bigint NOT NULL PRIMARY KEY,
  `opcion_pago` varchar(500),
  `importe_retirada` float,
  `importe_deposito` float,
  `horas_gratis` float,
  `costo_por_hora` float,
  `total` float
);

ALTER TABLE log ADD CONSTRAINT log_usuario_id_fk FOREIGN KEY (`usuario_id`) REFERENCES usuario (`id`);
ALTER TABLE gestion_grua.retiradas ADD CONSTRAINT retiradas_id_tarifa_fk FOREIGN KEY (`id_tarifa`) REFERENCES tarrifa (`id`);
ALTER TABLE gestion_grua.retiradas ADD CONSTRAINT retiradas_idvehiculos_fk FOREIGN KEY (`id_vehiculos`) REFERENCES gestion_grua.vehiculos (`id`);