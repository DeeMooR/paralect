import { z } from 'zod';

import dbSchema from './db.schema';

export const responseToVacancySchema = dbSchema
  .extend({
    company: z.string().trim().min(1, 'Required field'),
    vacancy: z.string().trim().min(1, 'Required field'),
    salaryRange: z.string().trim().min(1, 'Required field'),
    status: z.string().trim().min(1, 'Required field'),
    note: z.string().trim().min(1, 'Required field'),
  })
  .strip();

export const createResponseToVacancySchema = responseToVacancySchema.pick({
  company: true,
  vacancy: true,
  salaryRange: true,
  status: true,
  note: true,
});

export const updateResponseToVacancySchema = responseToVacancySchema.pick({
  company: true,
  vacancy: true,
  salaryRange: true,
  status: true,
  note: true,
});
