
const linksSocialMedia = {
  github: "wttlins",
  youtube: "wttlins",
  instagram: "wttlins",
  twitter: "wttlins",
  facebook: "wttlins" /* último elemento não precisa de vírgula */
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    alert(li.children[0].href)
  }
}
changeSocialMediaLinks()