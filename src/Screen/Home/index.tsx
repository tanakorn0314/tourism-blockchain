import MainLayout from '../../Layout/MainLayout';
import PersonCard from '../../Shared/PersonCard';
import { useEffect, useState } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { ReviewActions } from '../../redux/review/actions';
import ReviewController from '../../services/review/controller';

const HomeScreen = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        props.getReviewData().then((res) => { setLoading(false); });
        const reviewController = new ReviewController();

        reviewController.addReviewCreatedListener((data) => {
            console.log('listener', data);
            props.pushReviewData(data.name, data.score, data.message);
        });

    }, []);

    const loadComponent = (
        <div style={{ width: '100%', height: '90vh', display: 'flex', alignItems: 'ceneter', justifyContent: 'center' }}>
            <Icon type="loading" style={{ fontSize: 32 }} />
        </div>
    )

    return (
        <MainLayout>
            {
                loading ? loadComponent : (
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                            props.reviewData.map((data, index) => {
                                const { name, reviews } = data;
                                return (
                                    <div key={index} style={{ marginRight: 5 }}>
                                        <PersonCard key={index} name={name} reviews={reviews} />
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </MainLayout>
    )
}

export default connect(state => state.Review, ReviewActions)(HomeScreen);