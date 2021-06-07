const findMissingLetter = array =>
  String.fromCharCode(array[0].charCodeAt() + array.slice(1).findIndex((val, idx) => val.charCodeAt() !== array[idx].charCodeAt() + 1) + 1);

function findMissingLetter(array)
{
  return String.fromCharCode(
            array
              .map(letter => letter.charCodeAt(0))
              .find((code, i, arr) => i > 0 && code !== arr[i - 1] + 1)
            - 1
          )
}

function findMissingLetter(arr)
{
let  a=arr[0]==arr[0].toUpperCase()?'abcdefghijklmnopqrstuvwxyz'.toUpperCase():'abcdefghijklmnopqrstuvwxyz'
  return [...a].slice(a.indexOf(arr[0]),a.indexOf(arr[arr.length-1])).find((x,i)=>x!=arr[i])
}