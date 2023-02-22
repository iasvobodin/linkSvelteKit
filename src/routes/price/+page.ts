export const prerender = true;
export async function load({ fetch }) {
    const res = await fetch(`/db/price.json`);
    const pricedata = await res.json();

    if (res.ok) {
        return { pricedata }
    }
}