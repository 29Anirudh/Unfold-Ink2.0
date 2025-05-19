import ListItems from "../components/ListItems";
const Cricket=({posts})=>{
    return(
        <>
        <div className="w-screen min-h-screen bg-white pt-20 p-16" id="Cricket">
            <p className="text-3xl font-bold">Cricket</p>
            <ListItems posts={posts}/>
        </div>
        </>
    )
}
export default Cricket;