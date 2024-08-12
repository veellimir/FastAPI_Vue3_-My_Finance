<script setup>

</script>

<template>
   <div class="d-flex">
    <section class="navbar navbar-expand-lg navbar-dark bg-dark vh-100 Custom--style-my-border">
      <div class="container-fluid flex-lg-column">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav flex-column">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="#">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Features</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Pricing</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section></section>
   </div>
</template>
  

  
  <style scoped>
  .navbar {
    height: 100vh; /* Высота на весь экран */
  }
  
  .navbar-nav {
    flex-grow: 1; /* Занять всю доступную высоту */
  }
  </style>
  