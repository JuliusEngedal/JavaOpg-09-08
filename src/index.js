console.log ('hello world')

fetch('Data/profile.json')

.then((response) => response.json())

.then((profil) => {
    console.log(profil.avatar_url);
    let imageContainer = document.querySelector('#profile-image')
    let imageText = document.querySelector('.profile-text') 

    imageContainer.src = profil.avatar_url;

    imageText.textContent = profil.login;
    
    console.log('TEST', imageContainer.src, imageContainer.id)
});
