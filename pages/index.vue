<template>
  <NuxtLayout name="main">
    <Header />
  </NuxtLayout>
</template>
<script setup>
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Web developer portfolio | Front End Developer - HENDI SANTIKA",
  author: {
    "@type": "Person",
    "@id": "#hendisantika"
  },
  url: "https://s.id/hendisantika",
  description:
    "Personal Portfolio Website. I'm a Back-End Developer based in Bandung, Indonesia. Currently focused on developing website using Vue and Spring Boot. Checkout my projects and github repositories",
  keywords:
    "Back End Developer, Web Developer, Back End Engineer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Hendi, Santika, Hendi Santika, kang Hendi, Bandung, JVM INDONESIA",
  image: "https://www.eazypau.com/profile-pics/profile.webp"
};
const personJson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "#poyizhi",
  name: "HENDI SANTIKA",
  email: "hendisantika@yahoo.co.id",
  url: "https://s.id/hendisantika"
};
useHead({
  script: [
    {
      children: JSON.stringify(jsonLd),
      type: "application/ld+json"
    },
    {
      children: JSON.stringify(personJson),
      type: "application/ld+json"
    }
  ]
});
definePageMeta({
  layout: false
});
</script>
