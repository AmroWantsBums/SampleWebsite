const navPages = [
    {name:"Home" , href: '/SampleWebsite/index.html'}
] 


export function loadNavbar(CurrentPageName){
    const nav = document.querySelector(header > nav);
    const ul = document.createAttribute("ul");
    for(let navPages of navPages){
        const li = document.createAttribute("li");
        if (CurrentPageName != navPages.name){
            const a = document.createAttribute("a");
            a.innerText = navPages.name;
            a.SetAttribute("href", navPages.href);
            li.appendChild(a);
            ul.appendChild(li);
        }
        nav.appendChild(ul);
    }
}