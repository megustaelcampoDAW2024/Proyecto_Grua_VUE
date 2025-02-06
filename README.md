# Proyecto Grua

El Proyecto Grua es una aplicación web desarrollada con Laravel para gestionar servicios de grúa. La aplicación permite a los usuarios solicitar servicios de grúa, gestionar vehículos y administrar usuarios. A continuación, se describen las principales funcionalidades del proyecto:

## Funcionalidades

### Gestión de Solicitudes de Grúa
- **Crear Solicitudes:** Los usuarios pueden crear solicitudes de servicio de grúa proporcionando detalles como la ubicación, el tipo de vehículo y el problema.
- **Ver Solicitudes:** Los usuarios pueden ver el estado de sus solicitudes y recibir actualizaciones en tiempo real.
- **Cancelar Solicitudes:** Los usuarios pueden cancelar solicitudes antes de que sean atendidas.

### Gestión de Usuarios
- **Registro y Autenticación:** Los usuarios pueden registrarse y autenticarse en la aplicación.
- **Roles y Permisos:** La aplicación soporta diferentes roles de usuario (administrador, operador, cliente) con permisos específicos para cada rol.
- **Perfil de Usuario:** Los usuarios pueden actualizar su información personal y cambiar su contraseña.

### Gestión de Vehículos
- **Agregar Vehículos:** Los usuarios pueden agregar vehículos a su perfil proporcionando detalles como la marca, modelo y número de placa.
- **Editar Vehículos:** Los usuarios pueden actualizar la información de sus vehículos.
- **Eliminar Vehículos:** Los usuarios pueden eliminar vehículos de su perfil.

### Administración
- **Panel de Administración:** Los administradores tienen acceso a un panel de administración donde pueden gestionar todas las solicitudes, usuarios y vehículos.
- **Reportes:** Los administradores pueden generar reportes sobre el uso de la aplicación, incluyendo estadísticas de solicitudes y usuarios.

### Notificaciones
- **Notificaciones en Tiempo Real:** Los usuarios reciben notificaciones en tiempo real sobre el estado de sus solicitudes.
- **Correos Electrónicos:** La aplicación envía correos electrónicos de confirmación y actualizaciones a los usuarios.

## Tecnologías Utilizadas
- **Framework:** Laravel
- **Base de Datos:** MySQL
- **Frontend:** Blade Templates, Tailwind CSS
- **Autenticación:** Laravel Breeze
- **Notificaciones:** Laravel Notifications