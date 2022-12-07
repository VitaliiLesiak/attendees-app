import React from "react"
import AttendeesItem from "../attendees-item/attendees-item.component"
import './attendees-list.styles.css'

class AttendeesList extends React.Component {
    removeElement = (e) => {
        this.props.removeBlock(e)
    }
    render() {
        return (
            <div className="block__list">
                    {
                        this.props.data.map(el => {
                            return <AttendeesItem key={el.id} data={el} removeBlock={this.removeElement} />
                        })
                    }
            </div>
        )
    }
}
export default AttendeesList