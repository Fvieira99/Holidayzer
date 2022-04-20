import holidays from "./data.js";
import express from "express";
import cors from "cors";

const date = new Date();
const app = express();

let filter;

app.listen(5000, () => {
	console.log("O servidor está funcionando");
});

app.use(cors());

app.get("/holidays", (request, response) => {
	response.send(holidays);
});

app.get("/is-today-holiday", (request, response) => {
	if (verifyHoliday()) {
		response.send(`Sim, hoje é ${filter[0].name}`);
	} else {
		response.send("Não, hoje não é feriado!");
	}
});

function verifyHoliday() {
	filter = holidays.filter(
		(holiday) => holiday.date === date.toLocaleDateString("en-us")
	);
	if (filter.length > 0) {
		return true;
	} else {
		return false;
	}
}
