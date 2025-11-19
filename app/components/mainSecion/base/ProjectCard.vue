<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

interface ProjectData {
    title: string,
    descript: string[] | string,
    githubLink: string,
    demoLink: string,
    imgSrc: string
}
const props = defineProps<{ projectData: ProjectData[] }>()

</script>

<template>
    <div class="border border-[3px] border-[#000] rounded-[20px] w-[47.5%] max-[740px]:w-[100%] min-[1050px]:w-[31.6666%] p-3 flex flex-col justify-between mt-[5%]" data-aos="flip-up" data-aos-offset='0'
        v-for="(project, index) in props.projectData" :key="index">
        <div class="relative">
            <img :src="project.imgSrc" :alt='`${project.title}的圖片`' class="mx-auto rounded-[20px] max-h-[190px] w-full overflow-hidden">
            <a :href="project.demoLink" target="_blank"
                class="demo-link-btn p-6 rounded-[100%] bg-black absolute -bottom-[10px] -right-[10px] -rotate-45">
                <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <FontAwesomeIcon icon="fa-arrow-right" class="text-[#fff] text-2xl" />
                </span>
            </a>
        </div>
        <div class="flex flex-col gap-y-2 mt-2">
            <h3 class="text-[20px] font-[600]">{{ project.title }}</h3>
            <p class="text-[#7D7E83]" v-if="typeof project.descript === 'string'">{{ project.descript }}</p>
            <ul class="text-[#7D7E83]" v-else >
                <li v-for="list in project.descript">{{ list }}</li>
            </ul>
            </div>
            <div class="flex items-center justify-center mt-2 gap-x-3">
                <a :href="project.githubLink" target="_blank"
                    class="github-link flex items-center justify-between gap-2 bg-black border border-[3px] text-[#fff] border-[#000] px-2 py-1 rounded-[15px] hover:bg-[#fff] hover:text-[#000]">
                    <img class="w-[35px]" src="~/assets/images/github-icon.webp" alt="github icon圖片">
                    GitHub
                </a>
                <a :href="project.demoLink" target="_blank"
                    class="live-demo-btn flex items-center justify-between  border border-[3px] border-[#000] px-2 py-2 gap-2 rounded-[15px]">
                    <FontAwesomeIcon icon="fa-earth-americas" class="text-[#000] text-2xl" />
                    Live Demo
                </a>
            </div>
        </div>
</template>

<style scoped lang='scss'>
section {
    .live-demo-btn,.github-link  {
        position: relative;
        transition: box-shadow .3s ease-in-out;
        &:hover {
            box-shadow: 2px 2px 0 #000;
        }
    }
}
</style>