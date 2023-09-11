import {useSWR} from "../hooks/useSWR.js";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function SWR() {
    const { data, error } = useSWR(
        "https://api.github.com/repos/vercel/swr",
        fetcher
    );

    if (error) return <div>failed</div>
    if (!data) return <div>loading</div>

    return <div>succeeded</div>
}
