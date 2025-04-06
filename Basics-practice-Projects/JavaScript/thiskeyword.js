const myInfo={
    name : "Deepak",
    age : 20 ,
    maths : 90 ,
    physics : 77 ,
    chem : 70 ,
    getAvgMark() {
        let result = (this.maths + this.physics + this.chem )/3 ;
        console.log(result);
     }

};