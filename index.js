// code your solution here
/* Test Notes to remember:
- function called saturdayFun."This Saturday, I want to ....!"
*/

function saturdayFun(activity){
if (activity) {
    return `This Saturday, I want to ${activity}!`;
    } else {
        return `This Saturday, I want to roller-skate!`;
    
    }
}
// defines mondayWork function expression as specified//
const mondayWork = function (monWorking) {
    if (monWorking) {
        return `This Monday, I will ${monWorking}.`;
        } else {
            return `This Monday, I will go to the office.`;
        
        }

    };
    /* defines wrapAdjective function according to the specification
    - when initialized with '||' creates a function that, when called, 
    -  wraps an adjective in a highlight: */

function wrapAdjective(showEmotion = "*"){
   const description = function (desWord = "special") {
       return `You are ${showEmotion}${desWord}${showEmotion}!`;
    };
    return description;
   
} 
/* This is interesting how "Immediately invoked function expression" work */