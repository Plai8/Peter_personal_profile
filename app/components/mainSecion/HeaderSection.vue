<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


</script>

<template>
   <section class="flex justify-center pt-[150px] min-[500px]:pt-[240px] pb-[15%] max-[500px]:pb-[20%] px-[5%] max-w-[1500px] mx-auto relative" id="Home">
        <div class="w-1/2" data-aos="fade-right">
            <h1 class="text-[80px] max-[500px]:text-[70px]">Peter Lai</h1>
            <h2 class="text-[60px] max-[500px]:text-[45px]">網頁前端工程師</h2>
            <p class="text-[40px] max-[500px]:text-[30px]">設計 x 程式，自然融合。</p>
            <a href="https://github.com/Plai8" target="_blank" class="flex bg-black w-[180px] max-[500px]:px-2 px-4 py-2 text-white items-center gap-x-2 rounded-xl mt-[20px] border border-[3px] border-black hover:bg-white hover:text-black hover:border hover:border-[3px] hover:border-black" scrset>
                <img src="~/assets/images/github-icon.webp" alt="github icon圖片">
                GitHub
                <FontAwesomeIcon  icon="arrow-right" />
            </a>
        </div>
        <div class="w-1/2 relative z-1" data-aos="fade-left">
            <img src="~/assets/images/header-arrow-image.webp" class="header-arrow-icon absolute -top-10 -left-[20%]" alt="箭頭圖片">
            <img src="~/assets/images/header_image.webp" alt="Peter Lai卡通圖片">
        </div>
        <button class="absolute bottom-[5%] left-[6%] flex gap-x-3 items-center cursor-default">
            <span class="  bg-black w-[40px] h-[40px] rounded-[5px] relative">
                <img class="scroll-down-arrow"  src="~/assets/images/arrow-down-icon.webp" alt="向下箭頭圖片" srcset="">
            </span>
            <p class="text-[#BBB7B7]">Scroll Down</p>
        </button>
   </section>
</template>

<style scoped lang='scss'>
section {

 .scroll-down-arrow{
            position:absolute;  
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
            animation: scroll-down 2s infinite;
         
        }
        a {
            transition: box-shadow .3s ease-in-out;
        &:hover {
            box-shadow: 4px 5px 0 #000;
        }
    }
}
@media screen and (max-width:940px) {
    section {
        flex-direction: column;
        align-items: center;
        align-content: center;
        gap: 20px;
        div {
            width: 100%;
            text-align: center;
            a,
            img {
                margin:0 auto;
            }
            a {
                margin-top: 20px;
            }
             .header-arrow-icon{
                width: 150px;
                left:68%;
                margin:0;
                transform: rotate(100deg);
             }
        }
        button {
            bottom:2%;
            width: 150px;
            left: 50%;
            transform: translate(-50%);
           
        }
    }
}


@keyframes scroll-down {
  from {
    transform: translate(-50%,-210%)
  }
  to {
    transform: translate(-50%,210%)
  }
}

</style>