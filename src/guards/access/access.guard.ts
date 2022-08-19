import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import {Reflector} from "@nestjs/core";

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
      context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('role', context.getHandler());
    console.log(roles);
    //Т.к. пока нету ролей возвращаю true
    return true;
  }
}