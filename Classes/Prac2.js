class complex{
    real = 1;
    img = 1;
    constructor(real, img)
    {
        this.real = real ? real : this.real;
        this.img = img ? img : this.img;
    }

    display()
    {
        console.log(`The Complex no is : ${this.real} + ${this.img}i `);        
    }
}

class oprComplex extends complex
{
    incrVal = 1;
    constructor(real, img, incr)
    {
        super(real, img);
        this.incrVal = incr ? incr : this.incrVal;
    }
    incrReal(incR)
    {
        this.real+=incR;
    }

    display()
    {
        super.display();
    }
}

const theCno = new complex(3,2);
theCno.display();

const theOprCno = new oprComplex(5, 7, 2);
theOprCno.display();
theOprCno.incrReal(5);
theOprCno.display();