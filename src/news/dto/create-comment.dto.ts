import {IsNumber, IsString, IsPositive} from "class-validator";

export class CreateCommentDto {
    @IsNumber()
    @IsPositive()
    newsId: number;

    @IsString()
    text: string;
}
