import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import Tag from "element-plus/es/components/tag/index";
import Button from "element-plus/es/components/button/index";
import Dialog from "element-plus/es/components/dialog/index";
import Select from "element-plus/es/components/select/index";
import Popover from "element-plus/es/components/popover/index";
import AButton from "ant-design-vue/es/button";
import ASelect from "ant-design-vue/es/select";
import AModal from "ant-design-vue/es/modal";
import APopover from "ant-design-vue/es/popover";
import "element-plus/es/components/button/style/css";
import "element-plus/es/components/tag/style/css";
import "element-plus/es/components/dialog/style/css";
import "element-plus/es/components/select/style/css";
import "element-plus/es/components/popover/style/css";
import "ant-design-vue/es/style/index.css";
import "ant-design-vue/es/button/style/index.css";
import "ant-design-vue/es/select/style/index.css";
import "ant-design-vue/es/modal/style/index.css";
import "ant-design-vue/es/popover/style/index.css";
import "./index.css";

import globalConfig from '@opentiny/vue-renderless/common/deps/popup-manager'

// 需要判断是否在子应用当中
if (window.__POWERED_BY_WUJIE__) {
  // 子应用中可以通过window.parent获取主应用的window
  globalConfig.viewportWindow = window.parent
}

createApp(App)
  .use(Tag)
  .use(Button)
  .use(Dialog)
  .use(Select)
  .use(Popover)
  .use(AButton)
  .use(ASelect)
  .use(AModal)
  .use(APopover)
  .use(router)
  .mount("#app");
