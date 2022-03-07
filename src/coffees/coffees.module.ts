import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService],
  imports: [
    MongooseModule.forFeature([{ name: Coffee.name, schema: CoffeeSchema }]),
  ],
})
export class CoffeesModule {}
