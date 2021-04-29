import { Passenger } from './passenger.model';
import { Flight } from './flight.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ReservationService {
    private flightInfo:Flight;
    private passengerInfo:Passenger[];
    setFlight(newFlight:Flight)
    {
        this.flightInfo=newFlight;
    }

    getFlight()
    {
        return this.flightInfo;
    }

    setPassenger(passengers:Passenger[])
    {
        this.passengerInfo=passengers;
    }

    getPassenger()
    {
         return this.passengerInfo;
    }


}