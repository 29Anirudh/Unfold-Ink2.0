import ListItems from "../components/ListItems";
const Movies=({posts})=>{
    return(
        <>
        <div className="w-screen min-h-screen bg-white pt-20 p-16" id="Movies">
                    <p className="text-3xl font-bold">Movies</p>
                    <ListItems posts={posts}/>
                </div>
        </>
    )
}
export default Movies;