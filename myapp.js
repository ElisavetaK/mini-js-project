let elements = document.querySelectorAll('.cssProperty');

let square = document.querySelector('#modify');

function set()
{
    
    for( let index = 0; index < elements.length; index++ )
    {
        let cssProperty = elements[ index ].getAttribute('id');
        
        let cssValue = elements[ index ].value;
        
        square.style[ cssProperty ] = cssValue;
    }
}

document.querySelector('#set').addEventListener('click',set);