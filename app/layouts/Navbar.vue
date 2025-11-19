<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { tab } from '~/types/constant'

const {scrollTarget} = defineProps<{
    scrollTarget:tab
}>()

const tabs: tab[] = [
    {
        name: 'Home',
        link: '#Home'
    },
    {
        name: "About Me",
        link: '#About-Me'
    },
    {
        name: "Projects",
        link: '#Project'
    },
    {
        name: "Contact Me",
        link: "#Contact-Me"
    }
]

// 變數
const currentTab = ref(tabs[0]?.name)
const isOpen = ref(false)
const route = useRoute();

// 函式
const scrollTo = useScrollTo()
const toggleNavMobileShow = () => {
    isOpen.value = !isOpen.value
}
const handleNavClick = (tabName: string,link:string) => {
    // 若點擊logo依律跳轉回header
    if(currentTab.value === tabName && currentTab.value !== 'Home') return
    currentTab.value = tabName
    scrollTo(link)
    // 若為mobile時，需要關掉nav
    if(isOpen.value) {
        toggleNavMobileShow();
    }
}

watch(() => scrollTarget, (newHash) => {
    handleNavClick(newHash.name, newHash.link)
    
},{
    immediate:true
})
</script>

<template>
    <nav class="fixed top-0 left-0 px-[5%] py-[20px] w-full flex justify-between items-center " style="z-index: 2;">
        <button @click="handleNavClick('Home', '#Home')"><img class="max-[800px]:w-[90%] max-w-[60px] cursor:pointer"
                src="~/assets/images/website-logo.webp" alt="個人網站logo"></button>
        <ul class="flex gap-x-16 max-[800px]:hidden">
            <li v-for="(tab, index) in tabs" :key="index" class="text-[#BBB7B7]"
                    :class="currentTab === tab.name ? 'actived' : ''" @click="handleNavClick(tab.name,tab.link)" >{{ tab.name }}</li>
        </ul>
        <div class="hidden max-[800px]:block" @click="toggleNavMobileShow">
            <FontAwesomeIcon class="text-2xl" icon='fa-bars' />
        </div>
    </nav>
    <!-- 手機版nav -->
    <transition enter-active-class="transsition-transform duration-300 ease-out"
        leave-active-class="transition-transform duration-300 ease-in" enter-from-class="-translate-y-full"
        enter-to-class="translate-y-0" leave-from-class="translate-y-0" leave-to-class="-translate-y-full">
        <div v-show="isOpen" class="nav-mobile fixed top-0 left-0 w-full  bg-[#000] p-[5%] text-center"
            style="z-index: 10;">
            <ul class="flex gap-x-16 flex-col gap-4 mt-5 w-[100px] mx-auto">
                <li v-for="(tab, index) in tabs" :key="index" class="text-[#BBB7B7]"
                    :class="currentTab === tab.name ? 'actived' : ''" @click="handleNavClick(tab.name, tab.link)" >{{ tab.name }}</li>
            </ul>
            <div class="absolute top-[20%] right-[5%] rounded-full p-1" @click="toggleNavMobileShow">
                <FontAwesomeIcon class="text-2xl text-black" icon='fa-xmark' />
            </div>
        </div>
    </transition>
    <slot />
</template>

<style scoped lang='scss'>
nav,
.nav-mobile {
    background-color: white;
    border-bottom: 2px solid #000;

    ul {
        text-align: start;

        li {
            color: #969292;
            font-size: 18px;
            font-weight: 400;
            position: relative;
            cursor: pointer;

            &::after {
                content: '';
                width: 0px;
                height: 2px;
                background-color: #000;
                position: absolute;
                bottom: -2px;
                left: 0;
                border-radius: 50px;
                animation: slide-out .5s ease-in;
            }

            &:hover {
                color: #000;

                &::after {
                    content: '';
                    width: 25px;
                    height: 2px;
                    background-color: #000;
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    border-radius: 50px;
                    animation: slide-in .5s ease-in;
                }
            }
        }
    }
    .actived {
    color: #000;

    &::after {
        content: '';
        width: 25px;
        height: 2px;
        background-color: #000;
        position: absolute;
        bottom: -2px;
        left: 0;
        border-radius: 50px;
        animation: slide-in .5s ease-in;
    }
}
}

.nav-mobile {
    li {
        &::after {
                content: '';
                width: 0px;
                height: 2px;
                background-color: #000;
                position: absolute;
                bottom: -2px;
                left: 0;
                border-radius: 50px;
                animation: slide-out .5s ease-in;
            }
           
    }
}

@keyframes slide-in {
    from {
        width: 0;
    }

    to {
        width: 25px;
    }
}

@keyframes slide-out {
    from {
        width: 25px;
    }

    to {
        width: 0;
    }
}

</style>