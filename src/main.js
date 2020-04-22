import Vue from 'vue';
import Main from './Main';


class PluginStore {

   constructor (data = {}) {
      this.storeVM = Vue.observable(data);
   }
   
   get state () {
      return this.storeVM;
   }
}// /PluginStore()


const VueBootstrapBlockingNotifications = {

   install: function( Vue, options ){
      const o_settings = Object.assign( {
         tag_name: 'vue-bootstrap-blocking-notifications'
      }, options );

      Vue.component( o_settings.tag_name, Main );
      Vue.mixin({
         beforeCreate(){
            // Provide access to the plugin data.
            this.$blocking_notification_store = new PluginStore({
               name: Math.floor( Math.random() * 1000000 ),
               error: null,
               problem: null,
               wait: null,
               info: null,
               settings: null,
            });
         },// /beforeCreate()

         computed: {
            blocking_notification_data (){
               if( !this.$blocking_notification_store.state ){
                  return null;
               }

               if( this.$blocking_notification_store.state.error ){
                  return {
                     type: 'error',
                     message: this.$blocking_notification_store.state.error
                  };
               }
               
               if( this.$blocking_notification_store.state.problem ){
                  return {
                     type: 'problem',
                     message: this.$blocking_notification_store.state.problem
                  };
               }
               
               if( this.$blocking_notification_store.state.info ){
                  return {
                     type: 'info',
                     message: this.$blocking_notification_store.state.info,
                  };
               }

               if( this.$blocking_notification_store.state.wait ){
                  return {
                     type: 'wait',
                     message: this.$blocking_notification_store.state.wait
                  };
               }

               return null;
            },// /blocking_notification_data()

            blocking_notification_state (){
               return this.$blocking_notification_store.state;
            },// /blocking_notification_state()

            blocking_notification_shown(){
               const state = this.$blocking_notification_store.state;
               return state.wait || state.error || state.problem || state.info;
            },// /blocking_notification_shown()
         },

         methods: {
            blocking_notification_show( c_type, c_message, c_title ){
               const o_types = {
                  error: null,
                  problem: null,
                  wait: null,
                  info: null,
               };

               if( typeof c_type == 'object' ){
                  const o_options = c_type;
                  c_type = o_options.type;

                  if( c_type == 'info' ){
                     o_types[ c_type ] = {message: o_options.message, title: o_options.title || 'Notice'};
                  }
                  else{
                     o_types[ c_type ] = o_options.message;
                  }

                  this.$blocking_notification_store.state.request_options = o_options;
                  Object.assign( this.$blocking_notification_store.state, {
                     settings: o_options,
                  }, o_types );
                  return;
               }// /if()



               if( c_type == 'info' ){
                  o_types[ c_type ] = {message: c_message, title: c_title || 'Notice'};
               }
               else{
                  o_types[ c_type ] = c_message;
               }

               Object.assign( this.$blocking_notification_store.state, {
                  settings: {
                     message: c_message,
                     title: c_title,
                     type: c_type,
                  }
               }, o_types );
            },// /blocking_notification_show()

            blocking_notification_clear(){
               Object.assign( this.$blocking_notification_store.state, {
                  error: null,
                  problem: null,
                  wait: null,
                  info: null
               } );
            },// /blocking_notification_clear()
         }
      });
      
   }// /install()

};// /VueBootstrapBlockingNotifications{}

export default VueBootstrapBlockingNotifications;
