
let btn = document.querySelector('.choosen');
let result = document.querySelector('h3')

btn.addEventListener("click", choose_regex)

function choose_regex(e){
    result.textContent = " ";
    let expression = document.getElementById('exp_options').value;

    if(expression == "Choose an expression to validate........"){
        alert(`Choose an Option First`)
    }else{

        let input = prompt(`Enter ${expression} expression:`);

        if(input=="" ){
            alert("You need to enter a String ")
        }else if(input == null){     
        }else{

            let regex;
    
            switch (expression) {
                case 'Email':
                    regex = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/ ;
                    validate_exp(regex, input, expression)
                    break;
                case 'Phone Number (BD)':
                    regex = /^(\+)?(88)?01[0-9]{9}$/;
                    validate_exp(regex, input, expression)
                    break;
                case 'Post code':
                    regex = /^\d{4}$/;
                    validate_exp(regex, input, expression)
                    break;
                default:
                    result.textContent = 'Invalid expression type';
                    return;
            }

        }


    }


}


function validate_exp(regex, input, expression) {
    if(regex.test(input)) {
        result.className ="text-success";
        result.textContent=`"${input}" validates as "${expression}"`;
    }
    else {
        result.className ="text-danger";
        result.textContent=`"${input}" doesn't validates as "${expression}"`;
    }
} 