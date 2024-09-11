import { IBasicErrorResponse } from '@shared/utils/interfaces/http';

export interface ILoading {
  loading: boolean;
  success: boolean;
  error: IBasicErrorResponse | null;
}
