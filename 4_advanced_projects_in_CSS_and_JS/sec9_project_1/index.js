document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello world!');

    const scroller = new Scroller('#root');
    console.log(scroller)
 
    document.addEventListener('mousewheel', scroller.listenScroll)
 
    function scroll(direction) {
        if (direction === 1) {
            const isLastSection = currentSectionIndex === sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const firstSection = currentSectionIndex === 0;
            if (firstSection) return;
        }
        currentSectionIndex = currentSectionIndex + direction;
        console.log(currentSectionIndex);

        scrollToCurrentSection();
    }

    function scrollToCurrentSection() {
        sections[currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
})