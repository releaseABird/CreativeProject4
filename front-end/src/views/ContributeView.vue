<template>
<div class="contribute">
<h1>Upload your Sketchbook Pages Here!</h1>
<p>Show your creativity and growth!</p>
<div class="heading">

     <h2>Add a Sketchbook Page</h2>
   </div>
   <div class="add">
     <div class="form">
     <div class="text-stuff">
       <input v-model="title" placeholder="Title">
       <br>
       <input v-model="artist" placeholder="Artist">
       <br>
       <textarea v-model="desc" placeholder="Challenge Used/Description"></textarea>
       <br>
       </div>
       <input type="file" name="photo" @change="fileChanged">
       <button class="button3" @click="upload()">Upload</button>
     </div>
     <div class="upload" v-if="addItem">
       <h2>{{addItem.title}}</h2>
       <img :src="addItem.path" />
       <p>{{addItem.artist}}</p>
       <p>{{addItem.desc}}</p>
     </div>
   </div>
   <hr>

   <div class="heading">

     <h2>Edit/Delete an Item</h2>
   </div>
   <div class="edit">
     <div class="form">
       <input v-model="findTitle" placeholder="Search">
       <div class="suggestions" v-if="suggestions.length > 0">
         <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.title}}
         </div>
       </div>
     </div>
     <div class="upload" v-if="findItem">
       <input v-model="findItem.title">
       <input v-model="findItem.artist">
       <input v-model="findItem.desc">
       <p></p>
       <img :src="findItem.path" />
     </div>
     <div class="actions" v-if="findItem">
       <button @click="deleteItem(findItem)">Delete</button>
       <button @click="editItem(findItem)">Edit</button>
     </div>
   </div>

</div>
</template>

<style scoped>

.contribute{
display: flex;
flex-direction: column;

}
/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.button3{
background-image:none;
border: 1px solid #555555;
border-radius: 2px;
width: 100px;
height: 30px;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}

.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

.text-stuff{
  display:flex;
  flex-direction: column;
}
</style>


<script>
import axios from 'axios';
export default {
  name: 'ContributionPage',
  data() {
    return {
      title: "",
      file: null,
      addItem: null,
      items: [],
      findTitle: "",
      findItem: null,
      artist: "",
      desc: "",
    }
  },
  created() {
    this.getItems();
  },
  computed: {
    suggestions() {
      let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      return items.sort((a, b) => a.title > b.title);
    }
  },
  methods: {
    async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          title: this.findItem.title,
          artist: this.findItem.artist,
          desc: this.findItem.desc,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        console.log("uploading");
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/items', {
          title: this.title,
          artist: this.artist,
          desc: this.desc,
          path: r1.data.path
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
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
