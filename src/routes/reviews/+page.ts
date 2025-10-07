export const prerender = true;
export async function load({ fetch }) {
	const res = await fetch(`/db/reviews.json`);
	const reviews = await res.json();
	// console.log(reviews);

	if (res.ok) {
		return { reviews };
	}
}
