import type { PopulationDto } from '../../countries/dto/get-country-info-response.dto';

export interface PopulationAxiosResponse {
  data: { populationCounts: PopulationDto[] };
}
