var obj = {
    name : " Khai",
    sayHello : function (param1 ,param2) {
        console.log(`Hello ${this.name}`);
        console.log("Param",param1,param2);
    }
}
obj.sayHello("Xin chao","2016");
obj.sayHello.call({name: "Trinh"},"Xin chao ","2017") //truyen tham so dang danh sach
obj.sayHello.apply({name: "A"},["Xin chao", "2018"]); //truyen tham so danh arrray