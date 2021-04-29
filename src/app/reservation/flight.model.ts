export class Flight{
    public  departure:string;
    public arrival:string;
    public  passengerNo:number;
 
     constructor(from:string,to:string,passNo:number){
         this.departure=from;
         this.arrival=to;
         this.passengerNo=passNo; 
     }
 
 }