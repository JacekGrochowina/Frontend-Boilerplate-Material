import { IBasicErrorResponse, ILoading } from '@shared/utils/interfaces';

export class ReducersCommonStates {
  static init(): ILoading {
    return {
      loading: false,
      success: false,
      error: null
    };
  }

  static loading(): ILoading {
    return {
      loading: true,
      success: false,
      error: null
    };
  }

  static success(): ILoading {
    return {
      loading: false,
      success: true,
      error: null
    };
  }

  static error(error: IBasicErrorResponse): ILoading {
    return {
      loading: false,
      success: false,
      error
    };
  }
}
