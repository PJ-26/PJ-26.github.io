function objectValues (data){
    var array = [];
    
    for (var key in data){
         array.push(data[key]);
    }
    return array;
}

function keysToString(obj){
    
    var string = (Object.keys(obj)).join(" ");
    
    return string;
}

function valuesToString(obj){
    
  var array = [];
  
  for (var key in obj){
        
        if (typeof obj[key] === 'string'){
           array.push(obj[key]);
        } 
     }
  return array.join(" ");
  
}

function arrayOrObject(data){
    
    if (Array.isArray(data))
        return 'array';
    else if (typeof data === 'object')
        return 'object';
        
}

function capitalizeWord(string){
    
    return string[0].toUpperCase() + string.slice(1);
}

function capitalizeAllWords(string){
    
    var splitString = string.split(" ");
    
  for(var i = 0; i < splitString.length; i++){
        
       splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
        }
  return splitString.join(" ");
}

function welcomeMessage(obj){
    
    return "Welcome " + obj.name.charAt(0).toUpperCase() + obj.name.slice(1) + "!";
    
}

function profileInfo(obj){
    
    return obj.name.charAt(0).toUpperCase() + obj.name.slice(1) + " is a " + obj.species.charAt(0).toUpperCase() + obj.species.slice(1);
}

function maybeNoises(obj){
    
    if (obj.hasOwnProperty('noises')){
         if(obj.noises.length == 0)
           return "there are no noises"
         else if (obj.noises.length > 0)
            return obj.noises.join(" ");
        }
     else
        return "there are no noises";
}

function hasWord(string,word){
    
    var count = 0;
    string = string.split(" ");
    for (var i = 0; i < string.length; i++){
        if (word === string[i])
            count += 1;
    }
    if (count > 0)
        return true;
    else 
        return false;
}

function addFriend(name,obj){
    
    obj.friends.push(name);
    return obj;
}

function isFriend(name,obj){
  
if(Array.isArray(obj.friends) && obj.hasOwnProperty("friends")) {
    for(var i = 0; i < obj.friends.length; i++) {
      if(name === obj.friends[i]) {
        return true;  
      }
    }    
  }  
 return false;   
} 

function nonFriends(name,arr){
    
    var nameList = [];
    var result = [];
    var current = null;
    for(var i=0; i<arr.length; i++){
        if(name === arr[i].name){
            current = arr[i];
        }else{
            nameList.push(arr[i].name);
        }
    }

    if(current === null){
        return nameList;
    }

    for(var i=0; i<nameList.length; i++){
        if(current.friends.indexOf(nameList[i]) == -1){
            result.push(nameList[i]);
        }
    }

    return result;
}

function updateObject(obj,key,value){
   console.log(key,value);
   console.log(obj);
   
   obj[key] = value;
   
   console.log(obj);
   console.log(" ");
   return obj;
}

function removeProperties(obj,array){
    
    for(var i = 0; i < array.length; i++ ){
       
            delete obj[array[i]];
        }
      
  return obj;
}



function dedup(array){
    
    var array2 = [];
    
    for (var i = 0; i < array.length; i++){
        if(array2.includes(array[i])){
          
        } 
       else 
        array2.push(array[i]);
  
    }
  return array2;
}