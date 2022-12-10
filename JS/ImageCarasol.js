var images = ["Images\\PXL_20220911_185013174.jpg","Images\\PXL_20220911_190446050.jpg","Images\\PXL_20220911_190545120.jpg","Images\\PXL_20220911_185801600.jpg","Images\\DJI_0033.JPG","Images\\Flying.JPG","Images\\RC_Plane.JPG"];

function toggleImg(dir) {
    const imgEl = document.getElementById("imgCont");
    let path = imgEl.getAttribute("src");
    let index = images.indexOf(path.replace('../../',''));
    // console.log(images.length,index)
    let newPath = images[((index + dir) > -1? (index + dir):images.length-1)%images.length];
    imgEl.setAttribute("src",`../../${newPath}`);
}