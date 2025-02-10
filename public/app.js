let app = new Vue({
    el: '#app',
    data: {
        mensaje: '¡Estás Logeado!',
        loggedIn: false,
        email: '',
        password: ''
    },
    methods: {
        login() {
            fetch('http://localhost/Proyecto_JS_2/private/apiGrua/public/usuarios')
                .then(response => response.json())
                .then(users => {
                    const user = users.find(user => user.email === this.email && user.password === this.password);
                    if (user) {
                        this.loggedIn = true;
                    } else {
                        alert('Invalid credentials');
                    }
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                    alert('Error logging in. Please try again later.');
                });
        }
    }
});