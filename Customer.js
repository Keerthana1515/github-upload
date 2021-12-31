var Customer = /** @class */ (function () {
    // Constructor
    /*constructor(name: string, address: string, mobile: string) {
      this.name = name;
      this.address = address;
      this.mobile = mobile;
    }*/
    function Customer(value) {
        var a = value.split(",");
        console.log(a[0]);
        this.name = a[0];
        this.address = a[1];
        this.mobile = a[2];
    }
    Customer.prototype.display = function () {
        console.log("Name :" + this.name);
        console.log("Address :" + this.address);
        console.log("Mobile :" + this.mobile);
        var b = ["BCDE", "ADTH", "qrst"];
        console.log(b[2]);
        for (var _i = 0, b_1 = b; _i < b_1.length; _i++) {
            var i = b_1[_i];
            console.log(i);
        }
    };
    return Customer;
}());
// Object creation
var obj1 = new Customer("Keerthi,CPT,7346369834683");
obj1.display();
