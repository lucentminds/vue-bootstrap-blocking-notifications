<template>
   <div class="blocking-notifications">
      <blocking-dialog v-if="parent_blocking_notification" :data="parent_blocking_notification" 
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
      parent_blocking_notification(){
         return this.$parent.blocking_notification_data;
      }
   },

   methods: {
      clear_blocking_parent_notification(){
         this.$parent.blocking_notification_clear();
         this.$emit( 'clear' );
      },
   },
   mounted(){
      this.$emit( 'show' );
   }
}
</script>
