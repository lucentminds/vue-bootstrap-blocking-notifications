# vue-bootstrap-blocking-notifications
Vue plugin to make it easy to add bootstrap styled alerts as blocking notifications for your project.

## Install
```shell
yarn add https://github.com/lucentminds/vue-bootstrap-blocking-notifications
```

or

```shell
npm install --save https://github.com/lucentminds/vue-bootstrap-blocking-notifications
```


## Useage
Import and use the plugin. Make sure the bootstrap css is included somewhere in your project too.
```js
// Import bootstrap css.
import 'bootstrap/dist/css/bootstrap.css';

// Import plugin.
import VueBootstrapBlockingNotifications from 'vue-bootstrap-blocking-notifications';

// Use plugin.
Vue.use(VueBootstrapBlockingNotifications);
```

Add the tag wherever you want to see the blocking notifications.
```html
<vue-bootstrap-blocking-notifications></vue-bootstrap-blocking-notifications>
```

Create a notification from your Vue component using the global function. Notification types are `error`, `problem`, and `wait`.
```js
   this.blocking_notification_show( 'wait', 'Wait for it...');
   this.blocking_notification_show( 'problem', 'You need to fix something!');
   this.blocking_notification_show( 'error', 'Oh noes!');
   this.blocking_notification_show( 'info', 'Oh noes!', {title: 'My notice'});
```

## Custom tag name

You do not have to use the full `vue-bootstrap-blocking-notifications` html tag name to make this work. Simply define your own tag name when you use the plugin like this...

```js
...

// Use plugin.
Vue.use(VueBootstrapBlockingNotifications,{
   tag_name: 'my-notifications'
});
```

Now you can use your custom tag called `my-notifications` like so...
```html
<my-notifications></my-notifications>
```

## Methods

   ### `blocking_notification_show( c_type, c_message )`
   Shows a blocking notification on the current component.
   ```js
   this.blocking_notification_show( 'type string', 'message string' );
   ```

   ### `blocking_notification_clear()`
   Clears blocking notifications on the current component.
   ```js
   this.blocking_notification_clear();
   ```

## Events

   ### `@clear`
   Triggered when a component's notification is cleared.
   ```html
   <vue-bootstrap-blocking-notifications @clear="on_clear"/>
   ...
   on_clear(){
      console.log( 'The notification was removed!' );
   }
   ```

   ### `@show`
   Triggered when a component's notification is shown.
   ```html
   <vue-bootstrap-blocking-notifications @show="on_show"/>
   ...
   on_show(){
      console.log( 'The notification was shown!' );
   }
   ```

## Options
```js
this.blocking_notification_show({
   message: 'This is my notification message.',
   on_clear: ( o_request ) => {
      alert('Closed!');
   },
   source: {desc:'Show formatted json code for errors or problems.' },
   title: 'This is my notification title if I am an "info" type.',
   type: 'error|problem|wait|info'
});
```