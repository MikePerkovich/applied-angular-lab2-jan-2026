import { HttpHandler } from 'msw';
import authHandler from './auth/loggedInHandler';
import resourceHandler from './resources/baseSampleHandler';
import tasksHandlers from './tasks/handler';

export const handlers: HttpHandler[] = [...authHandler, ...resourceHandler, ...tasksHandlers];
