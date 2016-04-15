import zensend  from 'zensend'

	var client = new zensend.Client("Tw40TCl18EDda8eLW5hxMw");



  export default {
    path: '/sendSms',
    method: 'GET',
    handler: (response, reply) => {
      client.sendSms({
    	  originator: "SPINTOWIN",
    	  body: "Hello Jack, Elias and Taz, this is a test message",
    	  numbers: ["447732955369","447415583356","447789623006"]
    	}, function(error, response) {});

    }
  }
