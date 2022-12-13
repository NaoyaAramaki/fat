window.onload = () => {
    // var url = location.pathname;
    const ctnBtn = document.querySelector(".p-ctnBtn");
    const chgPoint = document.querySelector(".l-footer");
    const options = {
        root: null,
        rootMargin: 0 + "px",
        threshold: 0,
    }

    const observer = new IntersectionObserver(chgColor, options);
    observer.observe(chgPoint);
    function chgColor(entries) {
        if(entries[0].isIntersecting) {
            ctnBtn.classList.add("is-change");
        } else {
            ctnBtn.classList.remove("is-change");
        }
    }
}