import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class AxiosService {
  private readonly logger = new Logger(AxiosService.name);

  constructor(private readonly httpService: HttpService) {}

  public async get<T>(url: string): Promise<T> {
    try {
      const response = this.httpService.get<T>(url);
      const responseData = await lastValueFrom(response);

      return responseData.data;
    } catch (error) {
      this.logger.error(`get: ${error}`);
      throw this.handleError(error);
    }
  }

  public async post<T>(url: string, data?: any): Promise<T> {
    try {
      const response = this.httpService.post<T>(url, data);
      const responseData = await lastValueFrom(response);

      return responseData.data;
    } catch (error) {
      this.logger.error(`post: ${error}`);
      throw this.handleError(error);
    }
  }

  private handleError(error: any): HttpException {
    if (error instanceof AxiosError) {
      return new HttpException(error.message, error.response!.status);
    }

    return new InternalServerErrorException();
  }
}
