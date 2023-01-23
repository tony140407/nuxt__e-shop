import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faThumbsUp as farThumbsUp } from '@fortawesome/free-regular-svg-icons'
import {
    faShop as fasShop,
    faCartShopping as fasCartShopping,
    faRightToBracket as fasRightToBracket,
} from '@fortawesome/free-solid-svg-icons'
import { faDiscord as fabDiscord } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fasShop, fasCartShopping, fasRightToBracket, farThumbsUp)

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})

// example usage:
// <ClientOnly>
//   <font-awesome-icon :icon="['far', 'hospital']" />
//   <font-awesome-icon :icon="['fas', 'bars']" />
// </ClientOnly>
