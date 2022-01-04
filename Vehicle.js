var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, VehicleNumber, fuelType, fuelCapacity, cc) {
        console.log("I am Vehicle class");
    }
    Vehicle.prototype.displayMake = function () {
        console.log("Suzuki");
    };
    Vehicle.prototype.displayBasicInfo = function () {
        console.log('VehicleNumber:TN60Z1234', 'fuelType:Petrol', 'fuelCapacity:15', 'cc:150');
    };
    Vehicle.prototype.displayDetailInfo = function () {
    };
    return Vehicle;
}());
var TwoWheeler = /** @class */ (function (_super) {
    __extends(TwoWheeler, _super);
    function TwoWheeler(make, VehicleNumber, fuelType, fuelCapacity, cc, KickStartAvailable) {
        var _this = _super.call(this, make, VehicleNumber, fuelType, fuelCapacity, cc) || this;
        console.log("I am TwoWheeler class");
        return _this;
    }
    TwoWheeler.prototype.displayDetailInfo = function () {
        console.log('KickStartAvailable:YES');
    };
    return TwoWheeler;
}(Vehicle));
var FourWheeler = /** @class */ (function (_super) {
    __extends(FourWheeler, _super);
    function FourWheeler(make, VehicleNumber, fuelType, fuelCapacity, cc, AudioSystem, NoOfDoors) {
        var _this = _super.call(this, make, VehicleNumber, fuelType, fuelCapacity, cc) || this;
        console.log("I am FourWheeler class");
        return _this;
    }
    FourWheeler.prototype.displayMake = function () {
        console.log('Volvo');
    };
    FourWheeler.prototype.displayBasicInfo = function () {
        console.log('VehicleNumber:TN01BR9689', 'fuelType:Diesel', 'fuelCapacity:40', 'cc:1960');
    };
    FourWheeler.prototype.displayDetailInfo = function () {
        console.log('AudioSystem:Beats', 'NoOfDoors:5');
    };
    return FourWheeler;
}(Vehicle));
var t1 = new TwoWheeler('Suzuki', 'TN60Z1234', 'Petrol', 15, 150, 'YES');
t1.displayMake();
t1.displayBasicInfo();
t1.displayDetailInfo();
var t2 = new FourWheeler('Volvo', 'TN01BR9689', 'Diesel', 40, 1960, 'Beats', 5);
t2.displayMake();
t2.displayBasicInfo();
t2.displayDetailInfo();
