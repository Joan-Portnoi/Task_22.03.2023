//צרו תוכנית בה המשתמש מזין את אורך צלעותיו של מלבן (2 צלעות)
//  "square" והתוכנית מדפיסה את שטח המלבן, אם שני הצלעות שוות הדפיסו את שטח המלבן בצירוף המילה
let Width = prompt(`Please enter the width:`)
let height = prompt(`Please enter the height:`)
if (Width === height) {
  console.log(
    `You created a square. The area of the square is: ${Width * height}`
  )
} else
  console.log(
    `You have created a rectangle. The area of the rectangle is: ${
      Width * height
    }`
  )

//צרו תוכנית בה המשתמש מזין את שנת הולדתו והתוכנית מדפיסה לו את גילו בקירוב בהנחה שהשנה היא השנה הנוכחית 2022
const ageCalc = function () {
  let birthYear = prompt(`please write your birth year`)
  return 2022 - birthYear
}

console.log(ageCalc())

//צרו תוכנית בה המשתמש מזין 6 פעמים מצרכים ומכניסה אותם לתוך מערך, צרו לולאה שעוברת על המערך ומדפיסה את הפריטים במערך בסדר הפוך..
const itemsArray = []
const numItems = 100

for (let i = 1; i <= numItems; i++) {
  let item = prompt(
    `We're going to make a shopping list. Please write your item number ${i}. If you are done with your shopping list, write "done" `
  )
  if (item.toLowerCase() === "done") {
    break
  } else if (itemsArray.includes(item)) {
    alert("This item has already been added to the list.")
    i--
    continue
  }
  itemsArray.push(item)
}

itemsArray.reverse()
console.log(itemsArray.join())

//צרו תוכנית שמקבלת מהמשתמש מספר מ1 עד 7, המספרים מייצגים את ימות השבוע, אם המשתמש הזין מספר המייצג את יום ראשון עד חמישי, הדפס לקונסול "Workday" אם המספר מייצג את ימי שישי ושבת הדפס לקונסול "Weekend"
/*
מה הבעיות שיכולות לעלות?
1. מה אם המשתמש הזין סטרינג או כל דבר שהוא לא מספר
2. מה אם המשתמש הזין מספר נמוך 1(פחות מראשון לא קיים)
3. מה אם השמתמש הזין מספר גדול מ7(יותר משבת לא קיים)
4. מה יקרה אחרי שהמשתמש טעה? צריך לתת לו עוד ניסיון
פיתרון:
*/
daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

let numberOfDay = prompt(
  `write a number from 1 to 7 that represents the day of the week `
)
while (
  isNaN(numberOfDay) ||
  Number(numberOfDay) > 7 ||
  Number(numberOfDay) <= 0
) {
  alert("this is not a valid number")
  numberOfDay = prompt(
    `write a number from 1 to 7 that represents the day of the week `
  )
}

numberOfDay -= 1 // הוספתי את זה כי אני רוצה ש-1 ייצג את ראשון, ולא-0

if (numberOfDay <= 4) {
  console.log(`its ${daysOfTheWeek[numberOfDay]}, go to work.`)
} else {
  console.log(`its ${daysOfTheWeek[numberOfDay]}, get some rest.`)
}

// צרו תוכנית בה אתם מקבלים 6 שמות מהמשתמש והכניסו אותם למערך, הדפיסו רק את השמות במיקום אי זוגי.
const numberOfNames = "6"
const names = []

for (let i = 0; i < numberOfNames; i++) {
  const name = prompt(`Write your ${i + 1} name`)
  names.push(name)
}
for (let i = 0; i < names.length; i++) {
  if (i % 2 !== 0) {
    console.log(names[i])
  }
}
