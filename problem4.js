var isPalindrome=(givenString)=>{
var reversedString=givenString.split('').reverse().join('')
   if(reversedString==givenString){
    console.log('True')
   }
else{
    console.log('False')
}
    
    }
    
    isPalindrome('1001001')
