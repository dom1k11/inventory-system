import type { Request, Response } from 'express';

export function controller(
  handler: (req: Request, res: Response) => Promise<any>,
  name = 'unnamed',
) {
  return async function (req: Request, res: Response) {
    try {
      const data = await handler(req, res);

      if (data !== undefined && !res.headersSent) {
        res.json(data);
      }

    } catch (err) {
      console.error(`Controller error ${name}`, err);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  };
}
