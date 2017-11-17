// # in-memory file system

// # create folder/file, write something to a file, read it, rename ...

// # mkdir("/a/b/c") => "/a/b/c"

// => # ls("/a/b" => return "c"

// # write("a/b/c/d", "hello") => read("")

var pathList = [];

function mkdir(path) {
    // ....
    pathList.push(path);
}

var ls = function (path) {
    var list = []; 
    for(var i =0;  i < pathList.length; i++){
        index = pathList[i].search(path);
        if(index>-1 && list.indexOf(pathList[i][path.length-1]) <0) {
                console.log()
                list.push(pathList[i][path.length+1]);
        }
    } 
    return list;
    // return like linux command
}

function rm(path) {
 // to remove a directory
 for(var i=0; i<pathList.length; i++){
     index = pathList[i].search(path); //search
    console.log(index,pathList[i], path)
     if(index>-1) { //do thing if it match
         if(pathList[i][path.length]) // /a/b(/)c a/b
             return console.log("Error"); 
         else {
             pathList[i] = pathList[i].slice(index,path.length-2) ;  /// index /a/b   /c 
             return pathList;
         }
     }
 }
}

mkdir('/a/b/c');
mkdir('/a/b/d');
console.log(pathList);
console.log(ls('/a/b'))
console.log(rm('/a/b/c'));
console.log('Final List',pathList);

function main(){
    var input = "hoc lap trinh can phai kien tri";
    var temp = [];
    var count = [];
    input.split(" ").map(function(word){
        word.split('').map(function(a){
            var n = temp.indexOf(a);
            if (n>-1){
                count[n] = count[n]+1;
            }
            else {
                    temp.push(a);
                    count.push(1);
                }
        })
    })
    console.log(temp,count);
}
main();
// Here is my app

// mkdir('/a/b/c');
// mkdir('/a/b/d');

// ls('/a/b') // print [c d]

// ls('/a') [b b]

// rm('/a/b/c'); 

// rm('/a/b'); // this must return an error.



