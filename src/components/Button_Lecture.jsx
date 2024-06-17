function Button_Lecture () {

//     const play = () => {
//         const vidYoutube = "https://www.youtube.com/watch?v=MVHWJ9PDj6c";
//         window.open(vidYoutube, `_blank`);
//     };



// return (
//     <>
//         <button onClick={play}>
//         LECTURE
//         </button>
//     </>
    
    
// )

// }

// export default Button_Lecture





const Button_Lecture = () => {
    return (
        <div>
            <video width="600" controls autoPlay>
                <source src="./assets/sons/clip.mp4" type="video/mp4" />
            </video>
        </div>
    );
};
}

export default Button_Lecture;