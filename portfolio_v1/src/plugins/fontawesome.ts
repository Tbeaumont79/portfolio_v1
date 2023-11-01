import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons' // Importez les icônes de marques
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab) // Ajoutez les icônes de marques à la bibliothèque

export { FontAwesomeIcon }
