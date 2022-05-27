import { Request, Response, NextFunction } from 'express';

export default class ValidateRoutesEntries {
  public static validateScheduleTask = (req: Request, res: Response, next: NextFunction): Response | void => {
    try {
      const { name, date, time, description } = req.body;
      if (!name || !date || !time || !description) return res.status(402).json({ message: 'Payload required' });
      if (
        typeof name !== 'string'
        || typeof date !== 'string'
        || typeof time !== 'string'
        || typeof description !== 'string'
      ) return res.status(402).json({ message: 'Payload attributes type not supported' });
      next();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  };
}
