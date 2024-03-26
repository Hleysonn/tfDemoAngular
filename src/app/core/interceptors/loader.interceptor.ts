import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.reportProgress) {
    const loaderService = inject(LoaderService);
    loaderService.appLoad(true);
    return next(req).pipe(finalize(() => {
      loaderService.appLoad(false);
    }));
  }
  return next(req);


};
