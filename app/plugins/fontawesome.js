import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faBars, faXmark,faPlay,faEarthAmericas, faEnvelope} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false

library.add(faArrowRight,faBars, faXmark, faPlay,faEarthAmericas, faEnvelope)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('FontAwesomeIcon',FontAwesomeIcon);
})