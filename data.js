export function getDate() {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  }

  return today.toLocaleDateString("en-Au", options);
}


export default getDate;


