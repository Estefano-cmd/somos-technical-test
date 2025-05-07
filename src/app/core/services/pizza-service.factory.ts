import { environment } from 'src/environments/environment';
import { PizzaService } from './pizza.service';
import { PizzaLocalService } from './pizza-local.service';
import { PizzaFirebaseService } from './pizza-firebase.service';

export const PIZZA_SERVICE_PROVIDER = {
  provide: PizzaService,
  useClass: environment.useFirebase ? PizzaFirebaseService : PizzaLocalService
};
