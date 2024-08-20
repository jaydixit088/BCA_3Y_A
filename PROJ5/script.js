var students = {
    id: 101,        // number
    sname: "Jay", // string
    isPassed: true, // boolean
    img:"https://cdn-icons-png.flaticon.com/512/2784/2784461.png"
}

// console.log(students);

let show = `
<div style="text-align:center">
    <img src=${students.img} height="100px" width="100px">
    <h1 style="background:Tomato; color:white;">Student Name: ${students.sname}</h1><hr>
    <h2>ID: ${students.id}</h2>
    <h2>Passed: ${students.isPassed ? "Pass out": "Pursuing"}
</div>
`
document.write(show)