<template>
  <div id="app">
    <aside class="sidebar">
      <div class="logo">
        <h1>Leo Messi</h1>
        <p>Usuario admin</p>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="" class="active">
              <i class="fas fa-tachometer-alt"></i> Dashboard
            </router-link>
          </li>
          <li>
            <router-link to="" class="active">
              <i class="fas fa-user"></i> Mascotas
            </router-link>
          </li>
          <li>
            <router-link to="">
              <i class="fas fa-map-marker-alt"></i> Vacunas
            </router-link>
          </li>
          <li>
            <router-link to="/adopciones">
              <i class="fas fa-map-signs"></i> Adopciones
            </router-link>
          </li>
          <li>
            <router-link to="/historial">
              <i class="fas fa-route"></i> Registro medico
            </router-link>
          </li>
          <li>
            <router-link to="">
              <i class="fas fa-envelope"></i> Usuarios
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  min-height: 100vh; 
  background-color: #f0f5fb;
}

.sidebar {
  flex: 0 0 215px; 
  background-color: #2D353C;
  padding-top: 25px;
}

.logo {
  text-align: center;
  padding-bottom: 20px;
}

.logo h1 {
  font-size: 2.5em; 
}

.logo .open {
  font-weight: bold; 
  color: black;
  font-size: 1em; 
  display: block;
  line-height: 0.8em; 
   margin-right: 70px;
}

.logo .blind {
  color: gray;
  font-size: 1em; 
  display: block;
  margin-left: 70px;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  padding: 10px;
  padding-left: 20px;
  transition: transform 0.3s ease; /* Añadir transición a los elementos del menú */
}

nav ul li a {
  text-decoration: none;
  color: #6c757d;
  display: flex;
  align-items: center;
  font-size: 16px; /* Tamaño de fuente aumentado para elementos de menú */
}

nav ul li a i {
  margin-right: 10px;
}

nav ul li:hover {
  transform: translateX(10px); /* Desplazar hacia la derecha al pasar el mouse */
}

nav ul li a:hover {
  background-color: #e9ecef;
  border-radius: 4px;
}

.submenu ul {
  display: none;
  padding-left: 20px;
}

.submenu:hover ul {
  display: block;
}

.submenu ul li {
  position: relative;
  padding-left: 20px;
  margin-top: 5px;
}

.submenu ul li::before {
  content: '-';
  position: absolute;
  left: 0;
  color: #000000; 
}
</style>