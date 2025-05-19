import ListItems from "../components/ListItems";
const Economics = ({posts}) => {
  return (
    <>
      <div className="w-screen min-h-screen bg-white pt-20 p-16" id="Economics">
            <p className="text-3xl font-bold">Economics</p>
            <ListItems posts={posts}/>
        </div>
    </>
  );
};
export default Economics;
