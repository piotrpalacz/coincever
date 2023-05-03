export function convertDateFromIsoToRegular(isoDate) {
  let date = new Date(isoDate);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  switch (month) {
    case 1:
      return `Jan ${day}, ${year}`
    case 2:
      return `Feb ${day}, ${year}`
    case 3:
      return `Mar ${day}, ${year}`
    case 4:
      return `Apr ${day}, ${year}`
    case 5:
      return `May ${day}, ${year}`
    case 6:
      return `Jun ${day}, ${year}`
    case 7:
      return `Jul ${day}, ${year}`
    case 8:
      return `Aug ${day}, ${year}`
    case 9:
      return `Sep ${day}, ${year}`
    case 10:
      return `Oct ${day}, ${year}`
    case 11:
      return `Nov ${day}, ${year}`
    case 12:
      return `Dec ${day}, ${year}`
  
    default:
      return `Month`
  }
  
}