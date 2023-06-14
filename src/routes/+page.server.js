/** @type {import('./$types').PageLoad} */
import Slides from "/src/lib/Slides.svx";
import { compile } from "mdsvex";

export async function load() {
	const css = Slides.render().css.code;
	console.log(css);
	const slides = Slides.render()
		.html.toString()
		.split(/<hr[^>]*>/i);
	console.log(slides);
	let compiledSlides = [];
	for (let i = 0; i < slides.length; i++) {
		let slide = slides[i].trim();

		const tempSlide = await compile(slide);

		let outputSlide = tempSlide.code.split("\n");

		outputSlide = outputSlide.filter((content) => {
			if (content !== "" && content !== "\n") {
				return content;
			}
		});
		compiledSlides.push(outputSlide);
	}
	// compiledSlides = compiledSlides.join("");
	console.log(compiledSlides[0]);
	// const allSlides = compile(slides);

	return {
		slides: compiledSlides,
		css,
	};
}
