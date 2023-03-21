export const nowTimeStamp = () => {
  var date=new Date();
fetch('http://worldtimeapi.org/api/timezone/Africa/Nairobi')
  .then(response => response.json())
  .then(data => date=data.datetime);
  return date.toLocaleString("sv-SE");
};
