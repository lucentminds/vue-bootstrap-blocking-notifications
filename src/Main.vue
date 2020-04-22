<template>
   <div class="blocking-notifications">
      <blocking-dialog v-if="parent_blocking_notification_data" :data="parent_blocking_notification_data" 
      @ok="clear_blocking_parent_notification"></blocking-dialog>
   </div>
</template>

<script>
import BlockingDialog from './components/blocking-dialog';

export default {

   components: {
      BlockingDialog
   },

   computed:{
      parent_store(){
         return this.$parent.$blocking_notification_store;
      },
      parent_blocking_notification_data(){
         return this.$parent.blocking_notification_data;
      }
   },// /computed{}

   methods: {
      clear_blocking_parent_notification(){
         // Determines the options that were used to create the notification.
         const o_settings = JSON.parse( JSON.stringify( this.$parent.blocking_notification_state.settings ) );
         this.$parent.blocking_notification_clear();
         this.$emit( 'clear', o_settings );
      },
   },// /methods{}

   mounted(){
      this.$emit( 'show' );
   }
}
</script>
