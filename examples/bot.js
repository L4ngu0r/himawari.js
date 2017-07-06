const himawari = require('../index');

function getNewDate() {
  const date = new Date();

  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${hours}h${minutes}`;
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
      console.log("Processing complete !");
    },
    error: function(e) {
      console.error("An error occured : ");
      console.log(e);
    },
    chunk: function (info) {
      console.log('Chunk complete : ', (info.part + '/' + info.total), '(' + ((info.part / info.total) * 100).toFixed(0) + '%' + ')');
    }
  });
}

setInterval(getHimawariImage, 30 * 60 * 1000);