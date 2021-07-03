import { useEffect, useState } from 'react';

import Tmdb from '../../services/tmdb';

import { ReviewsResponse } from '../../types/tmdb';

import { truncateText } from '../../utils/truncateText';

import DefaultUserAvatar from '../../assets/images/light_default_user-avatar.png';
import ArrowLeft from '../../assets/images/arrow_left-icon.svg';
import ArrowRight from '../../assets/images/arrow_right-icon.svg';

import * as S from './styles';

interface ReviewBoxProps {
  id: string;
  mediaType: string;
}

const ReviewBox = ({ id, mediaType }: ReviewBoxProps) => {
  const [reviewsData, setReviewsData] = useState({} as ReviewsResponse);
  const [activeReview, setActiveReview] = useState(0);

  const previousReview = () => {
    if (activeReview === 0) {
      setActiveReview(reviewsData.results!!!.length - 1);
    } else {
      setActiveReview((prev) => prev - 1);
    }
  };

  const nextReview = () => {
    if (activeReview === reviewsData.results!.length - 1) {
      setActiveReview(0);
    } else {
      setActiveReview((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailsResponse = await Tmdb.getReviews(mediaType, id);

        setReviewsData(detailsResponse);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id, mediaType]);

  return (
    <S.Container>
      <h1>Reviews</h1>
      <S.Wrapper>
        {reviewsData.results?.length !== 0 ? (
          <>
            <S.Button onClick={() => previousReview()}>
              <img src={ArrowLeft} alt="Previous review" />
            </S.Button>

            <S.Photo
              src={
                reviewsData.results &&
                reviewsData.results[activeReview].author_details.avatar_path === null
                  ? DefaultUserAvatar
                  : reviewsData.results &&
                    reviewsData.results[
                      activeReview
                    ].author_details.avatar_path.startsWith('/http')
                  ? DefaultUserAvatar
                  : Tmdb.image(
                      `w300/${
                        reviewsData.results &&
                        reviewsData.results[activeReview].author_details.avatar_path
                      }`
                    )
              }
              loading="lazy"
            />

            <S.MiddleWrapper>
              <S.Name>
                {reviewsData.results &&
                  reviewsData.results[activeReview].author_details.username}
              </S.Name>
              <a
                href={reviewsData.results ? reviewsData.results[activeReview].url : '#'}
                target="_blank"
                rel="noreferrer"
              >
                <S.Text>
                  {reviewsData.results &&
                    truncateText(reviewsData.results[activeReview].content, 500)}
                </S.Text>
              </a>
            </S.MiddleWrapper>

            <S.Button onClick={() => nextReview()}>
              <img src={ArrowRight} alt="Next review" />
            </S.Button>
          </>
        ) : (
          <p>We don't have any reviews at this moment</p>
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export default ReviewBox;
