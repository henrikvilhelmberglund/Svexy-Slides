/** @type {import('./$types').PageLoad} */

export async function load() {
	const files = import.meta.glob("../lib/slides/*.svx");
	const slides = [];
	const promises = [];
	for (const [path, file] of Object.entries(files)) {
		// ? promise stuff is not needed because we only need the paths, but keeping it here for looking up later
		// console.log("path", path);
		// console.log("file", file);
		// const promise = file().then((mod) => {
		// console.log(path, mod);
		let newPath = path.split("/").pop();
		newPath = newPath.split(".svx")[0];
		slides.push(newPath);
		// return newPath;
		// });
		// promises.push(promise);
	}
	// const results = await Promise.all(promises);
	// console.log(results);
	// return { slides: results };
	return { slides };
}
