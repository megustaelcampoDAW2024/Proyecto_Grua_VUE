
let app = new Vue({
    el: '#app',
    data: {
        loggedIn: false,
        isAdmin: 'false',
        email_input: '',
        password_input: '',
        usuario: "",            // Variable para guardar el usuario logeado
        pantalla: 'vehiculo',     // Variable para controlar la pantalla que se muestra
        accion: '',

        //USUARIO
        lista_usuarios: [],      // Variable para guardar la lista de usuarios
        usuario_selected: {
            email: '',
            password: '',
            rol: ''
        },
        usuario_data_check: {
            email: '',
            email_msg: 'Looks good!',
            password: '',
            password_msg: 'Looks good!',
            rol: '',
            rol_msg: 'Looks good!'
        },

        //VEHICULO
        lista_vehiculos: [],      // Variable para guardar la lista de vehiculos
        filtroMatricula: '',
        filtroFecha: '',
        filtroEstado: '',
        vehiculo_selected: {
            fecha_entrada: '',
            fecha_salida: '',
            fecha: '',
            lugar: '',
            direccion: '',
            agente: '',
            matricula: '',
            marca: '',
            modelo: '',
            color: '',
            motivo: '',
            tipo_vehiculo: '',
            grua: '',
            estado: ''
        },
        vehiculo_data_check: {    // Variable para guardar los mensajes de error de los campos del formulario
            fecha_entrada: '',
            fecha_entrada_msg: 'Looks good!',
            fecha_salida: '',
            fecha_salida_msg: 'Looks good!',
            fecha: '',
            fecha_msg: 'Looks good!',
            lugar: '',
            lugar_msg: 'Looks good!',
            direccion: '',
            direccion_msg: 'Looks good!',
            agente: '',
            agente_msg: 'Looks good!',
            matricula: '',
            matricula_msg: 'Looks good!',
            marca: '',
            marca_msg: 'Looks good!',
            modelo: '',
            modelo_msg: 'Looks good!',
            color: '',
            color_msg: 'Looks good!',
            motivo: '',
            motivo_msg: 'Looks good!',
            tipo_vehiculo: '',
            tipo_vehiculo_msg: 'Looks good!',
            grua: '',
            grua_msg: 'Looks good!',
            estado: '',
            estado_msg: 'Looks good!'
        }
    },
    computed: {
        vehiculosFiltrados() {
            return this.lista_vehiculos.filter(vehiculo => {
                return (
                    (this.filtroMatricula === '' || (vehiculo.matricula && vehiculo.matricula.includes(this.filtroMatricula))) &&
                    (this.filtroFecha === '' || (vehiculo.fecha && vehiculo.fecha.split(' ')[0] === this.filtroFecha)) &&
                    (this.filtroEstado === '' || (vehiculo.estado && vehiculo.estado === this.filtroEstado))
                );
            });
        }
    },
    methods: {
        login() {
            fetch('http://localhost/Proyecto_JS_2/private/apiGrua/public/usuarios/index')
                .then(response => response.json())
                .then(users => {
                    const user = users.find(user => user.email === this.email_input && user.password === this.password_input);
                    if (user) {
                        this.loggedIn = true;
                        this.usuario = user;
                        if(user.admin == 'admin'){
                            this.isAdmin = 'true';
                            this.ejecutar('retirada', 'index');
                        }else{
                            this.isAdmin = 'false';
                        }
                    } else {
                        alert('Invalid credentials');
                    }
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                    alert('Error logging in. Please try again later.');
                });
        },
        logout() {
            this.loggedIn = false;
            this.isAdmin = 'false',
            this.email_input = '';
            this.password_input = '';
        },
        formatDate(timestamp) {
            const date = new Date(timestamp);
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            return `${year}-${month}-${day}`;
        },
        reiniciarDatosUsuarioSelected() {
            this.usuario_selected = {
                email: '',
                password: '',
                rol: ''
            };
            this.usuario_data_check = {
                email: '',
                email_msg: 'Looks good!',
                password: '',
                password_msg: 'Looks good!',
                rol: '',
                rol_msg: 'Looks good!'
            };
        },
        reiniciarDatosVehiculoSelected() {
            this.vehiculo_selected = {
                fecha_entrada: '',
                fecha_salida: '',
                fecha: '',
                lugar: '',
                direccion: '',
                agente: '',
                matricula: '',
                marca: '',
                modelo: '',
                color: '',
                motivo: '',
                tipo_vehiculo: '',
                grua: '',
                estado: ''
            };
            this.vehiculo_data_check = {
                fecha_entrada: '',
                fecha_entrada_msg: 'Looks good!',
                fecha_salida: '',
                fecha_salida_msg: 'Looks good!',
                fecha: '',
                fecha_msg: 'Looks good!',
                lugar: '',
                lugar_msg: 'Looks good!',
                direccion: '',
                direccion_msg: 'Looks good!',
                agente: '',
                agente_msg: 'Looks good!',
                matricula: '',
                matricula_msg: 'Looks good!',
                marca: '',
                marca_msg: 'Looks good!',
                modelo: '',
                modelo_msg: 'Looks good!',
                color: '',
                color_msg: 'Looks good!',
                motivo: '',
                motivo_msg: 'Looks good!',
                tipo_vehiculo: '',
                tipo_vehiculo_msg: 'Looks good!',
                grua: '',
                grua_msg: 'Looks good!',
                estado: '',
                estado_msg: 'Looks good!'
            }
        },
        ejecutar(pantalla, accion, id) {

            // Usuario
            if (pantalla === 'usuario') 
            {
                if (accion === 'index') {
                    this.usuario_index();
                }else if (accion === 'create') {
                    this.reiniciarDatosUsuarioSelected();
                }else if (accion === 'edit') {
                    this.reiniciarDatosUsuarioSelected();
                    this.usuario_selected = this.lista_usuarios.find(user => user.id === id);
                    this.usuario_check();
                }else if (accion === 'delete') {
                    this.usuario_selected = this.lista_usuarios.find(user => user.id === id);
                }
            }

            // Vehiculo
            else if (pantalla === 'vehiculo') 
            {
                if (accion === 'index') {
                    this.filterMatricula = '';
                    this.filterFecha = '';
                    this.filterEstado = '';
                    this.vehiculo_index();
                }else if (accion === 'create') {
                    this.reiniciarDatosVehiculoSelected();
                }else if (accion === 'edit') {
                    this.reiniciarDatosVehiculoSelected();
                    this.vehiculo_selected = this.lista_vehiculos.find(vehicle => vehicle.id === id);
                    this.vehiculo_check();
                }else if (accion === 'delete') {
                    this.vehiculo_selected = this.lista_vehiculos.find(vehicle => vehicle.id === id);
                }
            }
            
            // Retirada
            else if (pantalla === 'retirada')
            {
                if (accion === 'index') {
                    // this.retirada_index();
                }else if (accion === 'create') {
                    // this.retirada_create();
                }else if (accion === 'edit') {
                    // this.retirada_edit();
                }else if (accion === 'delete') {
                    // this.retirada_delete();
                }
            }

            // console.log('Pantalla: ' + pantalla + ' | Accion: ' + accion + ' | id: ' + id);
            this.pantalla = pantalla;
            this.accion = accion;
        },

        // FUCIONES LOGS
        async log_create(descripcion) {
            try {
                const response = await fetch('http://localhost/Proyecto_JS_2/private/apiGrua/public/logs/store', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        usuario: this.usuario.id,
                        accion: this.accion + descripcion,
                        fecha: new Date().toISOString().slice(0, 19).replace('T', ' ')
                    })
                });
                console.log(await response.json());
            } catch (error) {
                console.error('Error creating log:', error);
                alert('Error creating log. Please try again later.');
            }
        },

        // FUNCIONES RETIRADAS
        async retirada_index() {
            try {
                const response = await fetch('http://localhost/Proyecto_JS_2/private/apiGrua/public/retiradas/index');
                const retiradas = await response.json();
                this.lista_retiradas = retiradas;
            } catch (error) {
                console.error('Error fetching retiradas:', error);
                alert('Error fetching retiradas. Please try again later.');
            }
        },

        // FUNCIONES VEHICULOS
        async vehiculo_index() {
            try {
                const response = await fetch('http://localhost/Proyecto_JS_2/private/apiGrua/public/vehiculos/index');
                const vehicles = await response.json();
                this.lista_vehiculos = vehicles;
            } catch (error) {
                console.error('Error fetching vehicles:', error);
                alert('Error fetching vehicles. Please try again later.');
            }
        },
        async vehiculo_create() {
            if(this.vehiculo_check()) {
                try {
                    const response = await fetch('http://localhost/Proyecto_JS_2/private/apiGrua/public/vehiculos/store', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(this.vehiculo_selected)
                    });
                    console.log(await response.json());
                    this.log_create(" vehiculo");
                    this.ejecutar('vehiculo', 'index');
                } catch (error) {
                    console.error('Error creating vehicle:', error);
                    alert('Error creating vehicle. Please try again later.');
                }
            }
        },
        async vehiculo_edit() {
            if(this.vehiculo_check()) {
                try {
                    const response = await fetch('http://localhost/Proyecto_JS_2/private/apiGrua/public/vehiculos/update/' + this.vehiculo_selected.id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(this.vehiculo_selected)
                    });
                    console.log(await response.json());
                    this.log_create(" vehiculo. Id: " + this.vehiculo_selected.id);
                    this.ejecutar('vehiculo', 'index');
                } catch (error) {
                    console.error('Error updating vehicle:', error);
                    alert('Error updating vehicle. Please try again later.');
                }
            }
        },
        async vehiculo_delete() {
            try {
                const response = await fetch('http://localhost/Proyecto_JS_2/private/apiGrua/public/vehiculos/delete/' + this.vehiculo_selected.id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                console.log(await response.json());
                this.log_create(" vehiculo. Id: " + this.vehiculo_selected.id);
                this.ejecutar('vehiculo', 'index');
            } catch (error) {
                console.error('Error deleting vehicle:', error);
                alert('Error deleting vehicle. Please try again later.');
            }
        },
        vehiculo_check() {
            let check = true;

            if (!this.vehiculo_selected.fecha_entrada) {
                this.vehiculo_data_check.fecha_entrada_msg = 'La fecha de entrada es requerida.';
                this.vehiculo_data_check.fecha_entrada = 'is-invalid';
                check = false;
            } else {
                this.vehiculo_data_check.fecha_entrada_msg = 'Looks good!';
                this.vehiculo_data_check.fecha_entrada = 'is-valid';
            }

            // if (!this.vehiculo_selected.fecha_salida) {
            //     this.vehiculo_data_check.fecha_salida_msg = 'La fecha de salida es requerida.';
            //     this.vehiculo_data_check.fecha_salida = 'is-invalid';
            //     check = false;
            // } else {
            //     this.vehiculo_data_check.fecha_salida_msg = 'Looks good!';
            //     this.vehiculo_data_check.fecha_salida = 'is-valid';
            // }

            // if (!this.vehiculo_selected.fecha) {
            //     this.vehiculo_data_check.fecha_msg = 'La fecha es requerida.';
            //     this.vehiculo_data_check.fecha = 'is-invalid';
            //     check = false;
            // } else {
            //     this.vehiculo_data_check.fecha_msg = 'Looks good!';
            //     this.vehiculo_data_check.fecha = 'is-valid';
            // }
            
            if (this.vehiculo_selected.fecha == '') {
                this.vehiculo_selected.fecha = null;
            }
            if(this.vehiculo_selected.fecha_salida == '') {
                this.vehiculo_selected.fecha_salida = null;
            }

            if (!this.vehiculo_selected.lugar) {
                this.vehiculo_data_check.lugar_msg = 'El lugar es requerido.';
                this.vehiculo_data_check.lugar = 'is-invalid';
                check = false;
            } else {
                this.vehiculo_data_check.lugar_msg = 'Looks good!';
                this.vehiculo_data_check.lugar = 'is-valid';
            }

            if (!this.vehiculo_selected.direccion) {
                this.vehiculo_data_check.direccion_msg = 'La dirección es requerida.';
                this.vehiculo_data_check.direccion = 'is-invalid';
                check = false;
            } else {
                this.vehiculo_data_check.direccion_msg = 'Looks good!';
                this.vehiculo_data_check.direccion = 'is-valid';
            }

            if (!this.vehiculo_selected.agente) {
                this.vehiculo_data_check.agente_msg = 'El agente es requerido.';
                this.vehiculo_data_check.agente = 'is-invalid';
                check = false;
            } else {
                this.vehiculo_data_check.agente_msg = 'Looks good!';
                this.vehiculo_data_check.agente = 'is-valid';
            }

            if (!this.vehiculo_selected.matricula) {
                this.vehiculo_data_check.matricula_msg = 'La matrícula es requerida.';
                this.vehiculo_data_check.matricula = 'is-invalid';
                check = false;
            } else {
                this.vehiculo_data_check.matricula_msg = 'Looks good!';
                this.vehiculo_data_check.matricula = 'is-valid';
            }

            if (!this.vehiculo_selected.marca) {
                this.vehiculo_data_check.marca_msg = 'La marca es requerida.';
                this.vehiculo_data_check.marca = 'is-invalid';
                check = false;
            } else {
                this.vehiculo_data_check.marca_msg = 'Looks good!';
                this.vehiculo_data_check.marca = 'is-valid';
            }

            if (!this.vehiculo_selected.modelo) {
                this.vehiculo_data_check.modelo_msg = 'El modelo es requerido.';
                this.vehiculo_data_check.modelo = 'is-invalid';
                check = false;
            } else {
                this.vehiculo_data_check.modelo_msg = 'Looks good!';
                this.vehiculo_data_check.modelo = 'is-valid';
            }

            if (!this.vehiculo_selected.color) {
                this.vehiculo_data_check.color_msg = 'El color es requerido.';
                this.vehiculo_data_check.color = 'is-invalid';
                check = false;
            } else {
                this.vehiculo_data_check.color_msg = 'Looks good!';
                this.vehiculo_data_check.color = 'is-valid';
            }

            if (!this.vehiculo_selected.motivo) {
                this.vehiculo_data_check.motivo_msg = 'El motivo es requerido.';
                this.vehiculo_data_check.motivo = 'is-invalid';
                check = false;
            } else {
                this.vehiculo_data_check.motivo_msg = 'Looks good!';
                this.vehiculo_data_check.motivo = 'is-valid';
            }

            if (!this.vehiculo_selected.tipo_vehiculo) {
                this.vehiculo_data_check.tipo_vehiculo_msg = 'El tipo de vehículo es requerido.';
                this.vehiculo_data_check.tipo_vehiculo = 'is-invalid';
                check = false;
            }
            else if (!['A', 'B', 'C', 'D', 'E', 'F'].includes(this.vehiculo_selected.tipo_vehiculo)) {
                this.vehiculo_data_check.tipo_vehiculo_msg = 'El tipo de vehículo debe ser "A", "B", "C", "D", "E" o "F".';
                this.vehiculo_data_check.tipo_vehiculo = 'is-invalid';
                check = false;
            } else {
                this.vehiculo_data_check.tipo_vehiculo_msg = 'Looks good!';
                this.vehiculo_data_check.tipo_vehiculo = 'is-valid';
            }

            if (!this.vehiculo_selected.grua) {
                this.vehiculo_data_check.grua_msg = 'La grúa es requerida.';
                this.vehiculo_data_check.grua = 'is-invalid';
                check = false;
            } else {
                this.vehiculo_data_check.grua_msg = 'Looks good!';
                this.vehiculo_data_check.grua = 'is-valid';
            }

            if (!this.vehiculo_selected.estado) {
                this.vehiculo_data_check.estado_msg = 'El estado es requerido.';
                this.vehiculo_data_check.estado = 'is-invalid';
                check = false;
            } else {
                this.vehiculo_data_check.estado_msg = 'Looks good!';
                this.vehiculo_data_check.estado = 'is-valid';
            }

            return check;
        },

        // FUNCIONES USUARIOS
        async usuario_index() {
            try {
                const response = await fetch('http://localhost/Proyecto_JS_2/private/apiGrua/public/usuarios/index');
                const users = await response.json();
                this.lista_usuarios = users;
            } catch (error) {
                console.error('Error fetching users:', error);
                alert('Error fetching users. Please try again later.');
            }
        },
        async usuario_create() {
            if(this.usuario_check()) {
                try {
                    const response = await fetch('http://localhost/Proyecto_JS_2/private/apiGrua/public/usuarios/store', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(this.usuario_selected)
                    });
                    console.log(await response.json());
                    this.log_create(" usuario");
                    this.ejecutar('usuario', 'index');
                } catch (error) {
                    console.error('Error creating user:', error);
                    alert('Error creating user. Please try again later.');
                }
            }
        },
        async usuario_edit() {
            if(this.usuario_check()) {
                try {
                    const response = await fetch('http://localhost/Proyecto_JS_2/private/apiGrua/public/usuarios/update/' + this.usuario_selected.id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(this.usuario_selected)
                    });
                    console.log(await response.json());
                    this.log_create(" usuario. Id: " + this.usuario_selected.id);
                    this.ejecutar('usuario', 'index');
                } catch (error) {
                    console.error('Error updating user:', error);
                    alert('Error updating user. Please try again later.');
                }
            }
        },
        async usuario_delete() {
            try {
                const response = await fetch('http://localhost/Proyecto_JS_2/private/apiGrua/public/usuarios/delete/' + this.usuario_selected.id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                console.log(await response.json());       
                this.log_create(" usuario. Id: " + this.usuario_selected.id);         
                this.ejecutar('usuario', 'index');
            } catch (error) {
                console.error('Error deleting user:', error);
                alert('Error deleting user. Please try again later.');
            }
        },
        usuario_check() {
            let check = true;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!this.usuario_selected.email) {
                this.usuario_data_check.email_msg = 'El correo es requerido.';
                this.usuario_data_check.email = 'is-invalid';
                check = false;
            } else if (!emailPattern.test(this.usuario_selected.email)) {
                this.usuario_data_check.email_msg = 'Introduce una direccion válida de correo.';
                this.usuario_data_check.email = 'is-invalid';
                check = false;
            } else {
                this.usuario_data_check.email_msg = 'Looks good!';
                this.usuario_data_check.email = 'is-valid';
            }

            if (!this.usuario_selected.password) {
                this.usuario_data_check.password_msg = 'La contraseña es requerida.';
                this.usuario_data_check.password = 'is-invalid';
                check = false;
            } else if (this.usuario_selected.password.length < 6) {
                this.usuario_data_check.password_msg = 'La contraseña debe tener al menos 6 caracteres.';
                this.usuario_data_check.password = 'is-invalid';
                check = false;
            } else {
                this.usuario_data_check.password_msg = 'Looks good!';
                this.usuario_data_check.password = 'is-valid';
            }

            if (!this.usuario_selected.rol) {
                this.usuario_data_check.rol_msg = 'El rol es requerido.';
                this.usuario_data_check.rol = 'is-invalid';
                check = false;
            } else if (this.usuario_selected.rol !== 'user' && this.usuario_selected.rol !== 'admin') {
                this.usuario_data_check.rol_msg = 'El rol debe ser "user" o "admin".';
                this.usuario_data_check.rol = 'is-invalid';
                check = false;
            } else {
                this.usuario_data_check.rol_msg = 'Looks good!';
                this.usuario_data_check.rol = 'is-valid';
            }

            return check;
        }
    }
});
