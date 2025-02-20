      //! 1
function boolToWord( bool ){
    return bool ? "Yes":"No"
   }
    //! 2
function removeChar(str){
    return str.slice(1,-1)
       
};
    //! 3
const stringToNumber = function(str){
    return Number(str)
}
    //! 4
function noSpace(str) {
    return str.replace(/\s/g,'')
}
    //! 5
function sum (numbers) {
    return numbers.reduce((acc, num) => acc + num, 0)
}