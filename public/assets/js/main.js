

//1. XHR DEMO
// const XHR = new XMLHttpRequest();
// xhr.open('GET', "../assets/data/content.json")
// xhr.send();

// xhr.addEventListener('load', function(){
//     try {
//         console.log("XHR response: ", this.responseText);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// })

//2. FETCH DEMO
// fetch ("../assets/data/content.json")
//     .then(Response => Response.json())
//     .then(data => console.log(data))
//     .catch(errors => console.log("errors: ", errors))

//2. ASYNC AWAIT



async function demoFunction(){
    try {
        const navHolder = document.getElementById('myList1')
        const temp = await fetch("../public/assets/data/content1.json")
        const data = await temp.json();
        data.mainnav.forEach(menuItem=>{
            const listItem = document.createElement('ul');
            listItem.innerHTML = `<a href="${menuItem.url}">${menuItem.text}</a>`
            navHolder.append(listItem);
        })

    }   catch (error) {
        console.log('error: '. error);
    }
}
demoFunction();