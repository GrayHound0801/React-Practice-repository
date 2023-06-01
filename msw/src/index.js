import { worker } from './mocks/browser';
import { handlers } from './mocks/handlers';

if (process.env.NODE_ENV === 'development') {
  worker.start(...handlers);
}
