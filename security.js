class Security{

    counstructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style("background", 'white');

        this.button1 = createInput('Check')
        this.button1.position(100,120);
        this.button1.style("background", 'lightgrey');
       
        this.access2 = createInput("Code1")
        this.access2.position(700,190);
        this.access2.style("background", 'white');
       
        this.button2 = createInput('Check')
        this.button2.position(700,220);
        this.button2.style("background", 'lightgrey');

        this.access3 = createInput("Code1")
        this.access3.position(100,350);
        this.access3.style("background", 'white');

        this.button3 = createInput('Check')
        this.button3.position(100,380);
        this.button3.style("background", 'lightgrey');
    }



    display(){
        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(()=>{
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        })
    }
    }