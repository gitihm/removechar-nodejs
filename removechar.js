var str = "ab1234bc"
var ch = "b"
var newstr = ""

var str1 ={ 
    str : "abcdbe",
    ch : 'b',
    newstr :''
}

remove = () => {
    let i=0,j=0
    for(key in str1.str){
        if(str1.str[key]!=str1.ch){
            str1.newstr =str1.newstr+str1.str.substr(key--,1)
            //console.log(str1.str[key]) 
        }
    }
    console.log(str1.str)
    console.log(str1.newstr)
    
}
remove()