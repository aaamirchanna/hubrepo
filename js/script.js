let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

let mainVid = document.querySelector('.main-video');

document.querySelectorAll('.course-3 .box .video video').forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});

document.querySelector('#close-vid').onclick = () =>{
    mainVid.classList.remove('active');
}


/* calculator fucntion*/
function valueRendererSalary (name,val) {
    name.innerText = new Intl.NumberFormat().format(Math.round(val))
}

function taxCalclulatorSalary (val) {
    // 1
    if (val <= 600000) return 0;

    // 2

    if (val > 600000 && val <= 1200000 ) {
        const curr = val - 600000;
        return (curr * 5 / 100)
    }
    
    // 3

    if (val > 1200000  && val <= 1800000 ) {
        const curr = val - 1200000;
        return (30000 + (curr * 10 / 100))
    }

    // 4

    if (val > 1800000 && val <= 2500000) {
        const curr = val - 1800000;
        return (90000 + (curr * 15 / 100))
    }

    // 5

    if (val > 2500000 && val <= 3500000 ) {
        const curr = val - 2500000;
        return (195000 + (curr * 17.5 / 100))
    }

    // 6

    if (val > 3500000  && val <= 5000000 ) {
        const curr = val - 3500000;
        return (370000  + (curr * 20 / 100))
    }

    // 7

    if (val > 5000000  && val <= 8000000 ) {
        const curr = val - 5000000;
        return (670000  + (curr * 22.5 / 100))
    }

    // 8

    if (val > 8000000  && val <= 12000000 ) {
        const curr = val - 8000000 ;
        return (1345000  + (curr * 25 / 100))
    }

    // 9

    if (val > 12000000  && val <= 30000000 ) {
        const curr = val - 12000000;
        return (2345000  + (curr * 27.5 / 100))
    }

    // 10

    if (val > 30000000  && val <= 50000000 ) {
        const curr = val - 30000000;
        return (7295000  + (curr * 30 / 100))
    }

    // 11

    if (val > 50000000  && val <= 75000000 ) {
        const curr = val - 50000000;
        return (13295000  + (curr * 32.5 / 100))
    }


    // 12

    if (val > 75000000  ) {
        const curr = val - 75000000;
        return (21420000  + (curr * 35 / 100))
    }

}

function onChangeHandleSalary () {
    const input = Number(document.getElementById('salary_main_tax_info_input').value);
    const Monthly_Income =  document.getElementById("salary_Monthly_Income");
    const Monthly_Tax = document.getElementById("salary_Monthly_Tax");
    const Salary_After_Tax = document.getElementById("salary_Salary_After_Tax");
    const Yearly_Income = document.getElementById("salary_Yearly_Income");
    const Yearly_Tax = document.getElementById("salary_Yearly_Tax");
    const Yearly_Income_After_Tax = document.getElementById("salary_Yearly_Income_After_Tax");

    // valueRenderer(Monthly_Income, `${input * 1.2 / 100}`)
    
    const yearly = input * 12;

    const tax_yealy =  taxCalclulatorSalary (yearly);


    valueRendererSalary(Monthly_Income, `${yearly / 12}`);

    valueRendererSalary(Monthly_Tax, `${tax_yealy / 12}`);

    valueRendererSalary(Salary_After_Tax, `${(yearly / 12) - (tax_yealy / 12) }`);

    valueRendererSalary(Yearly_Income, `${yearly}`);

    valueRendererSalary(Yearly_Tax, `${tax_yealy}`);

    valueRendererSalary(Yearly_Income_After_Tax, `${(yearly) - (tax_yealy)}`);

}


function valueRendererRental(name, val) {
    name.innerText = new Intl.NumberFormat().format(Math.round(val))
}

function taxCalclulatorRental(val) {
    // 1
    if (val <= 300000) return 0;

    // 2

    if (val > 300000 && val <= 600000) {
        const curr = val - 300000;
        return (curr * 5 / 100)
    }

    // 3

    if (val > 600000 && val <= 2000000) {
        const curr = val - 600000;
        return (15000 + (curr * 10 / 100))
    }

 

    // 4

    if (val > 2000000) {
        const curr = val - 2000000;
        return (155000 + (curr * 25 / 100))
    }

}

