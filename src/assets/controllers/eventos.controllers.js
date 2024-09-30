import { eventos } from "../database/eventos.database.js";
import { Eventos } from "../models/eventos.models.js";
export const getEventos = (req, res) => {
	res.status(200).send(eventos);
};

export const createEventos = (req, res) => {

	const newEventos = req.body;

	const dadoFormartado = new Eventos(
		newEventos.name,
		newEventos.data,
		newEventos.local,
        newEventos.descricao,
	);

  eventos.push(dadoFormartado)

  res.status(201).send(`O Evento ${dadoFormartado.name} foi feito com sucesso!`)
};