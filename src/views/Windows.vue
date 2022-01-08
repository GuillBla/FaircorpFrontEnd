<template>
  <div class="windows">
    <h1>Windows</h1>

    <h2>List of windows</h2>
    <ListWindows type="windows" />
    <p>
      <em>To see your changes, please click again on Load the windows</em>
    </p>
    <GetById group="window" />
    <Switch group="window" />
    <DeleteById group="window" />
    <CreateWindow />
  </div>
</template>

<script>
import ListWindows from "../components/ListWindows.vue";
import GetById from "@/components/GetById.vue";
import Switch from "@/components/Switch.vue";
import DeleteById from "@/components/DeleteById.vue";
import CreateWindow from "@/components/CreateWindow.vue";

export default {
  components: {
    ListWindows,
    GetById,
    Switch,
    DeleteById,
    CreateWindow,
  },
};
</script>