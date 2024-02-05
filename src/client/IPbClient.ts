import { IQueryClient } from './IQueryClient';
import { ITxClient } from './ITxClient';

export interface IPbClient extends ITxClient, IQueryClient {};
