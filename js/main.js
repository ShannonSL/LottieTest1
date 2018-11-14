(() => {
    let animContainer = document.querySelector("#preloader");

    var animItem = bodymovin.loadAnimtation({
        wrapper : animContainer,
        animType : 'svg',
        loop: true,
        autoplay: false,
        path : './data/search.json'
    });

    function playAnimation() {
        animItem.play();
    }

    animContainer.addEventListener('mouseover', playAnimation)

})();

