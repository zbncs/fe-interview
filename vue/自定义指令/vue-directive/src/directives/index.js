import focus from "./focus";
import color from './color'

const directives = {
  focus,
  color
}

export default {
  install(app, options) {
    Object.keys(directives).forEach(key => {
      app.directive(key, directives[key])
    })
    
  }
}
