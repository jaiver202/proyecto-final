document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('notificationForm');
    const notificationList = document.getElementById('notificationList');
    const usuarioSelect = document.getElementById('usuario');
    const eventoSelect = document.getElementById('evento');

    // Función para mostrar mensaje de error en la interfaz
    function showError(message, selectElement) {
        const errorOption = document.createElement('option');
        errorOption.textContent = message;
        errorOption.disabled = true;
        errorOption.selected = true;
        selectElement.appendChild(errorOption);
    }

    // Función para cargar usuarios
    async function loadUsers() {
        try {
            console.log('Iniciando carga de usuarios...');
            const response = await fetch('http://localhost:3000/usuarios');
            if (response.ok) {
                const users = await response.json();
                console.log('Usuarios cargados:', users);
                if (users.length === 0) throw new Error('No se encontraron usuarios');
                
                users.forEach(user => {
                    const option = document.createElement('option');
                    option.value = user.usuario_id;
                    option.textContent = user.nombre || `Usuario ${user.usuario_id}`;
                    usuarioSelect.appendChild(option);
                });
                console.log('Opciones de usuario agregadas al select');
            } else {
                throw new Error(`Error al cargar usuarios: ${response.status}`);
            }
        } catch (error) {
            console.error('Error en loadUsers:', error);
            showError('Error al cargar usuarios', usuarioSelect);
        }
    }

    // Función para cargar eventos
    async function loadEvents() {
        try {
            console.log('Iniciando carga de eventos...');
            const response = await fetch('http://localhost:3000/eventos');
            if (response.ok) {
                const events = await response.json();
                console.log('Eventos cargados:', events);
                if (events.length === 0) throw new Error('No se encontraron eventos');
                
                events.forEach(event => {
                    const option = document.createElement('option');
                    option.value = event.evento_id;
                    option.textContent = event.nombre || `Evento ${event.evento_id}`;
                    eventoSelect.appendChild(option);
                });
                console.log('Opciones de evento agregadas al select');
            } else {
                throw new Error(`Error al cargar eventos: ${response.status}`);
            }
        } catch (error) {
            console.error('Error en loadEvents:', error);
            showError('Error al cargar eventos', eventoSelect);
        }
    }

    // Cargar usuarios y eventos al iniciar la página
    loadUsers();
    loadEvents();

    form.style.display = 'block'; // Asegurarse de que el formulario sea visible
    console.log('Formulario configurado y visible');
});
