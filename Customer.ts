class Customer {
    // Fields
    private name: string;
    private address: string;
    private mobile: string;
  
    // Constructor
    /*constructor(name: string, address: string, mobile: string) {
      this.name = name;
      this.address = address;
      this.mobile = mobile;
    }*/
    constructor(value: string){
      var a:string[]=value.split(",");
      console.log(a[0]);
      this.name = a[0];
      this.address = a[1];
      this.mobile = a[2];
    }
    display(): void {
      console.log("Name :" + this.name);
      console.log("Address :" + this.address);
      console.log("Mobile :" + this.mobile);
      var b:string[]=["ABCD","EFGH","qrst"];
      console.log(b[2]);
      for (var i of b){
        console.log(i);
      }
    }
  }
  // Object creation
  let obj1 = new Customer("Krishna,BDK,1234589762");
  obj1.display();