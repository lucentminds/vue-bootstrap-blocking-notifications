<template>
   <div :class="`blocking-dialog blocking-dialog-${data.type} ${border_class}`">
      <div v-if="is_problem_or_error">
         <div class="alert alert-danger">{{data.message}}</div>
         <source-view :source="data.source" v-if="data.source"></source-view>
      </div>

      <div v-if="data.type == 'wait'">
         <div class="alert alert-primary">{{data.message}}</div>

         <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" :aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
         </div>
      </div>


      <div v-if="data.type == 'info'">
         <div class="alert alert-info">{{title}}</div>
         {{data.message}}
      </div>

      <div class="blocking-dialog__btn-bar" v-if="has_buttons">
         <button class="btn btn-primary" v-if="has_ok_button" v-on:click="on_click_ok">
            <i class="fas fa-check"></i>
            OK
         </button>
      </div>
   </div>
</template>

<script>
import SourceView from './source-view';

export default {
   components:{
      SourceView,
   },// /components{}

   props:{
      data: Object
   },// /props{}

   computed:{
      border_class(){
         if( ['info','problem'].indexOf( this.data.type ) > -1 ){
            return '--bordered';
         }

         return '';
      },// /border_class()

      is_problem_or_error(){
         return ['error','problem'].indexOf( this.data.type ) > -1;
      },// /is_problem_or_error()

      has_buttons(){
         return this.has_ok_button || this.has_report_button;
      },// /has_buttons()

      has_ok_button(){
         return ['info','problem'].indexOf( this.data.type ) > -1;
      },// /has_ok_button()

      has_report_button(){
         return this.data.report;
      },// /has_report_button()

      title(){
         return this.data.title ?this.data.title :'Notice';
      },// /title()
   },// /computed{}

   methods:{
      on_click_ok(){
         this.$emit( 'ok' );
      },// /on_click_ok()
   },// /methods{}
};
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

.btn-light
{
   border: 1px solid #cccccc;
}

</style>
