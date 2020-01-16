<template>   
      <div>
         <vue-bootstrap-blocking-notifications></vue-bootstrap-blocking-notifications>
      </div>
</template>
<script>
export default {
   mounted(){
      this.blocking_notification_show( 'error', 'Oh noes!' );
      console.log( this.blocking_notification )
   }
}
</script>