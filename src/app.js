
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'

import './js/main.js'
import './sass/style.sass'

library.add(faCheck, faTimes, faArrowRight)
dom.watch()
