import { z } from 'zod';

import { responseToVacancySchema } from 'schemas';

export type ResponseToVacancy = z.infer<typeof responseToVacancySchema>;
