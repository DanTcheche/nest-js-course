import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  // @Type(() => Number) not needed because of enableImplicitConversion
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;
}
