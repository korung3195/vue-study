import {
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onMounted,
    onUnmounted,
    onUpdated,
  } from "@vue/composition-api";

const useLifeCycle = (name) => {
    onBeforeMount(() => console.log("before mount : " + name));
    onMounted(() => console.log("mounted : " + name));
    onBeforeUpdate(() => console.log("before update : " + name));
    onUpdated(() => console.log("updated : " + name));
    onBeforeUnmount(() => console.log("before unmount : " + name));
    onUnmounted(() => console.log("unmount : " + name));
  };

export default useLifeCycle