<script setup lang='ts'>
const emit = defineEmits(['clickScrollTo'])
const handleScrollTo = () => {
    emit('clickScrollTo',{
        name:'Contact Me',
        link: '#Contact-Me'
    })
}
</script>

<template>
   <section class="relative" id="About-Me">
    <img src="~/assets/images/header-arrow-image.webp" class="header-arrow-icon w-[16%] absolute top-10 left-[40%] max-[900px]:hidden" alt="箭頭圖片" data-aos="fade-up">
    <div class="flex px-[5%] py-[10%] gap-x-[10%] w-full justify-between max-w-[1500px] mx-auto max-[900px]:flex-col">
        <div class="w-[40%] max-[900px]:w-full" data-aos="fade-right">
        <img class="max-[900px]:mx-auto " src="~/assets/images/about-me-image.webp" alt="關於我自畫像圖" srcset="">
    </div>
    <div class="w-[60%] max-[900px]:w-full  max-[900px]:text-center" data-aos="fade-left">
        <h2 class="text-[60px]">About Me.</h2>
        <ul class="text-start">
            <li>對前端網頁開發與設計充滿熱忱，持續學習新技術以提升開發效率與使用者體驗。曾參與遊戲平台系統開發，具備獨立完成功能實作及良好的團隊協作經驗。</li>
            <li>技能: HTML, CSS, JavaScript, Vue.js, Nuxt.js, Sass, Tailwindcss, TypeScript, Bootstrap, JQery, PHP, Python
            </li>
        </ul>
        <button @click="handleScrollTo" class="bg-black w-[170px] text-white flex items-center rounded-lg p-2 gap-2 mt-[60px] relative max-[900px]:mx-auto">
            <img src="~/assets/images/header-arrow-image.webp" class="header-arrow-icon absolute -top-[50%] left-[150%] rotate-[135deg]  max-[900px]:hidden" alt="箭頭圖片">
            <img src="~/assets/images/contact-me-icon.webp" alt="" srcset="">
            Contact Me
        </button>
    </div>
    </div>
   
   </section>
</template>

<style scoped lang='scss'>
    section {
        width: 100%;
        background-color: #F6F5F4;
        li {
            position: relative;
            line-break: auto;
            margin-bottom: 20px;
            &::after {
                content: '';
                width: 10px;
                height: 10px;
                position: absolute;
                background-color: #000;
                border-radius: 100%;
                top:12%;
                left: -5%;
            }
        }
        div {
            button {
                border:3px solid #000;
                position: relative;
            transition: box-shadow .3s ease-in-out;
        
            &:hover{
                background-color: #fff;
                box-shadow: 4px 5px 0 #000;
                color:#000;
               }
            }
        }
    }

    @media screen and (max-width:900px) {
        section{

            li {
                &::after{ 
                    display: none;
                }
            }
        }
    }
</style>