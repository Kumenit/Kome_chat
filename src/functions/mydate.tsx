export const nowTime = () => {

  async function getCurrentDateTime() {
    const response = await fetch('https://worldtimeapi.org/api/timezone/Africa/Nairobi');
    const data = await response.json();
    return data.datetime;
  }


  return getCurrentDateTime; 
}
//i changed chat Header
// dates but make it to original
//messageform
//and made a new tsx file

  