function onChangeHandleRental() {
    const input = Number(document.getElementById('rental_main_tax_info_input').value);
    const Monthly_Income = document.getElementById("rental_Monthly_Income");
    const Monthly_Tax = document.getElementById("rental_Monthly_Tax");
    const Salary_After_Tax = document.getElementById("rental_Salary_After_Tax");
    const Yearly_Income = document.getElementById("rental_Yearly_Income");
    const Yearly_Tax = document.getElementById("rental_Yearly_Tax");
    const Yearly_Income_After_Tax = document.getElementById("rental_Yearly_Income_After_Tax");

    // valueRenderer(Monthly_Income, `${input * 1.2 / 100}`)

    const yearly = input * 12;

    const tax_yealy = taxCalclulatorRental(yearly);

    valueRendererRental(Monthly_Income, `${yearly / 12}`);

    valueRendererRental(Monthly_Tax, `${tax_yealy / 12}`);

    valueRendererRental(Salary_After_Tax, `${(yearly / 12) - (tax_yealy / 12)}`);

    valueRendererRental(Yearly_Income, `${yearly}`);

    valueRendererRental(Yearly_Tax, `${tax_yealy}`);

    valueRendererRental(Yearly_Income_After_Tax, `${(yearly) - (tax_yealy)}`);

}

// 

function valueRendererBusiness (name,val) {
    name.innerText = new Intl.NumberFormat().format(Math.round(val))
}

function taxCalclulatorBusiness (val) {
    
    // 1
    if (val <= 400000) return 0;

    // 2

    if (val > 400000 && val <= 600000) {
        const curr = val - 400000;
        return (curr * 5 / 100)
    }

    // 3

    if (val > 600000 && val <= 1200000) {
        const curr = val - 600000;
        return (10000 + (curr * 10 / 100))
    }

    // 4

    if (val > 1200000 && val <= 2400000) {
        const curr = val - 1200000;
        return (70000 + (curr * 15 / 100))
    }

    // 

    if (val > 2400000 && val <= 3000000) {
        const curr = val - 2400000;
        return (250000 + (curr * 20 / 100))
    }

    // 6

    if (val > 3000000 && val <= 4000000) {
        const curr = val - 3000000;
        return (370000 + (curr * 25 / 100))
    }

    // 7

    if (val > 4000000 && val <= 6000000) {
        const curr = val - 4000000;
        return (620000 + (curr * 30 / 100))
    }


    if (val > 6000000) {
        const curr = val - 6000000;
        return (1220000 + (curr * 35 / 100))
    }

}

function onChangeHandleBusiness () {
    const input = Number(document.getElementById('business_main_tax_info_input').value);
    const Monthly_Income =  document.getElementById("business_Monthly_Income");
    const Monthly_Tax = document.getElementById("business_Monthly_Tax");
    const Salary_After_Tax = document.getElementById("business_Salary_After_Tax");
    const Yearly_Income = document.getElementById("business_Yearly_Income");
    const Yearly_Tax = document.getElementById("business_Yearly_Tax");
    const Yearly_Income_After_Tax = document.getElementById("business_Yearly_Income_After_Tax");

    // valueRenderer(Monthly_Income, `${input * 1.2 / 100}`)
    
    // const yearly = input * 12;

    const yearly = input;

    const tax_yealy =  taxCalclulatorBusiness (yearly);

    // valueRenderer(Monthly_Income, `${yearly / 12}`);

    // valueRenderer(Monthly_Tax, `${tax_yealy / 12}`);

    // valueRenderer(Salary_After_Tax, `${(yearly / 12) - (tax_yealy / 12) }`);

    valueRendererBusiness(Yearly_Income, `${yearly}`);

    valueRendererBusiness(Yearly_Tax, `${tax_yealy === input ? 0 : tax_yealy }`);

    valueRendererBusiness(Yearly_Income_After_Tax, `${(yearly) - (tax_yealy)}`);

}

/*function myunction(){
    const x = document.getElementById("MYID");
    if (x.style.display === "none"){
        x.style.display = "block";
    }else {
        x.style.display = "none"
    }
  
}
*/

function add(){
   const d = document.createElement('addnew').innerHTML;
   const i = document.createElement('MYID').innerHTML;
    d.appendChild(i);
    document.getElementById('MYID').appendChild(d);
}

