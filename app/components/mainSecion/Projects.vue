<script setup lang='ts'>
import ProjectCard from './base/ProjectCard.vue';
import sharFinImage from '~/assets/images/SharFin-image.webp'
import farmerStore from '~/assets/images/farmer-store-website-image.webp'
import maskStore from '~/assets/images/mask-store-app-image.webp'
import jjbcImage from '~/assets/images/jjbc-image.webp'
const projects = [
    {
        title: 'SharFin - 衝浪板商店',
        descript: '以 HTML、CSS、JavaScript 開發的響應式衝浪板商店網站，支援多裝置瀏覽與購物功能，並整合線上課程預約與民宿資訊頁面。',
        imgSrc: sharFinImage,
        githubLink: 'https://github.com/Plai8/SharFin-version-2-1',
        demoLink: 'https://plai8.github.io/SharFin-version-2-1/'
    },
    {
        title: '口罩地圖 - 口罩地圖應用',
        descript: ['運用 Vue.js，主要功能包括：','1.狀態管理與地圖整合：使用 Pinia 管理狀態，搭配 Leaflet 顯示各縣市藥局口罩數量。','API 串接：取得藥局資料，並將位置對應到地圖，方便查詢口罩存量。'],
        imgSrc: maskStore,
        githubLink: 'https://github.com/Plai8/mask_store_app',
        demoLink: ' https://plai8.github.io/mask_store_app/'
    },
    {
        title: '果籽 - 小農友善平台',
        descript: ['運用Vue.js框架:',
                    '1.利用Router、Pinia商品列與購物車串連',
                    '2.活動列表使用v-canlendar套件',
                    '3.後台活動列表管理，PHP串接與活動資料庫建立。'
                ],
        imgSrc: farmerStore,
        githubLink: 'https://github.com/Plai8/SharFin-version-2-1',
        demoLink: 'https://tibamef2e.com/cid101/g4/front/'
    },
    {
        title: '金金財寶娛樂城 - 實務專案',
        descript:[ `運用 Vue.js 框架進行前端功能開發與維護參與遊戲平台專案，完成以下功能:`,
                    '1.遊戲樣式白金化：優化 UI/UX，使界面更貼近玩家需求。',
                    '2.遊戲公會功能：負責前端邏輯與畫面設計，提升社群互動體驗。',
                    '3.第三方登入串接：整合 Telegram OAuth 流程，讓玩家能快速登入平台。',
                    '4.蓋板廣告設計與實作：實現彈出式廣告模組，並支援後台控制 。'],
        imgSrc: jjbcImage,
        githubLink: 'https://github.com/Plai8/jjcb_linegame',
        demoLink: 'https://youtu.be/jhG1ulnKpG4'
    }
]

</script>

<template>
    <section class="p-[5%] max-w-[1500px] mx-auto" id="Project">
        <h2 class="text-[60px] text-center mb-[15px]">Projects</h2>
        <div class="flex flex-wrap gap-x-[2.5%] justify-start">
            <ProjectCard :project-data="projects" />
        </div>
    </section>
</template>

<style scoped lang='scss'></style>