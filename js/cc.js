

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
    