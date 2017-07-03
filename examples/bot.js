const himawari = require('../index');

function getNewDate() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}h${date.getMinutes()}`;
}

console.log(`Script launch at ${getNewDate()}`);

function getHimawariImage() {
  console.log('#### getHimawariImage ####');
  const imgDate = getNewDate();
  himawari({
    zoom: 1,
    outfile: `/earth/earth-${imgDate}.jpg`,
    date: 'latest',
    success: function() {
      console.log("Complete!");
      //process.exit();
    },
    error: function(e) {
      console.error("An error occured : ");
      console.log(e);
    },
    chunk: function (info) {
      console.log('COMPLETE', (info.part + '/' + info.total), '(' + ((info.part / info.total) * 100).toFixed(0) + '%' + ')');
    }
  });
}

setInterval(getHimawariImage, 30 * 60 * 1000);