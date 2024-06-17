function Button_Lecture () {

    const play = () => {
        const vidYoutube = "https://www.youtube.com/watch?v=MVHWJ9PDj6c";
        window.open(vidYoutube, `_blank`);
    };



return (
    <>
        <button onClick={play}>
        LECTURE
        </button>
    </>
    
    
)

}

export default Button_Lecture