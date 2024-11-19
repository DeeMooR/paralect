import { z } from 'zod';

import { createResponseToVacancySchema, responseToVacancySchema, updateResponseToVacancySchema } from 'schemas';

export type ResponseToVacancy = z.infer<typeof responseToVacancySchema>;
export type CreateResponseToVacancyParams = z.infer<typeof createResponseToVacancySchema>;
export type UpdateResponseToVacancyParams = z.infer<typeof updateResponseToVacancySchema>;
