<template>
   <div class="blocking-notifications">
      parent_blocking_notification_data:{{parent_blocking_notification_data}}
      <blocking-dialog v-if="parent_blocking_notification_data" :data="parent_blocking_notification_data" 
      @ok="clear_blocking_parent_notification"></blocking-dialog>
   </div>
</template>

<script>
import BlockingDialog from './components/blocking-dialog';

export default {

   components: {
      BlockingDialog
   },// /components()

   computed:{
      parent_store(){
         return this.$parent.$blocking_notification_store;
      },// /parent_store()

      parent_blocking_notification_data(){
         return this.$parent.blocking_notification_data;
      },// /parent_blocking_notification_data()
   },// /computed{}

   methods: {
      clear_blocking_parent_notification(){
         // Determines the options that were used to create the notification.
         const o_settings = this.$parent.blocking_notification_state.settings;

         // Determines a clean clone of the original options.
         const o_settings_clone = JSON.parse( JSON.stringify( o_settings ) );

         this.$parent.blocking_notification_clear();
         
         if( o_settings.on_clear ){
            o_settings.on_clear( o_settings_clone );
         }

         this.$emit( 'clear', o_settings_clone );
      },// /clear_blocking_parent_notification()
   },// /methods{}

   mounted(){
      this.$emit( 'show' );
   },// /mounted()
};
</script>
