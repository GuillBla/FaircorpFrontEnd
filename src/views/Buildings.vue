<template>
  <div class="buildings">
    <h1>Buildings</h1>
    <h2>List of buildings</h2>

    <ListBuildings type="buildings" />
    <p>
      <em>To see your changes, please click again on Load the buildings</em>
    </p>
    <GetById group="building" />
    <DeleteById group="building" />
    <CreateBuilding />
  </div>
</template>


<script>
import ListBuildings from "../components/ListBuildings.vue";
import GetById from "@/components/GetById.vue";
import DeleteById from "@/components/DeleteById.vue";
import CreateBuilding from "@/components/CreateBuilding.vue";

export default {
  name: "Buildings",
  components: {
    ListBuildings,
    GetById,
    DeleteById,
    CreateBuilding,
  },
};
</script>
