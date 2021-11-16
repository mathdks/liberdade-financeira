import Vue from 'vue'
import VTooltipPlugin from 'v-tooltip'

Vue.use(VTooltipPlugin, {
    themes: {
        calcfin: {
            $extend: 'tooltip',
            triggers: ['hover', 'click'],
            autoHide: false,
            placement: 'bottom',
        },
    },
})

import 'v-tooltip/dist/v-tooltip.css'