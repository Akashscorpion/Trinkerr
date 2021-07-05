import React,{useState,useEffect} from 'react'

function ImgeSlider(props) {
  const [imgcounter, setimgcounter] = useState(0)
  const [imgDetails, setimgDetails] = useState("")
    const [state, setState] = useState({
        img: [
            "http://getdrawings.com/free-icon-bw/one-icon-3.png",
            "http://getdrawings.com/free-icon-bw/free-shirt-icon-9.png",
            "http://getdrawings.com/free-icon-bw/serial-number-icon-19.png",
            "http://getdrawings.com/free-icon-bw/serial-number-icon-18.png",
            "http://getdrawings.com/free-icon-bw/number-one-icon-17.png"
        ],
        imgName: [
        "One",
        "Two",
          "Three",
          "Four",
          "Five"
        ]
      })
    

      useEffect(() => {

        if((state.img.length-1)===imgcounter){
          setimgDetails(props.userF+" "+props.userL+" you have rated all the images. Thank You!")
          console.log("imgDetails");
        }
        else
        setimgDetails(state.imgName[imgcounter])
      }, [imgcounter])
      

  function handlePrev() {
    setimgcounter(prev=>prev-1);
  }


 function handleNext() {
    setimgcounter(prev=>prev+1);
  }

    return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div >
          <button disabled={imgcounter === 0} onClick={handlePrev}>
            -
          </button>
        </div>
        <div className="cards">
          <img height="100px" width="100px" src={state.img[imgcounter]} />
        </div>
        <div>
          <button
            disabled={imgcounter === state.img.length - 1}
            onClick={handleNext}
          >
            +
          </button>
        </div>

        {imgDetails && <><div><p>{" "+imgDetails}</p></div></> }
      </div>

    )
}

export default ImgeSlider
