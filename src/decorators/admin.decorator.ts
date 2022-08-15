import { SetMetadata } from '@nestjs/common';

export const Admin = (...roles: string[]) => SetMetadata('role', roles);
// export const Admin = () => SetMetadata("type", "admin");
