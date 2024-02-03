let arr=[1,2,2,3,3,4];
let arr1=[];
let k=0;
for(let i=0;i<arr.length;i++)
{
      if(arr1.indexOf(arr[i]) === -1)
         arr1.push(arr[i]);
}
console.log(arr1);
