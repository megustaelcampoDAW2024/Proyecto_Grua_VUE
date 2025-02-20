let app = new Vue({
    el: '#app',
    data: {
        loggedIn: false,
        isAdmin: 'false',
        email_input: '',
        password_input: '',
        usuario: "",            // Variable para guardar el usuario logeado
        pantalla: 'inicio',     // Variable para controlar la pantalla que se muestra
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
                    // this.vehiculo_index();
                }else if (accion === 'create') {
                    // this.vehiculo_create();
                }else if (accion === 'edit') {
                    // this.vehiculo_edit();
                }else if (accion === 'delete') {
                    // this.vehiculo_delete();
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

            console.log('Pantalla: ' + pantalla + ' | Accion: ' + accion + ' | id: ' + id);
            
            this.pantalla = pantalla;
            this.accion = accion;
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