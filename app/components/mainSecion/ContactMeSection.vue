<script setup lang="ts">
const { $emailjs } = useNuxtApp();
const config = useRuntimeConfig();

const name = ref('');
const mail = ref('');
const subtitle = ref('')
const content = ref('')

const resetInputsVal = () => {
    name.value = ''
    mail.value = ''
    subtitle.value = ''
    content.value = ''
}
const sendMail = () => {
    $emailjs.send(
    config.public.EMAILJS_SERVICE_ID,
    config.public.EMAILJS_TEMPLATE_ID,
    {   
        subject: subtitle.value,
        name: name.value,
        email: mail.value,
        title:subtitle.value ,
        time: new Date(),
        content: content.value,
    }
    ).then(
          () => {
            window.alert('傳送成功！✅');
            resetInputsVal();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
}

onMounted(()=> {
  

})
</script>

<template>
   <section class="px-[10%] py-[5%] max-[1050px]:p-[5%]" id="Contact-Me">
    <div class="flex max-w-[1500px] mx-auto max-[1050px]:flex-col gap-12" >
        <div class="w-[50%] max-[1050px]:w-full" data-aos="zoom-in-down">
            <div class="relative ml-[20%] mt-[20%] max-[1050px]:mt-[5%] max-[1050px]:mx-auto max-[1050px]:text-center ">
                <h3 class="text-[60px] absolute -left-[10%] max-[1050px]:static max-[1050px]:mb-[10px]">Contact Me.</h3>
                <img src="~/assets/images/contact-me-image.webp" alt="" class="max-[1050px]:mx-auto">
                <img src="~/assets/images/header-arrow-image.webp" alt="箭頭圖片" class="absolute rotate-90 top-[110%] right-4 max-[1050px]:w-[150px] max-[1050px]:-right-10" >
            </div>
        </div>
        <div class="pl-[5%] w-[45%] max-[1050px]:w-full" data-aos="zoom-in-left">
            <h3 class="text-[60px]">Let’s Work<br />Together!</h3>
            <div class="flex gap-x-[5%] flex-wrap items-center">
                <label for="user_name" class="w-[45%]">
                    <div class="flex items-center gap-x-2 mb-2">
                        <img src="~/assets/images/user-icon.webp" alt="使用者圖示">
                        名字
                    </div>
                    <input type="text" id="user_name" placeholder="請輸入姓名" class="w-full border-[2px] border-[#000] p-2 outline-none" v-model="name">
                </label>
                <label for="user_email" class="w-1/2">
                    <div class="flex items-center gap-x-2 mb-2">
                        <img src="~/assets/images/mail-icon.webp" alt="郵件圖示">
                        信箱
                    </div>
                    <input type="text" id="user_email" placeholder="請輸入電子信箱" class="w-full border-[2px] border-[#000] p-2 outline-none" v-model="mail">
                </label>
                <label for="user_subtitle" class="w-full mt-[5%]">
                    <div class="flex items-center gap-x-2 mb-2">
                        <img src="~/assets/images/document-icon.webp" alt="文件圖示">
                        主旨
                    </div>
                    <input type="text" id="user_subtitle" placeholder="請輸入主旨" class="w-full border-[2px] border-[#000] p-2 outline-none" v-model="subtitle">
                </label>
                <label for="user_message" class="w-full mt-[5%]">
                    <div class="flex items-center gap-x-2 mb-2">
                        <img src="~/assets/images/message-icon.webp" alt="訊息圖示">
                        內容
                    </div>
                    <textarea id="user_message" placeholder="請輸入訊息" class="w-full border-[2px] border-[#000] p-2 outline-none" rows="6" v-model="content"></textarea>
                </label>
                <div class="w-full text-center mt-[5%]">
                    <button @click="sendMail" class="bg-black text-white p-3 w-1/2 rounded-lg border border-[2px] border-black hover:bg-white hover:text-black" type="button">Sent Message</button>
                </div>
            </div>
        </div>
        </div>
   </section>
</template>

<style scoped lang='scss'>
section {
    width: 100%;
    background-color:#F6F5F4;
    button{
        &:hover {
            box-shadow: 4px 5px 0 #000;
        }
    }
    input,
    textarea {
        &:focus {
            box-shadow: 4px 5px 0 #000;
        }
    }
}



</style>