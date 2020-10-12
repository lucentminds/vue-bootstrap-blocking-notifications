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
         tag_name: 'vue-bootstrap-blocking-notifications',
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
                  return this.$blocking_notification_store.state.error;
               }
               
               if( this.$blocking_notification_store.state.problem ){
                  return this.$blocking_notification_store.state.problem;
               }
               
               if( this.$blocking_notification_store.state.info ){
                  return this.$blocking_notification_store.state.info;
               }

               if( this.$blocking_notification_store.state.wait ){
                  return this.$blocking_notification_store.state.wait;
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
         },// /computed()

         methods: {
            blocking_notification_show( c_type, c_message, o_options ){
               const o_settings = {
                  message: null,
                  on_clear: null,
                  source: null,
                  title: null,
                  type: null,
               };

               const o_types = {
                  error: null,
                  problem: null,
                  wait: null,
                  info: null,
               };


               if( typeof c_type == 'string' ){
                  o_settings.type = c_type;
                  o_settings.message = c_message;
                  Object.assign( o_settings, o_options );
               } else if( typeof c_type == 'object' ){
                  Object.assign( o_settings, c_type );
               }
               
               o_types[ o_settings.type ] = Object.assign({}, o_settings );
               Object.assign( this.$blocking_notification_store.state, {
                  settings: Object.assign({}, o_settings ),
               }, o_types );
            },// /blocking_notification_show()

            blocking_notification_clear(){
               Object.assign( this.$blocking_notification_store.state, {
                  error: null,
                  problem: null,
                  wait: null,
                  info: null,
               } );
            },// /blocking_notification_clear()
         },// /methods{}
      });
      
   },// /install()

};// /VueBootstrapBlockingNotifications{}

export default VueBootstrapBlockingNotifications;
