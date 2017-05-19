window.onload = function() {
    var keys        = document.getElementsByTagName('button');

    // var detailValue = detail.innerHTML,
    //     result      = document.getElementById('result-value');

    //     detail.innerHTML = '';
    //     result.innerHTML = '0';
    
    for(var i=0; i<keys.length; i++){

        keys[i].onclick = function() {
            // console.log(this.innerHTML);

            var operators = ['/','*','-','+','%'];

            var keyValue    = this.innerHTML,
                detail      = document.getElementById('detail'),
                detailValue = detail.innerHTML,
                result      = document.getElementById('result-value');

            switch (keyValue) {
                case 'C' :
                    detail.innerHTML = '';
                    result.innerHTML = '0';
                    break;
                case '/' :
                case '*' :
                case '-' :
                case '+' :
                case '%' :
                    var lastChar = detail.innerHTML[detail.innerHTML.length - 1];
                    if(operators.indexOf(lastChar) == -1){
                        detail.innerHTML += this.innerHTML;
                    }
                    break;
                case '=' :
                    result.innerHTML = eval(detail.innerHTML);
                    break;
                default :
                    detail.innerHTML += this.innerHTML; 
                    break;
            
            }

            // detail.innerHTML += this.innerHTML;

        }
    }
}