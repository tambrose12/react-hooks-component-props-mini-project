

function About({ image = "https://via.placeholder.com/215", about }) {

    // const renderImageSrc = () => {
    //     if (image !== "") {
    //         return { image }
    //     } else {
    //         return "https://via.placeholder.com/215"
    //     }
    // }

    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About;