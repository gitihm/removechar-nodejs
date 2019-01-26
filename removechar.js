var str = "ab1234bc"
var ch = "b"
var newstr = ""

remove = () => {
    let i=0,j=0
    for(key in str){
        if(str[key]!=ch){
            newstr =newstr+str.substr(key--,1)
            console.log(str[key]) 
    }
    console.log(str)
    console.log(newstr)
    }
}

remove()