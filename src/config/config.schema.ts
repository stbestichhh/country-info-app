import * as joi from 'joi';
import type { EnvParams } from '../shared/enums';

export const configSchema = joi.object<typeof EnvParams>({
  HOST: joi.string().hostname().optional().default('localhost'),
  PORT: joi.number().port().optional().default('9180'),
});
