import zensend from 'zensend'

var client = new zensend.Client(process.env.ZENSEND);

export default function sendFormLink (number, body) => {
	client.sendSms({
	  originator: "FAC",
	  body: body,
	  number: number
	}, function(error, response) {
      if (error) {
        console.log("error", error);
      } else {
        console.log("message sent to " + number);
        console.log("response", response);
      }
    })
}
