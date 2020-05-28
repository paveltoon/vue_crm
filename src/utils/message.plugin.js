import M from 'materialize-css';

export default {
  install(Vue) {
    Vue.prototype.$message = (text) => {
      M.toast({
        html: text,
      });
    };

    Vue.prototype.$error = (text) => {
      M.toast({
        html: `[ERROR]: ${text}`,
      });
    };
  },
};
