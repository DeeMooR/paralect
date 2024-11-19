import { z } from 'zod';

import dbSchema from './db.schema';

export const responseToVacancySchema = dbSchema
  .extend({
    company: z.string(),
    vacancy: z.string(),
    salaryRange: z.string(),
    responseStatus: z.string(),
    note: z.string(),
  })
  .strip();
