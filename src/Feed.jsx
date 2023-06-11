const Feed = ({ title, link, author, date }) => {
    let formatted = { day: "numeric", month: "long", year: "numeric" }
    let articleDate = new Date(date).toLocaleDateString("en-PH", formatted)
    return (
        <>
        <div className="text-white hover:text-teal-200">
        <a href={link}>
        <h3 className="font-bold">{title}</h3>
        <h2>{author}</h2>
        <p>{articleDate}</p>
        </a>
        </div>
        </>
    )
}
export default Feed;