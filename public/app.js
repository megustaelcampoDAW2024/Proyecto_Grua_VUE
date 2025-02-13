let app = new Vue({
    el: '#app',
    data: {
        loggedIn: false,
        isAdmin: 'false',
        email_input: '',
        password_input: '',
        usuario: "",            // Variable para guardar el usuario logeado
        pantalla: 'inicio',     // Variable para controlar la pantalla que se muestra
        lista_usuarios: []      // Variable para guardar la lista de usuarios
    },
    methods: {
        login() {
            fetch('http://localhost/Proyecto_JS_2/private/apiGrua/public/usuarios')
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
        pantallaListaVehiculos() {
            cargarListaUsuarios();
            this.pantalla = 'lista.vehiculo';
        },
        cargarListaUsuarios() {
            fetch('http://localhost/Proyecto_JS_2/private/apiGrua/public/usuarios')
                .then(response => response.json())
                .then(users => {
                    this.lista_usuarios = users;
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                    alert('Error fetching users. Please try again later.');
                });
        },
        pantallaListaRetiradas() {
            this.pantalla = 'lista.retiradas';
        },
        pantallaUsuarios() {
            this.pantalla = 'usuarios';
        },
    }
});