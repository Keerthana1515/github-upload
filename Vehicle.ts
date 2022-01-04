class Vehicle{
    constructor(make:string, VehicleNumber:string, fuelType:string, fuelCapacity:number, cc:number){
        console.log("I am Vehicle class");
    }
    displayMake(){
        console.log("Suzuki");
    }
    displayBasicInfo(){
        console.log('VehicleNumber:TN60Z1234','fuelType:Petrol','fuelCapacity:15','cc:150');
    }
    displayDetailInfo(){
        
    }
}
class TwoWheeler extends Vehicle{
    constructor(make:string, VehicleNumber:string, fuelType:string, fuelCapacity:number, cc:number, KickStartAvailable:string){
        super(make, VehicleNumber, fuelType, fuelCapacity, cc);
        console.log("I am TwoWheeler class");
    }
    displayDetailInfo(){
        console.log('KickStartAvailable:YES');
    }       
}
class FourWheeler extends Vehicle{
    constructor(make:string, VehicleNumber:string, fuelType:string, fuelCapacity:number, cc:number, AudioSystem:string, NoOfDoors:number){
        super(make, VehicleNumber, fuelType, fuelCapacity, cc);
        console.log("I am FourWheeler class");
    }
    displayMake(){
        console.log('Volvo');
    }
    displayBasicInfo(): void {
        console.log('VehicleNumber:TN01BR9689','fuelType:Diesel','fuelCapacity:40','cc:1960');
    }
    displayDetailInfo(){
        console.log('AudioSystem:Beats','NoOfDoors:5');
    }
}
const t1 = new TwoWheeler('Suzuki','TN60Z1234','Petrol',15,150,'YES');
t1.displayMake();
t1.displayBasicInfo();
t1.displayDetailInfo();
const t2 = new FourWheeler('Volvo','TN01BR9689','Diesel',40,1960,'Beats',5);
t2.displayMake();
t2.displayBasicInfo();
t2.displayDetailInfo();