import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight, faTimesCircle} from  '@fortawesome/free-solid-svg-icons'

const imagesData = [
    {
        "image":require("../img/1.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"0"
    },
    {
        "image":require("../img/2.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"1"
    },
    {
        "image":require("../img/3.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"2"
    },
    {
        "image":require("../img/4.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"3"
    },
    {
        "image":require("../img/5.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"4"
    },
    {
        "image":require("../img/6.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"5"
    },
    {
        "image":require("../img/7.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"6"
    },
    {
        "image":require("../img/8.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"7"
    },
    {
        "image":require("../img/9.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"8"
    },
    {
        "image":require("../img/10.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"9"
    },
    {
        "image":require("../img/11.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"10"
    },
    {
        "image":require("../img/12.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"11"
    },
    {
        "image":require("../img/13.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"12"
    },
    {
        "image":require("../img/14.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"13"
    },
    {
        "image":require("../img/15.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"14"
    },
    {
        "image":require("../img/16.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"15"
    },
    {
        "image":require("../img/17.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"16"
    },
    {
        "image":require("../img/18.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"17"
    },
    {
        "image":require("../img/19.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"18"
    },
    {
        "image":require("../img/20.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"19"
    },
    {
        "image":require("../img/21.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"20"
    },
    {
        "image":require("../img/22.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"21"
    },    {
        "image":require("../img/23.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"22"
    },
    {
        "image":require("../img/24.jpg"),
        "title":"Lorem Ipsum",
        "data":"2011-2020",
        "index":"23"
    },
];

const Gallery = () => {

    const [dispImg, setDisp] = React.useState('');
    const [cardIndex, setIndex] = React.useState(0);
    const [dispImgStyle, setStyle] = React.useState({display: 'none'});

    const showImage = (event) => {
        setDisp(imagesData[Number(event.target.id)].image);
        setIndex(Number(event.target.id));
        setStyle({display: 'flex'});
    };

    const closeDisp = () => {
        setStyle({display: 'none'});
    };

    const prevShow = () => {
        if (cardIndex === 0) {
            setIndex(imagesData.length-1);
            setDisp(imagesData[imagesData.length-1].image)
        } else {
            let decrement = cardIndex - 1;
            setDisp(imagesData[decrement].image);
            setIndex(decrement)
        }
    };

    const nextShow = () => {
        if (cardIndex === imagesData.length-1) {
            setIndex(0);
            setDisp(imagesData[0].image)
        } else {
            let increment = cardIndex + 1;
            setDisp(imagesData[increment].image);
            setIndex(increment)
        }
    };

    const card = imagesData.map(function (obj, ind) {
        return (
            <div className="cards" key={ind}>
                <img src={obj.image} alt={obj.image} width="200px" height="300px"/>
                <div className="card-info">
                    <h5 className="card-title">
                        {obj.title}
                    </h5>
                    <span>{obj.data}</span>
                    <button id={ind} onClick={showImage}>Посмотреть</button>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="card-container">
                {card}
            </div>
            <div className="lightbox" style={dispImgStyle}>
                <div className="closes" onClick={closeDisp}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </div>
                <div className="carousel">
                    <span className="left" onClick={prevShow}><FontAwesomeIcon icon={faArrowLeft}/></span>
                    <span className="right" onClick={nextShow}><FontAwesomeIcon icon={faArrowRight}/></span>
                </div>
                <img src={dispImg} alt={dispImg}/>
            </div>
        </div>
    )
};
export default Gallery;
