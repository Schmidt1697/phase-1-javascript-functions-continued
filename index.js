// code your solution here
function saturdayFun(activity){

    if (activity){
        return `This Saturday, I want to ${activity}!`

    }else {
        return 'This Saturday, I want to roller-skate!'
    };
}

const mondayWork = function(work){
    if (work){
        return `This Monday, I will ${work}.`

    }else {
        return 'This Monday, I will go to the office.'
    };
}

const wrapAdjective = function(wrap){
    function innerFunction(adjective){
       return adjective ? `You are ${wrap}${adjective}${wrap}!` : 'You are special!';
       
    }
    return innerFunction;
}

