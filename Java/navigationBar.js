const navPages = [
    {name: "Home" , href: '/SampleWebsite/index.html'},
    {name: "About Me", href: '/SampleWebsite/AboutMeFolder/aboutMe.html'}
];

export function loadNavbar(CurrentPageName){
    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");
    for(let page of navPages){
        const li = document.createElement("li");
        if (CurrentPageName != page.name){
            const a = document.createElement("a");
            a.innerText = page.name;
            a.setAttribute("href", page.href);
            li.appendChild(a);            
        } 
        else{
            li.innerText = page.name;
        }
        ul.appendChild(li);        
    }
    nav.appendChild(ul);
}