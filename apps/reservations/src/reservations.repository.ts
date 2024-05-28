import { AbstractRepoistory } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { ReservationDocument } from "./models/reservation.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ReservationsRepository extends AbstractRepoistory<ReservationDocument> {
    protected readonly logger = new Logger(ReservationsRepository.name);

    constructor(@InjectModel(ReservationDocument.name) reservationModel: Model<ReservationDocument>) {
        super(reservationModel);
    }
}