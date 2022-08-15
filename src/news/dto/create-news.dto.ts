import {IsString, MinLength} from "class-validator";

export class CreateNewsDto {
    @IsString()
    title: string;

    @IsString()
    @MinLength(10)
    text: string;

    thumbnail: string;
}
