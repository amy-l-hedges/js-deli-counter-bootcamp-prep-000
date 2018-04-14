var katzDeliLine = []

function takeANumber(katzDeliLine) {
  katzDeliLine.push(katzDeliLine.length+1)
  return ("Welcome, you are number " + katzDeliLine.length)
}

<<<<<<< HEAD
function nowServing(katzDeliLine) {
 if (katzDeliLine.length > 0){
   var next = katzDeliLine.shift();
   return "Currently serving " + next +"."
 } else {
 return "There is nobody waiting to be served!"}
}


function currentLine(katzDeliLine) { 
  var whosNext = []
  if (katzDeliLine.length === 0){return "The line is currently empty."
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      whosNext.push(" " + (i+1) + ". " + katzDeliLine[i])}
      return "The line is currently:" + whosNext
    }
}
=======
function nowServing() {
 if (katzDeliLine.length > 0){
   var next = katzDeliLine.shift;
   return ("Currently serving " + next)
 } else {
 return ("There is nobody waiting to be served!")}
}
>>>>>>> e0169f9f0b503523a956597ba79e27fb650d982b
