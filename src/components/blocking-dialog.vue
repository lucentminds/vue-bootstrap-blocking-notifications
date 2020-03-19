<template>
   <div :class="`blocking-dialog blocking-dialog-${this.data.type}`">
      <div v-if="this.data.type == 'error'" class="alert alert-danger">{{ this.data.message }}</div>


      <div v-if="this.data.type == 'wait'">
         <div class="alert alert-primary">{{ this.data.message }}</div>

         <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" :aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
         </div>
      </div>


      <div class="--bordered" v-if="this.data.type == 'problem'">
         <div class="alert alert-danger">{{ this.data.message }}</div>

         <div class="blocking-dialog__btn-bar">
            <button class="btn btn-primary" v-on:click="on_click_ok">
               <i class="fas fa-check"></i>
               OK
            </button>
         </div>
      </div>


      <div class="--bordered" v-if="this.data.type == 'info'">
         <div class="alert alert-info">{{ this.data.message }}</div>
         {{ this.data.message }}

         <div class="blocking-dialog__btn-bar">
            <button class="btn btn-primary" v-on:click="on_click_ok">
               <i class="fas fa-check"></i>
               OK
            </button>
         </div>
      </div>


   </div>
</template>

<script>
export default {
   props:{
      data: Object
   },

   computed:{
      title(){
         return this.data.title ?this.data.title :'Notice';
      }
   },

   methods:{
      on_click_ok(){
         this.$emit( 'ok' );
      }
   }
}
</script>

<style scoped>

.blocking-dialog__btn-bar
{
   display: flex;
   justify-content: flex-end;
}

.--bordered
{
   border: 1px solid #cccccc;
   padding: 1em;
}

</style>
