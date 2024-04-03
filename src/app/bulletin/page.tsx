import { PostCards }  from "../../components/PostCards"

export default function Bulletin() {
    return (
        <>
            <p className="flex justify-center items-center text-2xl font-bold leading-none tracking-tight text-gray-900">{"Post Anything You Like! (Note: Anyone can see them)"}</p>
            <PostCards></PostCards>
        </>
       
    )
}
