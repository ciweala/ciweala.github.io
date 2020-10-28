function convertRestaurantsToCategories(restaurantList) {
  // process your restaurants here!
  
  return list;
}

function makeYourOptionsObject(datapointsFromRestaurantsList) {
  // set your chart configuration here!
  return canvasJSConfigObject;
} 

function runThisWithResultsFromServer(jsonFromServer) {
  console.log('jsonFromServer', jsonFromServer);
  sessionStorage.setItem('restaurantList', JSON.stringify(jsonFromServer)); // don't mess with this, we need it to provide unit testing support
  // Process your restaurants list
  // Make a configuration object for your chart
  // Instantiate your chart

}
const chart = new CanvasJS.Chart('chartContainer', {
  animationEnabled: true,
  
  title:{
    text:'Fortune 500 Companies by Country'
  },
  axisX:{
    interval: 1
  },
  axisY2:{
    interlacedColor: 'rgba(1,77,101,.2)',
    gridColor: 'rgba(1,77,101,.1)',
    title: 'Number of Companies'
  },
  data: [{
    type: 'bar',
    name: 'companies',
    axisYType: 'secondary',
    color: '#014D65',
    dataPoints: [
      { y: 3, label: 'Sweden' },
      { y: 7, label: 'Taiwan' },
      { y: 5, label: 'Russia' },
      { y: 9, label: 'Spain' },
      { y: 7, label: 'Brazil' },
      { y: 7, label: 'India' },
      { y: 9, label: 'Italy' },
      { y: 8, label: 'Australia' },
      { y: 11, label: 'Canada' },
      { y: 15, label: 'South Korea' },
      { y: 12, label: 'Netherlands' },
      { y: 15, label: 'Switzerland' },
      { y: 25, label: 'Britain' },
      { y: 28, label: 'Germany' },
      { y: 29, label: 'France' },
      { y: 52, label: 'Japan' },
      { y: 103, label: 'China' },
      { y: 134, label: 'US' }
    ]
  }]
});
chart.render();
document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray();
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
    .catch((err) => {
      console.log(err);
    });
});