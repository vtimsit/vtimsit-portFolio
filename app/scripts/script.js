// const scene = new SceneWebGl()
// const cube = new Cubes(0, 200, scene)
// const cursorParallax = new CursorParallaxWebGl(cube)
// cube.animate()

const wavesCanvas = new WavesCanvas(100, 100, 6000)
// const wavesCanvasProject = new WavesCanvasProject(20, 60, 1000)

const slider = new SliderCube('.cubeSlider_1__item', 90, 0)
const slider_2 = new SliderCube('.cubeSlider_2__item', 0, -90)
const slider_3 = new SliderCube('.cubeSlider_3__item', -90, 0)

const pagesSlider = new Slider()
const cursorParallax = new CursorParallax()

const lazyLoading = new LazyLoading('--lazyLoad', '--loaded')