import tvs from "../tvDummy";

function TvItem({ tv }) {
    return (
        <div>
            <div>제목 : {tv.name}, 평점 : {tv.vote_average}</div>
        </div>
    )
}
const TV = () => {
    return (
        <div>
            <h1>TV 프로그램 목록</h1><div>
                {tvs.results.map(function (tv) {
                    return <TvItem tv={tv} />
                })}
            </div></div>
    )
}

export default TV;