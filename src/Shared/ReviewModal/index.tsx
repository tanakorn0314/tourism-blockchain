import React, { useState } from 'react';
import { Button, Modal, Input, } from 'antd';
import { useFormInput } from '../../hook/useFormInput';
import { connect } from 'react-redux';
import { ReviewActions } from '../../redux/review/actions';

const ReviewModal = props => {

    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const showModal = () => { setVisible(true) };
    const hideModal = () => { setVisible(false) };

    const review = useFormInput('');
    const score = useFormInput('0');

    const handleSubmit = async () => {
        setLoading(true);
        const result = await props.createReview(props.name, parseInt(score.value), review.value);
        setLoading(false);
    }

    return (
        <>
            <Button size='small' onClick={showModal}>View</Button>
            <Modal
                title="review"
                visible={visible}
                onCancel={hideModal}
                footer={null}
            >
                <Input.TextArea placeholder="type somthing" style={{ marginBottom: 5 }} {...review} />
                <Input type='number' defaultValue='0' style={{ marginBottom: 5, width: 50 }} {...score} />
                <br></br>
                <Button size='small' style={{ marginBottom: 5 }} onClick={handleSubmit} loading={loading}>Submit</Button>
                <hr></hr>
                {
                    props.reviews.map((review, index) => (
                        <div key={index}>
                            <div>{review.score}/5</div>
                            <div>{review.message}</div>
                            <hr></hr>
                        </div>
                    ))
                }
            </Modal>
        </>
    )
}

export default connect(state => state.Review, ReviewActions)(ReviewModal);