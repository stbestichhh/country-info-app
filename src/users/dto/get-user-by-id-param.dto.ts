import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetUserByIdParamDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'user-id-123' })
  userId!: string;
}
