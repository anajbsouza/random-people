import { Request, Response } from "express";
import { createPeople } from "protocols/peopleProtocol";


export async function getPerson(req: Request, res: Response) {
    //pegar todas as pessoas do repositório
    //const people = await peopleRepository.getPeople()
    
    //const random = Math.random();
    //const randomId = Math.floor(random * people);

    //pegar a função do repositório que pega a pessoa pelo id
    //const people = await peopleRepository.getPersonByID(randomId)
    
    //res.send(person);
}

export async function createPerson(req: Request, res: Response) {
    const people = req.body as createPeople;
    // criar pessoas a partir do repositório
    res.sendStatus(201);
}

const peopleController = {
    getPerson,
    createPerson
}

export default peopleController;