import { SetMetadata } from '@nestjs/common';

// export const Public = () => SetMetadata("type", "public");

export const Public = (...roles: string[]) => SetMetadata('role', roles);
