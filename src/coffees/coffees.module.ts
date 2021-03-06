import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

/*
  class MockCoffeesService {}
  class ConfigService {}
  class DevelopmentConfigService {}
  class ProductionConfigService {}
*/

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS,
      useFactory: async (connection: Connection): Promise<string[]> => {
        return await Promise.resolve(['buddy brew', 'nescafe']);
      },
      inject: [Connection],
    },
    // {
    //   provide: CoffeesService,
    //   useValue: new MockCoffeesService(), // <-- mock implementation
    // }
    // {
    //    provide: ConfigService,
    //    useClass:
    //      process.env.NODE_ENV === 'development'
    //        ? DevelopmentConfigService
    //        : ProductionConfigService,
    //  },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
