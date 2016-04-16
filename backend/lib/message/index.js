import zensend from 'zensend'

var client = new zensend.Client(process.env.ZENSEND);

export default function sendFormLink (number, body) => {
	client.sendSms({
	  originator: "FAC",
	  body: body,
	  number: number
	}, function(error, response) {
      console.log("error", error);
      console.log("response", response);
      console.log("message sent to " + number);
    })
}
