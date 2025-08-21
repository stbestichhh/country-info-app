import { ApiProperty } from '@nestjs/swagger';

export class GetUserByIdParamDto {
  @ApiProperty({ example: 'user-id-123' })
  userId!: string;
}
