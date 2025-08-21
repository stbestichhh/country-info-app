import * as joi from 'joi';
import type { EnvParams } from '../shared/enums';

export const configSchema = joi.object<typeof EnvParams>({
  HOST: joi.string().hostname().optional().default('localhost'),
  PORT: joi.number().port().optional().default('9180'),
  DATE_NAGER_URL: joi.string().uri().required(),
  COUNTRIESNOW_URL: joi.string().uri().required(),
  POSTGRES_HOST: joi.string().hostname().required(),
  POSTGRES_PORT: joi.number().port().required(),
  POSTGRES_USER: joi.string().required(),
  POSTGRES_PASSWORD: joi.string().required(),
  POSTGRES_DB: joi.string().required(),
});
