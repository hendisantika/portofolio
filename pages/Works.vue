<template>
  <NuxtLayout name="default">
    <Modal
      :close-modal="closeModal"
      :is-open="isOpen"
      :modal-content="currentModalContent"
    />
    <WorkSection
      :on-click-function="showModal"
      :working-projects="workingProjects"
    />
  </NuxtLayout>
</template>
<script setup>
const { workingProjects } = useConstants();
// modal functionality
const isOpen = ref(false);
const currentModalContent = ref({});
const showModal = (content) => {
  currentModalContent.value = content;
  isOpen.value = true;
  document.body.style.height = "100vh";
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  isOpen.value = false;
  document.body.style.height = "auto";
  document.body.style.overflow = "visible";
};

onMounted(() => {
  document.addEventListener("keyup", function(event) {
    if (isOpen.value && event.key === "Escape") {
      closeModal();
    }
  });
});
</script>
