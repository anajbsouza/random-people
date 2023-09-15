import { Request, Response } from "express";
import { People } from "protocols/peopleProtocol";
import { randomPersonService } from "services/people.service"


export async function getPerson(req: Request, res: Response) {
    const randomPerson: People[] = await randomPersonService();
    return res.status(200).send(randomPerson);
}

const peopleController = {
    getPerson
    
}

export default peopleController;