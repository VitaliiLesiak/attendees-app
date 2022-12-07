import React from "react"
import './attendees-item.styles.css'
class AttendeesItem extends React.Component {
    removeBlock = (e) => {
        this.props.removeBlock(+e.target.parentNode.attributes.remove_id.value)
    }
    render() {
        
        const { color, name, id } = this.props.data
        return (
            <div className="block-item">
                <div className="block__item" style={{ backgroundColor: color }}>
                    <div className="nameIs">
                        <div className="title">Hello</div>
                        <p>my name is</p>
                    </div>
                    <div className="about">{name}</div>
                </div>
                <div className="remove">
                    <div className="remove__block" remove_id={id} onClick={this.removeBlock}>
                        <div><span>X</span> Remove attendees</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AttendeesItem