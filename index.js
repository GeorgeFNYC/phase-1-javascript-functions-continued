// code your solution here
function saturdayFun (param = 'roller-skate') {
    return `This Saturday, I want to ${param}!`
};

function mondayWork (objective = 'go to the office') {
    return `This Monday, I will ${objective}.`;
};
// function wrapAdjective (adjTwo = '*') {
//     (function (adj = 'special') {
//         const prompt = wrapAdjective("%")("a dedicated programmer");
//         return prompt
//     });
//     return `You are ${adjTwo}!`
// }


function wrapAdjective(start = "*") {
    return function (word = "special") {
      return `You are ${start}${word}${start}!`;
    };
  }
  
 