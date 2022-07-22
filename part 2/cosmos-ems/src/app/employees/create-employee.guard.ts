import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeGuard implements CanActivate {

  constructor(private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let depId :number=Number(route.paramMap.get("id"));

      if(depId % 2 ==0){
        alert('you have not permision to create a emplyee');
        this.route.navigate(["/home"])
      }
    return true;
  }
  
}
