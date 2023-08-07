import focus from './focus';
import color from './color';

const directives = {
  focus,
  color
}

export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key]);
    })
  }
}







