<template>
  <Transition>
    <div
      v-if="isOpen"
      aria-labelledby="modal-title"
      aria-modal="true"
      class="modal-container"
      role="dialog"
    >
      <div class="modal-bg"></div>

      <div class="modal-fixed-wrapper">
        <div class="modal-size">
          <div class="modal">
            <XMarkIcon class="x-icon" @click="closeModal" />
            <!-- title -->
            <p class="modal-heading">
              {{ modalContent?.heading }}
            </p>
            <hr />
            <!-- details -->
            <div class="modal-content-wrapper">
              <div
                class="lg:flex justify-between gap-10 lg:px-2 lg:mb-7 xl:mb-10"
              >
                <p class="text-sm lg:text-base lg:w-1/2">
                  {{ modalContent?.description }}
                </p>

                <div class="lg:flex flex-col justify-between lg:w-1/2">
                  <div class="lg:mb-7">
                    <div
                      v-if="modalContent.teamMembers.length > 0"
                      class="mt-3 mb-3 lg:mt-0"
                    >
                      <p class="text-sm lg:text-base">Team Member:</p>
                      <p class="flex flex-wrap">
                        <span
                          v-for="(member, index) in modalContent?.teamMembers"
                          :key="member.name"
                          class="text-sm lg:text-base"
                        ><a
                          :href="member.linkedIn"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                            {{ member.name }}</a
                        ><span
                          v-if="
                              index !== modalContent?.teamMembers.length - 1
                            "
                        >&nbsp;&#183;&nbsp;</span
                        ></span
                        >
                      </p>
                    </div>

                    <div class="mt-3 lg:mt-0">
                      <p class="text-sm lg:text-base">Tech Stack:</p>
                      <p class="flex flex-wrap">
                        <span
                          v-for="(tech, index) in modalContent?.techStack"
                          :key="tech"
                          class="text-sm lg:text-base"
                        >{{ tech
                          }}<span
                            v-if="index !== modalContent?.techStack.length - 1"
                          >&nbsp;&#183;&nbsp;</span
                          ></span
                        >
                      </p>
                    </div>
                  </div>

                  <div class="flex items-center flex-wrap mt-3 lg:mt-0">
                    <LinkIcon class="w-4 h-4 mr-1 text-gray-500" />
                    <p
                      v-for="(url, index) in modalContent?.urls"
                      :key="url"
                      class="flex text-sm lg:text-base"
                    >
                      <a
                        :href="url.link"
                        class="block text-center text-gray-600 underline"
                        rel="noopener noreferrer"
                        target="_blank"
                      >{{ url.name }}</a
                      >
                      <span v-if="index !== modalContent?.urls.length - 1"
                      >&nbsp;&#183;&nbsp;</span
                      >
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div class="space-y-7 lg:space-y-12 px-2 pb-5">
                <!-- right scrollable content -->
                <div
                  v-for="imageShowcase in modalContent?.imageShowcase"
                  :key="imageShowcase.alt"
                >
                  <p
                    class="uppercase text-center text-sm lg:text-base mb-1 font-semibold"
                  >
                    {{ imageShowcase.title }}
                  </p>
                  <img
                    :alt="imageShowcase.alt"
                    :src="imageShowcase.src"
                    :title="imageShowcase.title"
                    class="shadow-md rounded-md"
                  />
                </div>
              </div>
            </div>
            <!-- list of images of work done -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { LinkIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  closeModal: {
    type: Function,
    default: () => {
      return "Default function";
    }
  },
  modalContent: {
    type: Object,
    default: () => {
    }
  }
});
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
