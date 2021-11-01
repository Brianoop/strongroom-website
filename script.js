
function toggle()
{

    const navbarLinks = document.getElementsByClassName('navbar-links')[0]

    const downloadButton = document.getElementsByClassName('download-button')[0]

    navbarLinks.classList.toggle('active')

    downloadButton.classList.toggle('active')

    return false; 
}