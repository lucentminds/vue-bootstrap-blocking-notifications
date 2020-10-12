<template>
   <div :class="`blocking-dialog-source --${this.visibility}`">
      <button class="btn btn-link btn-sm" v-if="visibility == 'hidden'" @click="on_show_source">show source</button>
      <div class="blocking-dialog-source__code alert alert-secondary" v-if="visibility == 'visible'">{{formatted_source}}</div>
   </div>
</template>

<script>
export default {
   props:{
      source: Object,
   },// /props{}

   data(){
      return {
         visibility: 'hidden',
      };
   },// /data()

   computed:{
      formatted_source(){
         if( !this.source ){
            return 'null';
         }

         return JSON.stringify( this.source, null, '   ' );
      },// /formatted_source()
   },// /computed{}

   methods:{
      on_show_source(){
         this.visibility = 'visible';
      },// /on_show_source()
   },// /methods{}

   mounted(){
   },// /mounted()
};
</script>

<style scoped>
.blocking-dialog-source__code
{
   white-space: pre;
   font-size: 0.8em;
   font-family: "Courier New", Courier, monospace;
}
</style>
