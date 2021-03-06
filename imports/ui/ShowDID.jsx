import createReactClass from 'create-react-class'
import QRCode from 'qrcode.react'
import React from 'react'
import {Button, Modal, ModalBody, ModalHeader} from 'reactstrap'
import ShowTruncatedText from '/imports/ui/ShowTruncatedText'

const ShowDID = createReactClass({

  getInitialState: () => ({modal: false}),

  toggle: function () {
    this.setState({
      modal: !this.state.modal
    })
  },

  render: function () {
    const did = `did:btcr:${this.props.did}`
    return (
      <div>
        <Button color='primary' onClick={this.toggle} block> Show DID </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <ShowTruncatedText text={did} />
          </ModalHeader>
          <ModalBody>
            <div className='d-flex justify-content-center'>
              <QRCode value={did} size={256} className='mx-auto' />
            </div>
          </ModalBody>
        </Modal>
      </div>
    )
  }
})

export default ShowDID
