import ListItems from "../components/ListItems";
const Politics=({posts})=>{
    return(
        <>
        <div className="w-screen min-h-screen bg-white pt-20 p-16" id="Politics">
            <p className="text-3xl font-bold">Politics</p>
            <ListItems posts={posts}/>
        </div>
        </>
    )
}
export default Politics;