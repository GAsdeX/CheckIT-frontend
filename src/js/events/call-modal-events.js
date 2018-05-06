// Import the EventBus.
var EventBus = require('../event-bus').EventBus;

// Listen for the i-got-clicked event and its payload.
EventBus.$on('callModal', function(clicked){
    console.log('Oh, thats nice. Its gotten clicks! :)')
});