//your JS code here. If requiredfunction
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// xyx ram apple 

function removeChar(str){
    str = str + " ";
    str = str.toLowerCase();
    str = str.replace(/ the | a | an /g, " ");
    return str.trim();
}
bands.sort((a,b)=>{

   if(removeChar(a) > removeChar(b)){
       return 1
    }
    else{
        return -1
    }

})

console.log(bands)