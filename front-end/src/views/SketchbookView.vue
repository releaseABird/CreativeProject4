<template>
<div class="sketchbook">
<section class="image-gallery">
  <div class="image" v-for="item in items" :key="item.id">
    <h2>{{item.title}}</h2>
    <img :src="item.path" />
    <p>{{item.desc}}</p>
  </div>
</section>

</div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios';
export default {
  name: 'SketchBook',
  data() {
    return {
     items: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
