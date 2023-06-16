/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	let slidePath = params.slidepath;
	slidePath = `${slidePath.charAt(0).toUpperCase()}${slidePath.slice(1)}`;
	console.log(slidePath);
	const module = await import(`../../lib/slides/${slidePath}.svx`);
	console.log(module);
	return {
		slide: module.default,
	};
}
