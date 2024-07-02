function openInNewTab(url){
    window.open(url, '_blank').focus()
}
function scrollToSection(section){
    document.getElementById(section).scrollIntoView({behavior: "smooth", block: "center"})
}