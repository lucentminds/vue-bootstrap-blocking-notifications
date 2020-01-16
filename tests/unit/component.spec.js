/* global describe:false */
/* global expect:false */
/* global it:false */

import Vue from 'vue';
import { mount } from '@vue/test-utils';
import VueBootstrapBlockingNotifications from '@/main.js';
import ExampleComponent from './ExampleComponent.vue';
//import BlockingNotificationMain from '@/Main.vue';

Vue.use(VueBootstrapBlockingNotifications);


describe('blocking-notification.vue', () => {
   const c_type = 'error';
   const c_msg = 'Oh noes!';
   const wrapper = mount(ExampleComponent);


   it('renders a blocking notification', ( done ) => {
      wrapper.vm.$nextTick(() => {
         // console.log( wrapper.html() );
         // console.log( ':'+wrapper.text()+':', c_msg );
         // console.log( ':'+wrapper.text()+':', c_msg );
         // console.log( ':'+wrapper.text()+':', c_msg );
         // console.log( ':' );
         expect(wrapper.text()).toMatch( c_msg );
         done();
      });
   });


});
