function WeatherCalculator(event){

    {
        event.preventDefault()
    }
    let temp = document.querySelector('#temperature').value

switch (true) {
        case temp < 0:
        title = "Freezing cold"
        break;

        case temp >= 0 &&  temp < 10:
        title = "Cold"
        break;

        case temp >=10 &&  temp <20:
        title = "Cool"
        break;
        
        case temp >=20 && temp <30:
        title = "Warm"
        break;
         
        case temp >=30 &&  temp < 40:
        title = "Hot"
        break;
        
        case temp >=40 &&  temp < 50:
        title = "So Hot"
        break;
            
    default:
        title = "Something gone wrong" 
        break;
}

    document.querySelector('#title').innerHTML = title
    document.querySelector('#explanation').innerHTML = explanation

}