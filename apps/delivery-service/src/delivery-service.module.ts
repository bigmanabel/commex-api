import { Module } from '@nestjs/common';
import { DeliveryServiceController } from './delivery-service.controller';
import { DeliveryServiceService } from './delivery-service.service';
import { DeliveriesModule } from './deliveries/deliveries.module';

@Module({
  imports: [DeliveriesModule],
  controllers: [DeliveryServiceController],
  providers: [DeliveryServiceService],
})
export class DeliveryServiceModule {}
