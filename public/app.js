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
        ejecutar(pantalla, accion, id) {

            // Usuario
            if (pantalla === 'usuario') 
            {
                if (accion === 'index') {
                    this.usuario_index();
                }else if (accion === 'create') {
                    // this.usuario_create();
                }else if (accion === 'edit') {
                    // this.usuario_edit();
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
    }
});