import Article from "./Article"

// id: 1,
// title: "Components 101",
// date: "December 15, 2020",
// preview: "Setting up the building blocks of your site",
// minutes: 5,

function ArticleList({ posts }) {

    const renderArticle = posts.map((post) => {
        return (
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
        )
    })

    return (
        <main>
            {renderArticle}
        </main>
    )
}

export default ArticleList;