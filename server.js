const express = require('express')
const app = express()


var  data = [
{
	id:12,
	title:" Demonitization of 500 & 1000 note",
	url:"https://thelogicalindian.com/"
},{
	id:12,
	title:" Demonitization of 500 & 1000 note",
	url:"https://abc.com"
}
];


app.get('/', (req, res) => {
	res.send('Install android app lin bellow ')
	});
	

app.get('/posts', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(data))
	});



//port
var port = process.env.PORT || 8080;


app.listen(port, () => console.log('Example app listening on port 3000!'))