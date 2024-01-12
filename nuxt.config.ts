import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      title: "Senior Backend Developer | Web developer portfolio | Front End Developer",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover"
        },
        {
          name: "description",
          content:
            "Personal Portfolio Website. I'm a Back-End Developer, Front-End Web Developer based in Bandung - West Java, Indonesia. Currently focused on developing website using Vue and Spring Boot. Checkout my projects and github repositories"
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "HENDI SANTIKA" },
        {
          name: "keywords",
          content:
            "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Po Yi Zhi, Yi Zhi, Po YZ, YZ Po, eazypau, Malaysia"
        },
        // social meta tags
        {
          property: "og:site_name",
          content: "Web developer portfolio | Front End Developer"
        },
        {
          property: "og:site",
          content: "https://s.id/hendisantika"
        },
        {
          property: "og:title",
          content: "Web developer portfolio | Front End Developer"
        },
        {
          property: "og:description",
          content:
            "Personal Portfolio Website. I'm a Back-End Developer, Front-End Web Developer based in Bandung - West Java, Indonesia. Currently focused on developing website using Vue and Spring Boot. Checkout my projects and github repositories"
        },
        // sharing thumbmail img
        {
          property: "og:image",
          content: "https://www.eazypau.com/favicon-bw.png" ///favicon-wb.png
        },
        // google site verification
        {
          name: "google-site-verification",
          content: "CpKqeACrIS7JLwdilAnMgoDicJnoBaNmupPoq6fUtFs"
        }
      ],
      link: [{ rel: "icon", href: "/favicon-bw.png" }],
      script: [
        {
          async: "",
          src: "https://www.googletagmanager.com/gtag/js?id=G-98SHRX2R23"
        },
        {
          type: "text/javascript",
          src: "js/useGtag.js",
          body: true
        }
      ]
    }
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss"
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"]
  }
});
