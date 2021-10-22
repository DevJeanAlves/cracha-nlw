const linksSocialMedia = {
  github: 'DevJeanAlves',
  youtube: 'rocketseat',
  facebook: 'rocketseat',
  instagran: 'therick_real',
  twitter: 'pan'
}

function changeName() {
  userName.textContent = 'Rick Alves'
  //forma simplificada do exemplo abaixo, o js ja entende oque fazer.
  // const userName = (document.getElementById('userName').textContent =
  // 'Therick')
}
// changeName()

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  // fetch nos traz as infos que a url responde para posteriormente pegarmos(nesse caso queremos um json)

  // pegamos atraves da promisse(.then())   *then = faça
  // fetch = pegou - then = faça  ("pegou entao faça")
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
