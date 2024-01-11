<template>
  <div class="footer-section">
    <footer>
      <div class="social-icons-and-navigation">
        <!-- nav - start -->
        <nav>
          <NuxtLink
            v-for="item in navigation"
            :key="item.id"
            :href="item.href"
            class="footerBtn"
          >{{ item.name }}
          </NuxtLink
          >
        </nav>
        <!-- nav - end -->

        <!-- social - start -->
        <div>
          <a
            aria-label="Instagram"
            class="footerIcon"
            href="https://www.instagram.com/yzpo/"
            target="_blank"
          >
            <IconsInstaIcon />
          </a>

          <a
            aria-label="Facebook"
            class="footerIcon"
            href="https://www.facebook.com/yizhipo"
            target="_blank"
          >
            <IconsFacebookIcon />
          </a>

          <a
            aria-label="Linkden"
            class="footerIcon"
            href="https://www.linkedin.com/in/yzpo/"
            target="_blank"
          >
            <IconsLinkedInIcon />
          </a>

          <a
            aria-label="Github"
            class="footerIcon"
            href="https://github.com/eazypau"
            target="_blank"
          >
            <IconsGithubIcon />
          </a>
        </div>
        <!-- social - end -->
      </div>

      <div class="copyright">
        © {{ CURRENT_YEAR }} - Present Po YZ. All rights reserved.
      </div>
    </footer>
  </div>
</template>
<script setup>
// utils and hooks
const { navigation } = useConstants();
const CURRENT_YEAR = new Date().getFullYear();
</script>
