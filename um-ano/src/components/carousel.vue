<template>
  <div class="january__carousel">
    <div>
      <h3>Dia {{ dia }} - Foto: {{ photo }} de {{ max }}</h3>
    </div>
    <div class="january__contentbox">
      <button class="leftbutton" @click="previousImg">
        <img :src="require(`@/assets/${colorLeft}`)" alt="leftButton" />
      </button>
      <div class="content">
        <img :src="require(`@/assets/${folder}/${photo}.jpeg`)" alt="img" />
      </div>
      <button class="rightbutton" @click="nextImg">
        <img :src="require(`@/assets/${colorRight}`)" alt="rightButton" />
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'carouselComponent',
  data() {
    return {
      photo: 1
    }
  },
  props: {
    dia: String,
    blue: String,
    folder: String,
    max: String
  },
  methods: {
    nextImg() {
      if (parseInt(this.max) != this.photo) {
        this.photo += 1
        document.getEle
      } else {
        this.photo = 1
      }
    },
    previousImg() {
      if (this.photo != 1) {
        this.photo -= 1
      } else {
        this.photo = this.max
      }
    }
  },
  setup(props) {
    const createBlue = ref(props.blue)

    let colorRight = ref('iconRightPink.png')
    let colorLeft = ref('iconLeftPink.png')

    if (createBlue.value == 'true') {
      colorRight = ref('iconRightBlue.png')
      colorLeft = ref('iconLeftBlue.png')
    }

    return {
      createBlue,
      colorRight,
      colorLeft
    }
  }
}
</script>

<style lang="scss" scoped>
.leftbutton img {
  border-radius: 50%;
  &:hover {
    transition: 200ms;
    filter: brightness(80%);
  }
  &:active {
    filter: brightness(120%);
  }
}

.rightbutton {
  border-radius: 50%;

  &:hover {
    transition: 200ms;
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(110%);
  }
}
</style>
