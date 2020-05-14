import React from 'react';

const CardBack = (props) => {

    const handleClick = (event) => {
        props.handleClick(event.currentTarget.id)
    }
    return (
        <div>
            <div className='card-side side-back'>
                <div className='container-fluid'>
                    <div className='row'>
                        <img src={props.img} alt='Project link' />
                        <div className="text-into">
                        </div>
                    </div>
                </div>
            </div>
            <div className="icons">
            <i class="fas fa-angle-left" id={props.id} onClick={handleClick}></i>
                <a href={props.code} target="_blank" rel="noreferrer noopener"> Visit code <i className="fas fa-code"></i> </a>
                <a href={props.website} target="_blank" rel="noreferrer noopener"> Visit website  <i className="fas fa-external-link-alt"></i></a>
            </div>
        </div>
    )
}


export default CardBack;