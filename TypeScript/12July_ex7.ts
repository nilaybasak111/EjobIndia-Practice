interface Sk2
{
    id:number,
    sub:string,
    desc:string,
    remarks:string[]
} 

// Using sk2 array of object type in arrtest
var arrtest:Sk2[] =[
   {id:10,sub:'maths',desc:'good',remarks:['good','avg']},
   {id:11,sub:'physics',desc:'excellent',remarks:['good','avg']},
   {id:12,sub:'history',desc:'very good',remarks:['good','avg']}
] 

arrtest.forEach((v:Sk2,index:number)=>{
    console.log(v.id+"   "+v.sub+"   "+v.desc+"   "+v.remarks);
})