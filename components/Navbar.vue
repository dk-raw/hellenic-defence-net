<template>
  <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand fw-bold"><img src="public/logo-light.svg" alt="Spartan Helmet Logo"
          height="30" class="d-inline-block" fill="green" />
        {{ brand }}</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">ΑΡΧΙΚΗ</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/articles" class="nav-link">ΑΡΘΡΑ</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/articles/all" class="nav-link">ΟΛΑ</NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
              ΚΑΤΗΓΟΡΙΕΣ
            </a>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink to="/category/αεροπορια" class="dropdown-item">ΑΕΡΟΠΟΡΙΑ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/ναυτικο" class="dropdown-item">ΝΑΥΤΙΚΟ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/πεζικο" class="dropdown-item">ΣΤΡΑΤΟΣ ΞΗΡΑΣ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/πυροβολικο" class="dropdown-item">ΠΥΡΟΒΟΛΙΚΟ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/τεθωρακισμενα" class="dropdown-item">ΟΧΗΜΑΤΑ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/αεραμυνα" class="dropdown-item">ΑΕΡΑΜΥΝΑ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/uav" class="dropdown-item">UAV</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/ηλεκτρονικος πολεμος" class="dropdown-item">ΗΛΕΚΤΡΟΝΙΚΟΣ ΠΟΛΕΜΟΣ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/c4isr" class="dropdown-item">C4ISR</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/βιομηχανια" class="dropdown-item">ΒΙΟΜΗΧΑΝΙΑ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/διαστημα" class="dropdown-item">ΔΙΑΣΤΗΜΑ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/ιστορια" class="dropdown-item">ΙΣΤΟΡΙΑ</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
              ΧΩΡΕΣ
            </a>
            <ul class="dropdown-menu">
              <li>
                <h6 class="dropdown-header">ΕΥΡΩΠΗ</h6>
              </li>
              <li>
                <NuxtLink to="/category/ουκρανια" class="dropdown-item">ΟΥΚΡΑΝΙΑ</NuxtLink>
              </li>
              <!-- <li>
                <NuxtLink to="/category/βουλγαρια" class="dropdown-item"
                  >ΒΟΥΛΓΑΡΙΑ</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/category/ρουμανια" class="dropdown-item"
                  >ΡΟΥΜΑΝΙΑ</NuxtLink
                >
              </li> -->
              <li>
                <h6 class="dropdown-header">ΑΣΙΑ</h6>
              </li>
              <li>
                <NuxtLink to="/category/τουρκια" class="dropdown-item">ΤΟΥΡΚΙΑ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/ιραν" class="dropdown-item">ΙΡΑΝ</NuxtLink>
              </li>
              <!-- <li>
                <NuxtLink to="/category/αρμενια" class="dropdown-item"
                  >ΑΡΜΕΝΙΑ</NuxtLink
                >
              </li> -->
              <li>
                <NuxtLink to="/category/κινα" class="dropdown-item">ΚΙΝΑ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/κορεα" class="dropdown-item">ΚΟΡΕΑ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/ιαπωνια" class="dropdown-item">ΙΑΠΩΝΙΑ</NuxtLink>
              </li>
              <!-- <li><h6 class="dropdown-header">ΑΜΕΡΙΚΗ</h6></li>
              <li>
                <NuxtLink to="/category/ηπα" class="dropdown-item"
                  >ΗΠΑ</NuxtLink
                >
              </li> -->
            </ul>
          </li>
        </ul>
        <div class="d-flex align-items-center text-muted">
          <a href="https://twitter.com/hellenicdefence" target="_blank" class="link" style="margin-right: 0.8em"
            title="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://t.me/hellenicdefence" target="_blank" class="link" style="margin-right: 0.8em"
            title="Telegram"><i class="fa-brands fa-telegram"></i></a>
          <form class="me-2 w-100" @submit.prevent="search">
            <div class="input-group">
              <span class="input-group-text text-muted"><i class="fa-solid fa-magnifying-glass"></i></span>
              <input type="search" minlength="2" maxlength="20" v-model="searchTerm" class="form-control"
                placeholder="ΑΝΑΖΗΤΗΣΗ" required />
            </div>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    brand: String,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    search() {
      this.$router.push(`/search/${this.searchTerm}`);
    },
  },
};
</script>
