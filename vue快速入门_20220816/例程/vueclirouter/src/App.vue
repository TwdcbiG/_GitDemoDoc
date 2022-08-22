<!-- <template>
  <div id="AppVueTemplate">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template> -->

<script>
import HelloWorld from './components/HelloWorld'
import img1Url from './assets/logo.png'

export default {
  name: 'AppVueExportDef',
  components: {
    HelloWorld
  }
  ,data(){
    return{
      Url1:img1Url,
      Url2:"../static/logo.png"
    }
  }
  // ,template:'<div id="AppVueTemplate"><img :src="Url1"><img src="../static/logo.png"><HelloWorld/></div>'
  ,template:'<div id="AppVueTemplate"><img :src="Url1"><img src="../static/logo.png"><router-view/><HelloWorld/></div>'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
