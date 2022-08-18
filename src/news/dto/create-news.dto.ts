import {IsNotEmpty, IsString, MinLength} from "class-validator";

export class CreateNewsDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    title: string;

    @IsString()
    @MinLength(10)
    text: string;

    thumbnail: string[];
}