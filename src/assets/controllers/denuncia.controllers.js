import { denuncias } from "../database/denuncia.database.js";
import { Denuncia } from "../models/denuncia.models.js";
export const getDenuncias = (req, res) => {
	res.status(200).send(denuncias);
};

export const createDenuncia = (req, res) => {

	const newDenuncia = req.body;

	const dadoFormartado = new Denuncia(
		newDenuncia.name,
		newDenuncia.localizacao,
		newDenuncia.telefone,
        newDenuncia.descricao,
	);

  denuncias.push(dadoFormartado)

  res.status(201).send(`A denuncia ${dadoFormartado.name} foi feita com sucesso!`)
};