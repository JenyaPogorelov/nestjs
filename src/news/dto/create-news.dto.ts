import {IsNotEmpty, IsString, IsUrl, MinLength} from "class-validator";

export class CreateNewsDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    @MinLength(10)
    text: string;


    thumbnail: string;
}
