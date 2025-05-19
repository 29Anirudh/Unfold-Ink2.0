import ListItems from "../components/ListItems";
const Cultural=({posts})=>{
    return(
        <>
        <div className="w-screen min-h-screen bg-white pt-20 p-16" id="Cultural">
            <p className="text-3xl font-bold">Cultural</p>
            <ListItems posts={posts}/>
        </div>
        </>
    )
}
export default Cultural;