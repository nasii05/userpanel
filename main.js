let one = document.querySelector('.one')
let display = document.querySelector('#display')
let details = document.querySelector('#details')
let admin = document.querySelector('#admin')
let body = document.querySelector("body")
let display2 = document.querySelector('#display2')
let display3 = document.querySelector('#display3')
let display4 = document.querySelector('#display4')
let display5 = document.querySelector('#display5')
let display6 = document.querySelector('#display6')
let display7 = document.querySelector('#display7')
let display8 = document.querySelector('#display8')
let display9 = document.querySelector('#display9')

const users = [{
    profile:"./images/img1.jfif",
    id: 1,
    firstName: "Terry",
    lastName: "Medhurst",
    maidenName: "Smitham",
    age: 50,
    gender: "male",
    email: "atuny0@sohu.com",
    photo:"./images/img1.jfif"

},
{
    profile:"./images/img2.png",
    id: 2,
    firstName: "Sheldon",
    lastName: "Quigley",
    maidenName: "Cole",
    age: 5,
    gender: "male",
    email: "Cole0@sohu.com",
    photo:"./images/img2.png"
} ,{
    profile:"./images/img3.jfif",
    id: 3,
    firstName: "Alison",
    lastName: "Schultz",
    maidenName: "Franecki",
    age: 20,
    gender: "female",
    email: "jtreleven5@nhs.uk",
    photo:"./images/img3.jfif"
}
,{
    profile:"./images/img4.jfif",
    id: 4,
    firstName: "Mavis",
    lastName: "Schultz",
    maidenName: "Yundt",
    age: 22,
    gender: "male",
    email: "kmeus4@upenn.edu",
    photo:"./images/img4.jfif"
}
,{
    profile:"./images/img11.jfif",
    id: 5,
    firstName: "Oleta",
    lastName: "Abbott",
    maidenName: "Wyman",
    age: 31,
    gender: "female",
    email: "dpettegre6@columbia.edu",
    photo:"./images/img11.jfif"
}
,{
    profile:"./images/img6.jfif",
    id: 6,
    firstName: "Ell",
    lastName: "Mueller",
    maidenName: "Durgan",
    age: 18,
    gender: "female",
    email: "ggude7@chron.com",
    photo:"./images/img6.jfif"
},
{
    profile:"./images/img7.png",
    id: 7,
    firstName: "Alen",
    lastName: "Muel",
    maidenName: "Dur",
    age: 55,
    gender: "male",
    email: "ge7@chron.com",
    photo:"./images/img7.png"
},
{
    profile:"./images/img8.jfif",
    id: 8,
    firstName: "mia",
    lastName: "mue",
    maidenName: "mind",
    age: 23,
    gender: "female",
    email: "mia@chron.com",
    photo:"./images/img8.jfif"
},
{
    profile:"./images/img11.jfif",
    id: 9,
    firstName: "Anna",
    lastName: "loft",
    maidenName: "lofty",
    age: 38,
    gender: "female",
    email: "Anna@chron.com",
    photo:"./images/img11.jfif"
},
{
    profile:"./images/img12.jfif",
    id: 10,
    firstName: "Eric",
    lastName: "eller",
    maidenName: "Dope",
    age: 28,
    gender: "male",
    email: "Eric@chron.com",
    photo:"./images/img12.jfif"
},
]

users.map((user)=>{
let imagediv = document.createElement('div')
let textdiv = document.createElement('div')
let  btn = document.createElement('button')
let profilepic = document.createElement('img')
profilepic.id="profile"
profilepic.src=user.profile
let h1 = document.createElement('h1')
h1.id="proname" 
h1.innerText=user.firstName
imagediv.appendChild(profilepic)
btn.id="button"
textdiv.appendChild(h1)


btn.appendChild(imagediv).appendChild(textdiv)

btn.onclick=()=>{
    let imgs = document.querySelector(".images")
    imgs.src=user.photo
     display.innerText = "Name: "+user.firstName
     display2.innerText = "id:"+ user.id
     display3.innerText = "lastname:"+user.lastName
     display4.innerText = "age:" + user.age
     display5.innerText = "Maidenname: "+user.maidenName
     display6.innerText = "Email:"+ user.email
     display7.innerText = "gender:"+ user.gender
}
one.appendChild(btn)
})



