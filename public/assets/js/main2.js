

//2. ASYNC AWAIT



async function demoFunction(){
    try {
        const navHolder = document.getElementById('myList2')
        const temp = await fetch("../public/assets/data/content2.json")
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