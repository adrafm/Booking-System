import { Type } from "class-transformer";
import { IsDate, IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateReservationDto {
    @IsDate()
    @Type(() => Date)
    startDate: Date;

    @IsDate()
    @Type(() => Date)
    endData: Date;

    @IsString()
    @IsNotEmpty()
    placeId: string;

    @IsString()
    @IsEmpty()
    invoiceId: string;
}
