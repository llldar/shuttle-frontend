import Vue, { VNode } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const toPascalCase = (string: string): string => {
  return `${string}`
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(new RegExp(/\s+(.)(\w+)/, 'g'), ($1, $2, $3): string => `${$2.toUpperCase() + $3.toLowerCase()}`)
    .replace(new RegExp(/\s/, 'g'), '')
    .replace(new RegExp(/\w/), (s): string => s.toUpperCase());
};

const requireComponent = require.context(
  // Look for files in the current directory
  './components',
  // Do not look in subdirectories
  false,
  // Only include "Base" prefixed .vue files
  /Base\w+\.(vue)$/
);

requireComponent.keys().forEach((fileName): void => {
  // Get the component config
  const componentConfig = requireComponent(fileName);
  // Get the PascalCase version of the component name
  const componentName = toPascalCase(
    fileName
      // Remove the "./_" from the beginning
      .replace(/^\.\/_/, '')
      // Remove the file extension from the end
      .replace(/\.\w+$/, '')
  );

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});

// Create Vue instance
new Vue({
  // mount router
  router,
  // mount state store
  store,
  // use hyperscript engine to render for jsx/tsx support
  render: (h): VNode => h(App)
}).$mount('#app');
