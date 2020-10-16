import { parseISO } from 'date-fns';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Visit from '../../typeorm/models/Visit';

class VisitController {
    public async create(request: Request, response: Response): Promise<Response>{
        const { orphanage_id, date } = request.body;
        const newDate = parseISO(date);
        const visitRepository = getRepository(Visit);

        const visit = visitRepository.create({ orphanage_id, date: newDate });

        await visitRepository.save(visit);

        const result = await visitRepository.find(visit);
        return response.status(201).json(result);
    }
}

export default VisitController;