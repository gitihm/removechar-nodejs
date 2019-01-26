exports =  remove = (data) => {
    let newstr=""
    for(key in data.str){
        if(data.str[key]!=data.ch){
            newstr =newstr+data.str.substr(key--,1)
        }
    }
    return newstr
}