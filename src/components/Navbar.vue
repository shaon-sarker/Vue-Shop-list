<template>
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container">
          <a class="navbar-brand text-white" href="#">ProductShop</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link text-white" aria-current="page" to="/">Home</RouterLink>
              </li>
            </ul>
          </div>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>