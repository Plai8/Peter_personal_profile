<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


</script>

<template>
   <section>
        <div class="w-full relative" data-aos="fade-up">
            <h3 class="text-[#7D7E83] text-[20px] absolute right-1/2 translate-x-1/2" >Get in Touch.</h3>
            <h3 class="text-[60px] font-[600] mt-[10px] max-[550px]:text-[50px]" data-aos="fade-up">Contact Me.</h3>
        </div>
        <div class="w-[60%] mx-auto flex justify-around bg-[#FAF9FA] border border-[2px] border-black rounded-[50px] p-8 mt-5 max-[1050px]:w-[80%] max-[650px]:w-full max-[550px]:flex-col max-[550px]:gap-4" data-aos="fade-right">
            <div class="flex gap-2 items-center max-[550px]:pl-[5px]">
                <div class="bg-black rounded-full px-2 py-2">
                    <FontAwesomeIcon  icon="fa-envelope" class="text-white"/>
                </div>
                <p>a0910930190@gmail.com</p>
            </div>
            <div class="flex gap-2 items-center">
                <a href="https://github.com/Plai8" target="_blank" class="flex items-center gap-x-1" >
                <img src="~/assets/images/github-icon.webp" alt="github icon圖片">
                GitHub
            </a>
            </div>
        </div>
        <img src="~/assets/images/my-info-image.webp" alt="男人拿著公事包奔跑圖片" srcset="" class="mx-auto my-[5%]" data-aos="fade-up">
        <p class="text-[#7D7E83] text-[12px] absolute bottom-1 left-1/2 -translate-x-1/2">Copyright © 2025 Peter Lai. All Rights Reserved</p>
   </section>
</template>

<style scoped lang='scss'>
    section {
        max-width: 1500px;
        text-align: center;
        margin: 0 auto;
        position: relative;
        padding:5% 10%;
        display: flex;
        flex-direction: column;
        gap:20px;
    }
</style>