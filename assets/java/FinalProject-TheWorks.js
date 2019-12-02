let carouselWidth = 650;

let carouselOffset = 0;

let prevButton = document.getElementById('button-previous');
let nextButton = document.getElementById('button-next');
let imageRow = document.getElementById('carousel-image-row');

let imageNum = 0;

captions = [
    'To supplement his theory on sexual selection in The Descent of Man, and Selection in Relation to Sex, Darwin first sought out John Gould, the leading ornithologist and illustrator of the mid-19th century. Gould not only accompanied Darwin on his voyage to the Galapagos to help identify and illustrate birds, he also provided crucial information for Darwin’s publications. Then how come Darwin did not include Gould’s lithographs of pheasant-peacocks? The answer lies in their differing views on evolution. Darwin felt that Gould’s depictions of birds did not depict the male-male competition, the sexually-charged courtship, nor female agency in choosing her mate. His lithographs were too saturated with Victorian notions of domesticity and familial harmony.',
    'Instead of using Gould’s lithographs, Darwin obtained Alfred Brehm’s wood-engravings to illustrate the first edition of The Descent of Man. Although Brehm supported Darwin’s views and captured the competitive world of natural selection, this essence was not as visible in his version of the polyplectron. The absence of both male display to the female and female selection of the male caused Darwin to regret using Brehm’s illustrations.',
    'This dish offers an example of the flexible classification for what De Morgan constituted as “a peacock.” These “strange birds,” according to the label, exhibit ocelli-feathers distinctive of the peafowl species. Curiously though, these are apparently not exactly representations of peacocks but rather “evolved fantastic variants on the peacock motif.” On the other hand, the six-tile panel entitled “Peacock and Carnation” depicts birds whose abstracted feathers are absent of any patterns indicative of peacocks. These two examples demonstrate that what De Morgan’s imagination considers to be a peacock dares to surpass naturalism to attain beautiful results. De Morgan’s application of peacock feather motifs onto a hybrid bird that does not reflect the form of any real bird (or at least not any singular real bird) alludes to Darwin-esque theories of evolutionary mutation.',
]

function showNextImage() {
    imageNum = imageNum + 1;
    let newPixelOffset = -1 * carouselWidth * imageNum;
    console.log(imageRow.style.left)
    imageRow.style.left = carouselOffset + (-1 * carouselWidth * imageNum) + "px";
    checkControls();
}

nextButton.onclick = showNextImage;

function showPreviousImage () {
    imageNum = imageNum - 1;
    let newPixelOffset = -1 * carouselWidth * imageNum;
    imageRow.style.left = carouselOffset + (-1 * carouselWidth * imageNum) + "px";
    checkControls();
}

prevButton.onclick = showPreviousImage;

let totalImages = document.getElementsByClassName('carousel-image').length;

function checkControls () {

    showMeTheText()

    if (imageNum === 0) {
        prevButton.classList.add('hidden');
    } else if (prevButton.classList.contains('hidden')) {
        prevButton.classList.remove('hidden');
    }

    if (imageNum === totalImages - 1) {
        nextButton.classList.add('hidden');
    }  else if (nextButton.classList.contains('hidden')) {
        nextButton.classList.remove('hidden');
    }
}

function showMeTheText() {
    caption = document.getElementById('caption');
    caption.textContent = captions[imageNum];
}

checkControls();