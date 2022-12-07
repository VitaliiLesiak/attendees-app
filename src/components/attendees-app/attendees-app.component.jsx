import React from "react"
import AttendeesList from "../attendees-list/attendees-list.component"
import AttendeesForm from "../attendees-form/attendees-form.component"
import axios from 'axios'
import { connect } from "react-redux"
import { onChange } from "../../redux/actions/actions"

const URL = "http://localhost:3004/persons"

class AttendeesApp extends React.Component {
    constructor(props) {
        super(props)
        this.checkAxios = this.checkAxios.bind()
    }
    checkAxios = () => {
        axios.get(URL)
          .then(res => {
            const persons = res.data;
            this.props.allObject(persons)
          })
    }
    componentDidMount() {
        this.checkAxios()
    }
    newPerson = (person) => {
        axios.post(URL, {
            name: person.name,
            color: person.color
        })
        this.checkAxios()
    }
    removeElement = (id) => {
        axios.delete(`${URL}/${id}`)
        this.checkAxios()
    }
    render() {
        const {counter} = this.props
        return (
            <div>
                <h1 className="atten">Attendees</h1>
                <hr />
                <AttendeesForm newAttendees={this.newPerson} />
                <hr />
                <AttendeesList removeBlock={this.removeElement} data={counter} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        allObject: (arr) => dispatch(onChange(arr))
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttendeesApp)