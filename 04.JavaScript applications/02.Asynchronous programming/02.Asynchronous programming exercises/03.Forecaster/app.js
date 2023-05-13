function attachEvents() {
  const btnSubmit = document.getElementById('submit');
  btnSubmit.addEventListener('click', getWeather);
  async function getWeather() {
    const response = await fetch(
      'http://localhost:3030/jsonstore/forecaster/locations'
    );
    console.log(response);
    const data = await response.json();
    console.log(data);

    const userLocation = document.getElementById('location').value;
    const forecastDiv = document.getElementById('forecast');

    data.forEach((element) => {
      if (element.name === userLocation) {
        const locationCode = element.code;

        const forecastToday = async () => {
          const response = await fetch(
            `http://localhost:3030/jsonstore/forecaster/today/${locationCode}`
          );
          const data = await response.json();
          console.log(data);

          let currentDiv = document.getElementById('current');
          forecastDiv.style.display = 'block';
          let div = document.createElement('div');
          div.classList.add('forecasts');
          currentDiv.appendChild(div);

          let span = document.createElement('span');
          span.classList.add('condition');
          span.classList.add('symbol');

          if (data.forecast.condition === 'Sunny') {
            span.innerHTML = `&#x2600;`;
          } else if (data.forecast.condition === 'Partly sunny') {
            span.innerHTML = `&#x26C5;`;
          } else if (data.forecast.condition === 'Overcast') {
            span.innerHTML = `&#x2601;`;
          } else if (data.forecast.condition === 'Rain') {
            span.innerHTML = `&#x2614;`;
          }

          div.appendChild(span);

          span = document.createElement('span');
          span.classList.add('condition');
          let newSpan = document.createElement('span');
          newSpan.classList.add('forecast-data');
          newSpan.textContent = data.name;
          span.appendChild(newSpan);

          newSpan = document.createElement('span');
          newSpan.classList.add('forecast-data');
          newSpan.innerHTML = `${data.forecast.low}&#176;/${data.forecast.high}&#176;`;
          span.appendChild(newSpan);

          newSpan = document.createElement('span');
          newSpan.classList.add('forecast-data');
          newSpan.textContent = data.forecast.condition;
          span.appendChild(newSpan);

          div.appendChild(span);
        };
        forecastToday();

        const forecastUpcoming = async () => {
          const response = await fetch(
            `http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`
          );
          const data = await response.json();
          console.log(data);

          let currentDiv = document.getElementById('upcoming');
          forecastDiv.style.display = 'block';
          let div = document.createElement('div');
          div.classList.add('forecast-info');
          currentDiv.appendChild(div);

          let span = document.createElement('span');
          span.classList.add('upcoming');

          data.forecast.forEach((obj) => {
            let spanSymbol = document.createElement('span');
            spanSymbol.classList.add('symbol');

            if (obj.condition === 'Sunny') {
              spanSymbol.innerHTML = `&#x2600;`;
            } else if (obj.condition === 'Partly sunny') {
              spanSymbol.innerHTML = `&#x26C5;`;
            } else if (obj.condition === 'Overcast') {
              spanSymbol.innerHTML = `&#x2601;`;
            } else if (obj.condition === 'Rain') {
              spanSymbol.innerHTML = `&#x2614;`;
            }

            span.appendChild(spanSymbol);

            let spanInfo = document.createElement('span');
            spanInfo.classList.add('forecast-data');
            spanInfo.innerHTML = `${obj.low}&#176;/${obj.high}&#176;`;
            span.appendChild(spanInfo);

            spanInfo = document.createElement('span');
            spanInfo.classList.add('forecast-data');
            spanInfo.innerHTML = obj.condition;

            span.appendChild(spanInfo);
            div.appendChild(span);

            span = document.createElement('span');
            span.classList.add('upcoming');
          });
        };
        forecastUpcoming();
      }
    });
  }
}

attachEvents();
