//your JS code here. If requiredfunction
function removeChar(str){
	str=str.toLowerCase()
	str=str.replaceAll(" the "," ")
	str=str.replaceAll(" a "," ")
	str=str.replaceAll(" an "," ")
	return str
}
bands.sort((a,b)=>{
	if(removeChar(a)>removeChar(b)){
		return 
	}
	else{
		return 
	}
})