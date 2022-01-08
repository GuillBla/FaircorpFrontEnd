<template>
  <div class="heaters">
    <h1>Heaters</h1>
    <h2>List of heaters</h2>

    <ListHeaters type="heaters" />
    <p><em>To see your changes, please click again on Load the heaters</em></p>
    <GetById group="heater" />
    <Switch group="heater" />
    <DeleteById group="heater" />
    <CreateHeater />
  </div>
</template>


<script>
import ListHeaters from "../components/ListHeaters.vue";
import GetById from "@/components/GetById.vue";
import Switch from "../components/Switch.vue";
import DeleteById from "@/components/DeleteById.vue";
import CreateHeater from "@/components/CreateHeater.vue";

export default {
  name: "Heaters",
  components: {
    ListHeaters,
    GetById,
    Switch,
    DeleteById,
    CreateHeater,
  },
};
</script>
