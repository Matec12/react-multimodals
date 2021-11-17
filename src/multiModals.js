

import React from "react";
import Modal from "react-modal";

class MutipleButtonsWithModalInSameComponent  extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showModal: false,
        activeModal: "",
      };
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
  
    handleOpenModal(val) {
      this.setState({ activeModal: val });
      this.setState({ showModal: true });
    }
  
    handleCloseModal() {
      this.setState({ showModal: false });
      this.setState({ showModal: "" });
    }
    render() {
      return(
        <>
        {/* {'one item with modal link -login'} */}
        <div className="icon">
            <a
              className="button"
              onClick={() => this.handleOpenModal("login")}
            >
              login (modal)
            </a>
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "login"
              }
              contentLabel="login Modal"
            >
              <div className="content">
                <button className="close" onClick={this.handleCloseModal}>X</button>
                <p>login content in here</p>
              </div>

            </Modal>
        </div>
        {/* {'another item with modal link calendar, add more by mutiplying this below'} */}
        <div className="icon">
            <a
              className="button"
              onClick={() => this.handleOpenModal("calendar")}
            >
              calendar (modal)
            </a>
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "calendar"
              }
              contentLabel="calendar Modal"
            >
              <div className="content">
                <button className="close" onClick={this.handleCloseModal}>X</button>
                <p>calendar content in here...</p>
              </div>

            </Modal>
        </div>

        {/* {'another item with modal link team, add more by mutiplying this below'} */}
        <div className="icon">
            <a
              className="button"
              onClick={() => this.handleOpenModal("team")}
            >
              team (modal)
            </a>
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "team"
              }
              contentLabel="team Modal"
            >
              <div className="content">
                <button className="close" onClick={this.handleCloseModal}>X</button>
                <p>team content in here...</p>
              </div>

            </Modal>
        </div>

        </>
      )
      
    }
}
export default MutipleButtonsWithModalInSameComponent;