import { ApiProperty } from '@nestjs/swagger';

export class CreateUserResponseDto {
  @ApiProperty({ example: 'user-123' })
  userId!: string;

  @ApiProperty({ example: 'User' })
  username!: string;

  @ApiProperty({ example: 'user@email.com' })
  email!: string;
}
