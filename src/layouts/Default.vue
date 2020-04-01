<template>
  <div class="layout">
    <header uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
      <nav class="nav uk-navbar-container" uk-navbar>
        <div class="uk-navbar-center">
          <strong class="uk-navbar-item uk-logo">
            <g-link to="/">The Advocates</g-link>
          </strong>
          <ul class="uk-navbar-nav">
            <li class="uk-active">
              <g-link class="nav__link" to="/">Home</g-link>
            </li>
            <li>
              <g-link class="nav__link" to="/about/">About</g-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}

img {
  max-width: 100%;
}

nav[role="navigation"] {
  text-align: center;
}
nav[role="navigation"] a {
  display: inline-block;
  margin: 1.0em 0.75em 2.0em;
}

.layout {
  max-width: 800px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.nav__link {
  margin-left: 20px;
}
.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 1em 0;
}
</style>
