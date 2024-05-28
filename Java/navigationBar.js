const navPages = [
    {name:"Home" , href: '/SampleWebsite/index.html'}
] 


export function loadNavbar(CurrentPageName){
    const nav = document.querySelector(header > nav);
    const ul = document.createAttribute("ul");
    for(let navPages of navPages){
        if (CurrentPageName != navPages.name){
            const a = document.createAttribute("a");
            a.innerText = navPages.name;
            a.SetAttribute("href", navPages.href);
            ul.appendChild(a);
        }
        nav.appendChild(ul);
    }
}