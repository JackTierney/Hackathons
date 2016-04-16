import zensend  from 'zensend'

var client = new zensend.Client("Tw40TCl18EDda8eLW5hxMw");

export default function sendFormLink (numbers, body) => {
	client.sendSms({
	  originator: "FAC",
	  body: body,
	  numbers: numbers
	})
}
